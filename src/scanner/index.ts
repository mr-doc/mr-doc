"use strict";
import Scanner from './Scanner';
import Token, { TokenType, getTokenType } from '../token';
import { TokenStream } from '../stream/';
import Location, { Range } from '../location';
import Match from '../utils/Match';
import * as FS from 'fs';
import * as Path from 'path';
import * as _ from 'lodash';

export default class CommentScanner extends Scanner {
  constructor(source?: string, location?: Location) {
    super(source, location);
  }
  scan(): TokenStream {
    while (!this.ended) {
      this.lexeme = [];
      const ch = this.current();
      if (Match.isLetterOrDigit(ch) || '\'\"[].'.includes(ch)) {
        this.addToken(this.scanString())
      } else if (Match.isLineTerminator(ch)) {
        this.addToken(this.scanSimpleChar(), true);
      } else if (Match.isNullTerminator(ch)) {
        this.addToken(this.scanNullTerminator());
      } else if (ch === '@') {
        this.addToken(this.scanTag());
      } else if (ch === '-' || this.isMarkdownTag) {
        this.addToken(this.scanMinus());
      } else if (':?|&,'.includes(ch)) {
        this.addToken(this.scanSimpleChar());
      } else if (ch === '=') {
        this.addToken(this.scanEqualOrArrow());
      } else if ('()'.includes(ch)) {
        this.addToken(this.scanParenthesis());
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
    const previous = this.tokens.length > 0 ? this.previousToken :
      new Token('', TokenType.None, new Range(start, null));

    const isEnd = (ch: string) => Match.isSpace(ch) || Match.isNullTerminator(ch);
    const filter = (type: TokenType, ch: string): boolean => ({
      [TokenType.Any]: !isEnd(ch) && !'&|,)-'.includes(ch),
      [TokenType.Identifier]: !isEnd(ch) && !'?:)-,'.includes(ch),
      [TokenType.Initializer]: !isEnd(ch) && !',)-'.includes(ch),
      [TokenType.Description]: !Match.isLineTerminator(ch) && !Match.isNullTerminator(ch)
    }[type]);
    const consume = (type: TokenType): Token => {
      while (filter(type, this.current())) { this.lexeme.push(this.next()); }
      const { Any, Ampersand, Pipe, Identifier, LeftParen } = TokenType;
      if (type === Identifier) {
        // Skip whitespace
        while (Match.isWhiteSpace(this.current())) { this.next(); }
        // ... =>  (... | any) || (... & any )
        if (previous && previous.type === LeftParen) {
          if ('&|'.includes(this.current())) { type = Any; }
        } else if (previous && _.includes([Pipe, Ampersand], previous.type)) {
          type = Any;
        }
      }
      const end = this.location;
      return new Token(this.lexeme.join(''), type, new Range(start, end));
    }
    const { Tag, LeftParen, Comma } = TokenType;
    if (_.includes([Tag, LeftParen, Comma], previous.type) && !this.isTagTerminated) {
      return consume(TokenType.Identifier);
    } else { this.history = []; }

    const { Colon, Arrow, Pipe, Ampersand } = TokenType;
    if (_.includes([Colon, Arrow, Pipe, Ampersand], previous.type)) { return consume(TokenType.Any); }

    if (previous.type === TokenType.Equal) { return consume(TokenType.Initializer); }

    return consume(TokenType.Description);
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
  private scanMinus(): Token {
    const start = this.location;
    const previous = this.tokens[this.tokens.length - 1];
    const isInitializer = previous && previous.type === TokenType.Equal && this.current() === '-' && Match.isDigit(this.peek(1));
    let type: TokenType = TokenType.None;

    if (isInitializer) {
      this.lexeme.push(this.next());
      while (Match.isDigit(this.current())) { this.lexeme.push(this.next()); }
      type = TokenType.Initializer;
    }
    else if (this.isMarkdownTag) { type = this.scanMarkdown(); }
    else { this.lexeme.push(this.next()); type = TokenType.Minus }

    const end = this.location;
    return new Token(this.lexeme.join(''), type, new Range(start, end));
  }
  private scanMarkdown(): TokenType {
    let offset = this.location.column;
    // Consume the first three lexemes
    this.consume(3, this.lexeme);
    // Keep consuming the lexemes until markdown ends
    while (!this.isMarkdownTag) {
      // Check if there were chars before the first '-'
      if (_.includes([2, 3, 4], offset) && this.location.column === 1) {
        for (let i = 0; i < offset - 1; i++) {
          if (Match.isLineTerminator(this.current())) {
            this.lexeme.push(this.next()); break;
          } else this.next();
        }
        // this.consume(offset - 1);
      } else this.lexeme.push(this.next());
    }

    // Consume the last three lexemes
    if (this.isMarkdownTag) { this.consume(3, this.lexeme); }
    return TokenType.Markdown;
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
  private get isTagTerminated(): boolean {
    // Get the token from history which contains eols
    const prev0 = this.previousTokenFromHistory,
      // Get the previous token that does not have eols
      prev1 = this.previousToken,
      { LineTerminator, Tag } = TokenType;
    return prev0 && prev0.type === LineTerminator && prev1.type === Tag
  }
  private get isMarkdownTag(): boolean {
    return this.current() + this.peek(1) + this.peek(2) === '---';
  }
}