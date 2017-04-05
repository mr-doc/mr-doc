import Token, { TokenType, getTokenType } from '../token';
import { TokenStream } from '../stream/';
import { location } from '../location';
import Match from '../utils/Match';
import * as _ from 'lodash';

let _position = 0, _line = 1, _column = 1;
let _stream = "";
let _lexeme: string[], _tokens: Token[] = [];
let _previousToken: Token;

function isEOF() { return (_position >= _stream.length || Match.isNullTerminator(current())); }
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
  while (Match.isWhiteSpace(current())) { next() };
  if (isEOF()) {
    return new Token('\0', TokenType.EOF, location(_position, _line, _column));
  } else if (Match.isLetterOrDigit(current()) || '\'\"[]{}.'.includes(current())) {
    return scanName();
  } else if (Match.isLineTerminator(current())) {
    return scanSimpleChar();
  } else if (current() === '@') {
    return scanTag();
  } else if (current() === '-') {
    return scanMinus();
  } else if (':?|&,'.includes(current())) {
    return scanSimpleChar();
  } else if (current() === '=') {
    return scanEqualOrArrow();
  } else if ('()'.includes(current())) {
    return scanParenthesis();
  } else { next(); }
}

function scanName(): Token {
  const isEnd = (ch: string) => Match.isSpace(ch) && Match.isNullTerminator(ch);
  const filter = (type: TokenType, ch: string): boolean => ({
    [TokenType.Any]: !isEnd(ch) && !'&|,)-='.includes(ch) && !Match.isSpace(ch),
    [TokenType.Identifier]: !isEnd(ch) && !'?:)-=,'.includes(ch) && !Match.isSpace(ch),
    [TokenType.Initializer]: !isEnd(ch) && !',)-='.includes(ch) && !Match.isSpace(ch),
    [TokenType.Description]: !Match.isLineTerminator(ch) && !Match.isNullTerminator(ch)
  }[type]);
  const consume = (type: TokenType): Token => {
    while (filter(type, current()) && !isEOF()) { _lexeme.push(accept()); }
    const { Any, Ampersand, Pipe, Identifier, LeftParen } = TokenType;
    if (type === Identifier) {

      // Skip whitespace
      while (Match.isWhiteSpace(current())) { next(); }
      // ... =>  (... | any) || (... & any )
      if (_previousToken && _previousToken.type === LeftParen) {
        if ('&|'.includes(current())) { type = Any; }
      } else if (_previousToken && _.includes([Pipe, Ampersand], _previousToken.type)) { type = Any; }
    }
    return new Token(_lexeme.join(''), type, location(_position, _line, _column));
  }
  const { Tag, LeftParen, Comma } = TokenType;
  if (_previousToken && _.includes([Tag, LeftParen, Comma], _previousToken.type)) { return consume(TokenType.Identifier); }

  const { Colon, Arrow, Pipe, Ampersand } = TokenType;
  if (_previousToken && _.includes([Colon, Arrow, Pipe, Ampersand], _previousToken.type)) { return consume(TokenType.Any); }
  if (_previousToken && _previousToken.type === TokenType.Equal) { return consume(TokenType.Initializer); }

  return consume(TokenType.Description);
}
function scanSimpleChar(): Token {
  const ch = accept();
  const type = getTokenType(ch);
  return new Token(ch, type, location(_position, _line, _column));
}
function scanTag(): Token {
  while (current() !== ':' && !Match.isWhiteSpace(current()) && !isEOF()) { _lexeme.push(accept()); }
  return new Token(_lexeme.join(''), TokenType.Tag, location(_position, _line, _column));
}
function scanMinus(): Token {
  const isInitializer = _previousToken &&
    _previousToken.type === TokenType.Equal &&
    current() === '-' && Match.isDigit(peek(1));
  const isMarkdown = current() + peek(1) + peek(2) === '---';
  let type: TokenType = TokenType.None;

  if (isInitializer) {
    _lexeme.push(accept());
    while (Match.isDigit(current())) { _lexeme.push(accept()); }
    type = TokenType.Initializer;
  }
  else if (isMarkdown) { type = scanMarkdown(); }
  else { _lexeme.push(accept()); type = TokenType.Minus }

  return new Token(_lexeme.join(''), type, location(_position, _line, _column));
}

function scanMarkdown() {
  const isMarkdownTag = (m1: string, m2: string, m3: string): boolean => m1 + m2 + m3 === '---';
  const isCommentStar = (col: number): boolean => (col === 0 || col === 1) && current() === '*';
  let starEnabled: boolean = peek(-1) === '*';

  // Consume the first three lexemes
  consume(3, _lexeme);
  // Keep consuming the lexemes until markdown ends
  while (!isMarkdownTag(current(), peek(1), peek(2))) {
    if (isCommentStar(_column) && starEnabled) { next(); }
    else { _lexeme.push(accept()); }
  }
  // Consume the last three lexemes
  if (isMarkdownTag(current(), peek(1), peek(2))) { consume(3, _lexeme); }
  return TokenType.Markdown;
}

function scanEqualOrArrow(): Token {
  const lexeme = peek(1) === '>' ? accept() + accept() : accept();
  return new Token(lexeme, getTokenType(lexeme), location(_position, _line, _column));
}
function scanParenthesis(): Token {
  const lexeme = accept();
  const type = lexeme === '(' ? TokenType.LeftParen : TokenType.RightParen;
  return new Token(lexeme, type, location(_position, _line, _column));
}

export default function Scanner(source?: string) {
  _position = 0;
  _line = _column = 1;
  _stream = source ? `${source}\u{0000}` : '\u{0000}';
  _tokens = [];
  _previousToken = null;
  const getToken = () => { _previousToken = scan(); return _previousToken; }
  return {
    scan: function scan() { return _previousToken = getToken(); },
    toTokenStream: function toTokenStream() {
      let token = getToken();
      while (token.type !== TokenType.EOF) { _tokens.push(token); token = getToken(); }
      _tokens.push(token);
      return new TokenStream(_tokens);
    },
    position: function position(): number { return _position; },
    line: function line(): number { return _line; },
    column: function column(): number { return _column; },
    eof: isEOF
  };
}