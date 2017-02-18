"use strict";
import Scanner from './Scanner';
import Token, { TokenType, getTokenType } from '../token';
import { TokenStream } from '../stream/';
import Location, { Range } from '../location';
import Match from '../utils/Match';
import * as FS from 'fs';
import * as Path from 'path';

export default class CommentScanner extends Scanner {
  constructor(source?: string, location?: Location) {
    super(source, location);
  }
  scan(): TokenStream {
    while (!this.ended) {
      this.lexeme = [];
      const ch = this.current();
      if (Match.isLetterOrDigit(ch) || '\'\"[]'.includes(ch)) {
        this.tokens.push(this.scanString());
      } else if (Match.isNullTerminator(ch)) {
        this.tokens.push(this.scanNullTerminator());
      } else if (ch === '@') {
        this.tokens.push(this.scanTag());
      } else if (ch === '-') {
        this.tokens.push(this.scanMinusOrMarkdown());
      } else if (':?|&,'.includes(ch)) {
        this.tokens.push(this.scanSimpleChar());
      } else if (ch === '=') {
        this.tokens.push(this.scanEqualOrArrow());
      } else if ('()'.includes(ch)) {
        this.tokens.push(this.scanParenthesis());
      } else { this.next(); }
    }
    return new TokenStream(this.tokens);
  }
  private scanSimpleChar(): Token {
    const ch = this.current();
    const start = this.location;
    const lexeme = this.next();
    const end = this.location;
    const type = getTokenType(ch);
    return new Token(lexeme, type, new Range(start, end));
  }
  private scanString(): Token {
    const start = this.location;
    const previous = this.tokens.length > 0 ? this.tokens[this.tokens.length - 1] : { type: TokenType.None };
    // The possible types of tagged comments:
    // @tag
    // @tag id
    // @tag id = init
    // @tag id : special = init
    // @tag id : () => special
    // @tag id : (id: special) => special
    // @tag id : (id: special, id, id) => special
    // @tag id : (id: special = init, id = init, id = init) => special
    // @tag id : (id: special | special) => special | special
    // @tag id : (id: special & special) => special & special
    const isEnd = (ch: string) => Match.isSpace(ch) || Match.isNullTerminator(ch);
    const scanIdentifer = () => {
      const start = this.location;
      while (!isEnd(this.current()) && !'?:)-,'.includes(this.current())) {
        this.lexeme.push(this.next());
      }
      const end = this.location;
      return new Token(this.lexeme.join(''), TokenType.Identifier, new Range(start, end));
    }

    const scanAny = () => {
      const start = this.location;
      while (!isEnd(this.current()) && !'&|,)-'.includes(this.current())) {
        this.lexeme.push(this.next());
      }
      const end = this.location;
      return new Token(this.lexeme.join(''), TokenType.Any, new Range(start, end));
    }

    const scanInitializer = () => {
      const start = this.location;
      while (!isEnd(this.current()) && !',)-'.includes(this.current())) {
        this.lexeme.push(this.next());
      }
      const end = this.location;
      return new Token(this.lexeme.join(''), TokenType.Initializer, new Range(start, end));
    }

    if (previous.type === TokenType.Tag ||
      previous.type === TokenType.LeftParen ||
      previous.type === TokenType.Comma) { return scanIdentifer(); }

    if (previous.type === TokenType.Colon ||
      previous.type === TokenType.Arrow ||
      previous.type === TokenType.Pipe ||
      previous.type === TokenType.Ampersand
    ) { return scanAny(); }

    if (previous.type === TokenType.Equal) { return scanInitializer(); }

    while (!Match.isLineTerminator(this.current()) && !Match.isNullTerminator(this.current())) {
      this.lexeme.push(this.next())
    }

    const end = this.location;
    return new Token(this.lexeme.join(''), TokenType.Description, new Range(start, end));

  }
  private scanNullTerminator(): Token {
    const start = this.location;
    this.lexeme.push(this.next());
    const end = this.location;
    return new Token(this.lexeme.join(''), TokenType.NullTerminator, new Range(start, end));
  }
  private scanTag(): Token {
    const start = this.location;
    const isEnd = (ch: string) => Match.isSpace(ch) || Match.isNullTerminator(ch);
    while (!isEnd(this.current()) && this.current() !== ':') {
      this.lexeme.push(this.next());
    }
    const end = this.location;
    return new Token(this.lexeme.join(''), TokenType.Tag, new Range(start, end));
  }
  private scanMinusOrMarkdown(): Token {
    const start = this.location;
    const isMarkdownTag = (): boolean => this.current() + this.peek(1) + this.peek(2) === '---';
    const isCommentStar = (col: number): boolean => (col === 0 || col === 1) && this.current() === '*';
    let type: TokenType;
    let starEnabled: boolean = this.peek(-1) === '*';
    // Determine whether it is markdown
    if (isMarkdownTag()) {
      // Consume the first three lexemes
      this.consume(3, this.lexeme);
      // Keep consuming the lexemes until markdown ends
      while (!isMarkdownTag()) {
        if (isCommentStar(this.location.column) && starEnabled) { this.next(); }
        else { this.lexeme.push(this.next()); }
      }
      // Consume the last three lexemes
      if (isMarkdownTag()) { this.consume(3, this.lexeme); }
      type = TokenType.Markdown;
    } else { this.lexeme.push(this.next()); type = TokenType.Minus; }
    const end = this.location;
    return new Token(this.lexeme.join(''), type, new Range(start, end));
  }
  private scanEqualOrArrow(): Token {
    const start = this.location;
    const lexeme = this.peek(1) === '>' ? this.next() + this.next() : this.next();
    const end = this.location;
    return new Token(lexeme, getTokenType(lexeme), new Range(start, end));
  }
  private scanParenthesis(): Token {
    const start = this.location;
    const lexeme = this.next();
    const end = this.location;
    const type = lexeme === '(' ? TokenType.LeftParen : TokenType.RightParen;
    return new Token(lexeme, type, new Range(start, end));
  }

}