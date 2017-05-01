import Token, { TokenKind, getTokenKind } from '../token';
import { TokenStream, CharacterStream } from '../stream/';
import Location from '../location';
import Match from '../utils/Match';
import * as _ from 'lodash';

export class CommentScanner {
  readonly stream: CharacterStream = null;
  private tokens: Token[] = []
  private previousToken: Token = null;
  private lexeme: string[]
  constructor(source?: string, location?: Location) {
    this.stream = new CharacterStream(source, location);
  }
  scan() { return this.previousToken = this.scanSource(); }
  toTokenStream() {
    let token = this.scan();
    while (token.kind !== TokenKind.EOF) { if (token.kind !== TokenKind.None) { this.tokens.push(token); } token = this.scan(); }
    return new TokenStream(this.tokens);
  }
  private current() { return this.stream.current(); }
  private next() { return this.stream.next(); }
  private accept() { return this.stream.accept(); }
  private consume(to: number, array?: string[]) { return this.stream.consume(to, array); }
  private peek(to: number) { return this.stream.peek(to); }
  private scanSource() {
    this.lexeme = [];
    while (Match.isWhiteSpace(this.current()) && !this.eof) { this.next() }

    if (this.eof) {
      return new Token('\0', TokenKind.EOF, this.location);
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
    } else { return new Token(this.accept(), TokenKind.None, this.location); }
  }
  private scanName(): Token {
    const prevToken = () => this.previousToken;
    const filter = (kind: TokenKind, ch: string): boolean => ({
      [TokenKind.Any]: !Match.isSpace(ch) && !'&|,)-='.includes(ch) && !Match.isSpace(ch),
      [TokenKind.Identifier]: !Match.isSpace(ch) && !'?:)-=,'.includes(ch) && !Match.isSpace(ch),
      [TokenKind.Initializer]: !Match.isSpace(ch) && !',)-='.includes(ch) && !Match.isSpace(ch),
      [TokenKind.Description]: !Match.isTerminator(ch)
    }[kind]);
    const consume = (kind: TokenKind): Token => {
      while (filter(kind, this.current())) { this.lexeme.push(this.accept()); }

      const { Any, Ampersand, Pipe, Identifier, LeftParen } = TokenKind;

      if (kind === Identifier) {
        // Skip whitespace
        while (Match.isWhiteSpace(this.current())) { this.next(); }
        // ... =>  (... | any) || (... & any )
        if (prevToken() && prevToken().kind === LeftParen) {
          if ('&|'.includes(this.current())) { kind = Any; }
        } else if (prevToken() && _.includes([Pipe, Ampersand], prevToken().kind)) { kind = Any; }
      }
      return new Token(this.lexeme.join(''), kind, this.location);
    }
    // @return Any
    if (prevToken() && prevToken().lexeme === '@return' && Match.isLetter(this.current())) return consume(TokenKind.Any);
    const { Tag, LeftParen, Comma } = TokenKind;
    if (prevToken() && _.includes([Tag, LeftParen, Comma], prevToken().kind)) { return consume(TokenKind.Identifier); }

    const { Colon, Arrow, Pipe, Ampersand } = TokenKind;
    if (prevToken() && _.includes([Colon, Arrow, Pipe, Ampersand], prevToken().kind)) { return consume(TokenKind.Any); }
    if (prevToken() && prevToken().kind === TokenKind.Equal) { return consume(TokenKind.Initializer); }

    return consume(TokenKind.Description);
  }
  private scanSimpleChar(): Token {
    const ch = this.accept();
    const kind = getTokenKind(ch);
    return new Token(ch, kind, this.location);
  }
  private scanTag(): Token {
    while (this.current() !== ':' && !Match.isSpace(this.current())) { this.lexeme.push(this.accept()); }
    return new Token(this.lexeme.join(''), TokenKind.Tag, this.location);
  }
  private scanMinus(): Token {
    const prevToken = this.previousToken;
    const isInitializer = prevToken &&
      prevToken.kind === TokenKind.Equal &&
      this.current() === '-' && Match.isDigit(this.peek(1));
    let kind: TokenKind = TokenKind.None;

    if (isInitializer) {
      this.lexeme.push(this.accept());
      while (Match.isDigit(this.current())) { this.lexeme.push(this.accept()); }
      kind = TokenKind.Initializer;
    } else { this.lexeme.push(this.accept()); kind = TokenKind.Minus }

    return new Token(this.lexeme.join(''), kind, this.location);
  }

  private scanMarkdown(): Token {
    const isMarkdownTag = (m1: string, m2: string, m3: string): boolean => m1 + m2 + m3 === '+--';
    // const isCommentStar = (col: number): boolean => (col === 0 || col === 1) && this.current() === '*';
    // let starEnabled: boolean = this.peek(-1) === '*';
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

    return new Token(this.lexeme.join(''), TokenKind.Markdown, this.location);
  }

  private scanEqualOrArrow(): Token {
    const lexeme = this.peek(1) === '>' ? this.accept() + this.accept() : this.accept();
    return new Token(lexeme, getTokenKind(lexeme), this.location);
  }
  private scanParenthesis(): Token {
    const lexeme = this.accept();
    const kind = lexeme === '(' ? TokenKind.LeftParen : TokenKind.RightParen;
    return new Token(lexeme, kind, this.location);
  }
  get location(): Location { return this.stream.location; }
  get eof() { return this.stream.eos; }
}
export default function Scanner(source?: string, location?: Location): CommentScanner {
  return new CommentScanner(source, location);
}