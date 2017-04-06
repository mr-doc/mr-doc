import Token, { TokenKind, getTokenKind } from '../token';
import { TokenStream } from '../stream/';
import { location } from '../location';
import Match from '../utils/Match';
import * as _ from 'lodash';

let _position = 0, _line = 1, _column = 1;
let _stream = "";
let _lexeme: string[], _tokens: Token[] = [];
let _previousToken: Token;

function isEOF() { return _position >= _stream.length - 1; }
function current(): string { return _stream[_position]; }
function next(): string {
  const ch = _stream[++_position];
  if (Match.isLineTerminator(ch)) { _line++; _column = 1; }
  else { _column++; }
  return ch;
}
function previous(): string {
  const ch = _stream[--_position];
  if (Match.isLineTerminator(ch)) { _line--; _column = 1; }
  else { _column--; }
  return ch;
}
function peek(to: number): string { return _stream[_position + to]; }
function consume(to: number, array?: string[]) {
  let i = 0;
  while (i < Math.abs(to)) {
    const s = to < 0 ? previous() : accept();
    if (array) { array.push(s); }
    i++;
  }
}
function accept(): string { const ch = current(); next(); return ch; }
function scan(): Token {
  _lexeme = [];
  while (Match.isWhiteSpace(current()) && !isEOF()) { next() };
  // console.log(current());
  
  if (isEOF()) {
    return new Token('\0', TokenKind.EOF, location(_position, _line, _column));
  } else if (Match.isLetterOrDigit(current()) || '\'\"[]{}.'.includes(current())) {
    return scanName();
  } else if (current() === '@') {
    return scanTag();
  } else if (current() === '-') {
    return scanMinus();
  } else if(current() === '+' && peek(1) === '-' && peek(2) === '-') { 
    return scanMarkdown();
  } else if (':?|&,'.includes(current())) {
    return scanSimpleChar();
  } else if (current() === '=') {
    return scanEqualOrArrow();
  } else if ('()'.includes(current())) {
    return scanParenthesis();
  } else { return new Token(accept(), TokenKind.None, location(_position, _line, _column)); }
}

function scanName(): Token {
  const filter = (kind: TokenKind, ch: string): boolean => ({
    [TokenKind.Any]: !Match.isSpace(ch) && !'&|,)-='.includes(ch) && !Match.isSpace(ch),
    [TokenKind.Identifier]: !Match.isSpace(ch) && !'?:)-=,'.includes(ch) && !Match.isSpace(ch),
    [TokenKind.Initializer]: !Match.isSpace(ch) && !',)-='.includes(ch) && !Match.isSpace(ch),
    [TokenKind.Description]: !Match.isLineTerminator(ch) && !Match.isNullTerminator(ch)
  }[kind]);
  const consume = (kind: TokenKind): Token => {
    while (filter(kind, current()) && !isEOF()) { _lexeme.push(accept()); }
    const { Any, Ampersand, Pipe, Identifier, LeftParen } = TokenKind;
    if (kind === Identifier) {

      // Skip whitespace
      while (Match.isWhiteSpace(current())) { next(); }
      // ... =>  (... | any) || (... & any )
      if (_previousToken && _previousToken.kind === LeftParen) {
        if ('&|'.includes(current())) { kind = Any; }
      } else if (_previousToken && _.includes([Pipe, Ampersand], _previousToken.kind)) { kind = Any; }
    }
    return new Token(_lexeme.join(''), kind, location(_position, _line, _column));
  }
  const { Tag, LeftParen, Comma } = TokenKind;
  if (_previousToken && _.includes([Tag, LeftParen, Comma], _previousToken.kind)) { return consume(TokenKind.Identifier); }

  const { Colon, Arrow, Pipe, Ampersand } = TokenKind;
  if (_previousToken && _.includes([Colon, Arrow, Pipe, Ampersand], _previousToken.kind)) { return consume(TokenKind.Any); }
  if (_previousToken && _previousToken.kind === TokenKind.Equal) { return consume(TokenKind.Initializer); }

  return consume(TokenKind.Description);
}
function scanSimpleChar(): Token {
  const ch = accept();
  const kind = getTokenKind(ch);
  return new Token(ch, kind, location(_position, _line, _column));
}
function scanTag(): Token {
  while (current() !== ':' && !Match.isSpace(current())) { _lexeme.push(accept()); }
  return new Token(_lexeme.join(''), TokenKind.Tag, location(_position, _line, _column));
}
function scanMinus(): Token {
  const isInitializer = _previousToken &&
    _previousToken.kind === TokenKind.Equal &&
    current() === '-' && Match.isDigit(peek(1));
  let kind: TokenKind = TokenKind.None;

  if (isInitializer) {
    _lexeme.push(accept());
    while (Match.isDigit(current())) { _lexeme.push(accept()); }
    kind = TokenKind.Initializer;
  } else { _lexeme.push(accept()); kind = TokenKind.Minus }

  return new Token(_lexeme.join(''), kind, location(_position, _line, _column));
}

function scanMarkdown() : Token {
  const isMarkdownTag = (m1: string, m2: string, m3: string): boolean => m1 + m2 + m3 === '+--';
  // const isCommentStar = (col: number): boolean => (col === 0 || col === 1) && current() === '*';
  // let starEnabled: boolean = peek(-1) === '*';
  let distance = peek(-1) === '*' ? _column - 1 : null;
  distance = peek(-2) === '*' ? _column - 2 : distance;

  // Consume the first three lexemes
  consume(3, _lexeme);
  // Keep consuming the lexemes until markdown ends
  while (!isMarkdownTag(current(), peek(1), peek(2))) {
    
    if (distance && distance === _column && current() === '*') { next(); }
    else { _lexeme.push(accept()); }
  }
  // Consume the last three lexemes
  if (isMarkdownTag(current(), peek(1), peek(2))) { consume(3, _lexeme); }
  
  return new Token(_lexeme.join(''), TokenKind.Markdown, location(_position, _line, _column));
}

function scanEqualOrArrow(): Token {
  const lexeme = peek(1) === '>' ? accept() + accept() : accept();
  return new Token(lexeme, getTokenKind(lexeme), location(_position, _line, _column));
}
function scanParenthesis(): Token {
  const lexeme = accept();
  const kind = lexeme === '(' ? TokenKind.LeftParen : TokenKind.RightParen;
  return new Token(lexeme, kind, location(_position, _line, _column));
}

export default function Scanner(source?: string) {
  _position = 0;
  _line = _column = 1;
  _stream = source ? `${source}\u{0000}` : '\u{0000}';
  _tokens = [];
  _previousToken = null;
  return {
    scan: () => _previousToken = scan(),
    toTokenStream: function toTokenStream() {
      let token = _previousToken = scan();
      while (token.kind !== TokenKind.EOF) { if(token.kind !== TokenKind.None){ _tokens.push(token); }  token = _previousToken = scan(); }
      return new TokenStream(_tokens);
    },
    position: function position(): number { return _position; },
    line: function line(): number { return _line; },
    column: function column(): number { return _column; },
    eof: isEOF
  };
}

export interface IScanner {
  scan: () => Token;
  toTokenStream: () => TokenStream;
  position: () => number;
  line: () => number;
  eof: () => boolean;
}