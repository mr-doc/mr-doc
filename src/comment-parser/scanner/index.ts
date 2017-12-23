// import Token, { TokenType, getTokenKind } from '../token';
import { TokenStream, CharacterStream } from '../stream/';
import Location from '../location';
import Match from '../utils/Match';
import * as _ from 'lodash';
import { TokenType, getTokenKind, Token } from '../token/';

export class CommentScanner {
  readonly stream: CharacterStream = null;
  private tokens: Token[] = []
  private lexeme: string[]
  constructor(source?: string, location?: Location) {
    this.stream = new CharacterStream(source, location);
  }
  scan() { return this.scanSource(); }
  toTokenStream() {
    let token = this.scan();
    while (token.kind !== TokenType.EOF) {
      if (token.kind !== TokenType.None) {
        this.tokens.push(token);
      } 
      token = this.scan();
    }
    if (this.previousToken().kind !== TokenType.EOF) {
      this.tokens.push(token);
    }
    return new TokenStream(this.tokens);
  }
  private current() { return this.stream.current(); }
  private next() { return this.stream.next(); }
  private accept() { return this.stream.accept(); }
  private consume(to: number, array?: string[]) { return this.stream.consume(to, array); }
  private peek(to: number) { return this.stream.peek(to); }
  private peekToken(to: number): Token {
    return to >= 0 && to < this.tokens.length ?
      this.tokens[to] : null;
  }

  private peekBackToken(to: number): Token {
    return this.peekToken(this.tokens.length - to);
  }
  private previousToken(): Token {
    return this.peekBackToken(1);
  }
  private scanSource() {
    this.lexeme = [];
    while (Match.isWhiteSpace(this.current()) && !this.eof) { this.next() }

    if (this.eof) {
      return new Token('\0', TokenType.EOF, this.location);
    } else if (Match.isLetterOrDigit(this.current()) || '\'\"[]{}.'.includes(this.current())) {
      return this.scanName();
    } else if (this.current() === '@') {
      return this.scanTag();
    } else if (this.current() === '-') {
      return this.scanMinus();
    } else if (this.current() === '+' && this.peek(1) === '-' && this.peek(2) === '-') {
      return this.scanMarkdown();
    } else if (':?|&,'.includes(this.current())) {
      return this.scanSimpleChar();
    } else if (this.current() === '=') {
      return this.scanEqualOrArrow();
    } else if ('()'.includes(this.current())) {
      return this.scanParenthesis();
    } else { return new Token(this.accept(), TokenType.None, this.location); }
  }
  private scanName(): Token {
    // Filter will stop the while-loop when a character reaches a certain point.
    const filter = (kind: TokenType, ch: string): boolean => ({
      [TokenType.Any]: !Match.isSpace(ch) && !'&|,)-='.includes(ch) && !Match.isSpace(ch),
      [TokenType.Identifier]: !Match.isSpace(ch) && !'?:)-=,'.includes(ch) && !Match.isSpace(ch),
      [TokenType.Initializer]: !Match.isSpace(ch) && !',)-='.includes(ch) && !Match.isSpace(ch),
      [TokenType.Description]: !Match.isTerminator(ch)
    }[kind]);
    const consume = (kind: TokenType): Token => {
      while (filter(kind, this.current())) { this.lexeme.push(this.accept()); }

      const { Any, Ampersand, Pipe, Identifier, LeftParen, Colon } = TokenType;

      if (kind === Identifier) {
        // Skip whitespace
        while (Match.isWhiteSpace(this.current())) { this.next(); }
        if (this.previousToken()) {
          // ... (...)
          if (this.previousToken().kind === LeftParen) {
            // ... : (any)
            if (this.tokens.length > 1 &&
              this.peekBackToken(2).kind == Colon &&
              this.peek(1) !== ':') {
              kind = Any;
            }
            // (... | any) || (... & any)
            else if ('&|'.includes(this.current())) { kind = Any; }
          } else if (_.includes([Pipe, Ampersand], this.previousToken().kind)) { kind = Any; }
        }
      }
      return new Token(this.lexeme.join(''), kind, this.location);
    }
    // @return Any
    if (this.previousToken()) {
      if (this.previousToken().lexeme === '@return' && Match.isLetter(this.current())) return consume(TokenType.Any);
      const { Tag, LeftParen, Comma } = TokenType;
      if (_.includes([Tag, LeftParen, Comma], this.previousToken().kind)) { return consume(TokenType.Identifier); }

      const { Colon, Arrow, Pipe, Ampersand } = TokenType;
      if (_.includes([Colon, Arrow, Pipe, Ampersand], this.previousToken().kind)) { return consume(TokenType.Any); }
      if (this.previousToken().kind === TokenType.Equal) { return consume(TokenType.Initializer); }
    }

    return consume(TokenType.Description);
  }
  private scanSimpleChar(): Token {
    const ch = this.accept();
    const kind = getTokenKind(ch);
    return new Token(ch, kind, this.location);
  }
  private scanTag(): Token {
    while (this.current() !== ':' && !Match.isSpace(this.current())) { this.lexeme.push(this.accept()); }
    return new Token(this.lexeme.join(''), TokenType.Tag, this.location);
  }
  private scanMinus(): Token {
    const prevToken = this.previousToken();
    const isInitializer = prevToken &&
      prevToken.kind === TokenType.Equal &&
      this.current() === '-' && Match.isDigit(this.peek(1));
    let kind: TokenType = TokenType.None;

    if (isInitializer) {
      this.lexeme.push(this.accept());
      while (Match.isDigit(this.current())) { this.lexeme.push(this.accept()); }
      kind = TokenType.Initializer;
    } else { this.lexeme.push(this.accept()); kind = TokenType.Minus }

    return new Token(this.lexeme.join(''), kind, this.location);
  }

  private scanMarkdown(): Token {
    const isMarkdownTag = (m1: string, m2: string, m3: string): boolean => m1 + m2 + m3 === '+--';
    let distance = this.peek(-1) === '*' ? this.location.column - 1 : null;
    distance = this.peek(-2) === '*' ? this.location.column - 2 : distance;

    // Consume the first three lexemes
    this.consume(3, this.lexeme);
    // Keep consuming the lexemes until markdown ends
    while (!isMarkdownTag(this.current(), this.peek(1), this.peek(2))) {

      if (distance && distance === this.location.column && this.current() === '*') { this.next(); }
      else { this.lexeme.push(this.accept()); }
    }
    // Consume the last three lexemes
    if (isMarkdownTag(this.current(), this.peek(1), this.peek(2))) { this.consume(3, this.lexeme); }

    return new Token(this.lexeme.join(''), TokenType.Markdown, this.location);
  }

  private scanEqualOrArrow(): Token {
    const lexeme = this.peek(1) === '>' ? this.accept() + this.accept() : this.accept();
    return new Token(lexeme, getTokenKind(lexeme), this.location);
  }
  private scanParenthesis(): Token {
    const lexeme = this.accept();
    const kind = lexeme === '(' ? TokenType.LeftParen : TokenType.RightParen;
    return new Token(lexeme, kind, this.location);
  }
  get location(): Location { return this.stream.location; }
  get eof() { return this.stream.eos; }
}
export default function Scanner(source?: string, location?: Location): CommentScanner {
  return new CommentScanner(source, location);
}