"use strict";
import Scanner from './Scanner';
import Token from './Token';
import TokenStream from './TokenStream';
import Location from './Location';
import Match from '../utils/Match';
import * as FS from 'fs';
import * as Path from 'path';

// 'includes' polyfill
function includes(search, start) {
  'use strict';
  if (typeof start !== 'number') {
    start = 0;
  }
  
  if (start + search.length > this.length) {
    return false;
  } else {
    return this.indexOf(search, start) !== -1;
  }
};

export enum TokenType {
  Colon,
  Description,
  DefaultValue,
  Equal,
  Identifier,
  LineTerminator,
  Markdown,
  Minus,
  NullTerminator,
  QuestionMark,
  ReservedWord,
  Tag,
}

export default class CommentScanner extends Scanner {
  constructor(source: string) { super(source); }
  scan(): TokenStream {
    while (!this.ended) {
      this.lexeme = [];
      const ch = this.current();
      
      if (Match.isLetterOrDigit(ch)) {
        this.tokens.push(this.scanString());
    } /*else if (Match.isLineTerminator(ch)) {
        this.tokens.push(this.scanLineTerminator());
    } */else if (Match.isNullTerminator(ch)) { 
        this.tokens.push(this.scanNullTerminator());
      } else if (ch === '@') {
        this.tokens.push(this.scanTag());
      } else if(ch === '-') {
        this.tokens.push(this.scanMinus());
      } else if(ch === ':') {
        this.tokens.push(this.scanColon());
      } else if(ch === '?') {
        this.tokens.push(this.scanQuestionMark());
      } else if (ch === '=') {
        this.tokens.push(this.scanEqual());
      } else { this.next(); } 
    }
    return new TokenStream(this.tokens);
  }
  scanString(): Token {
    const start = this.position;
    const previousToken = this.tokens[this.tokens.length - 1];
    // Handle strings that are identifiers. ie. MyClass | myVariable: string[?]
    if (previousToken.type === TokenType.Tag) {
      while(!(includes.apply(':-?', [this.current()])) && !Match.isSpace(this.current())) {
          this.lexeme.push(this.next());
      }
      const end = this.position;
      const lexeme = this.lexeme.join('');
      return new Token(lexeme, TokenType.Identifier, new Location(start, end));
    }

    // Handle Reserved words. ie. : [reserved word]
    if (previousToken.type === TokenType.Colon) {
      while(this.current() !== '-' && !Match.isSpace(this.current())) { 
        this.lexeme.push(this.next());
      }
      const end = this.position;
      return new Token(this.lexeme.join(''), TokenType.ReservedWord, new Location(start, end));
    }

    // Handle default values. ie. : [reserved word] = value | ... = value
    if(previousToken.type === TokenType.Equal) {
      while(this.current() !== '-' && !Match.isSpace(this.current())) {
        this.lexeme.push(this.next())
      }
      const end = this.position;
      return new Token(this.lexeme.join(''), TokenType.DefaultValue, new Location(start, end));
    }

    // Handle Descriptions
    while(!Match.isTerminator(this.current())) {
      this.lexeme.push(this.next())
    }
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Description, new Location(start, end));
    
  }
  scanLineTerminator(): Token {
    const start = this.position;
    this.lexeme.push(this.next())
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.LineTerminator, new Location(start, end));
  }
  scanNullTerminator(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.NullTerminator, new Location(start, end));
  }
  scanTag(): Token {
    const start = this.position;
    while(!Match.isSpace(this.current()) && this.current() !== ':') {
      this.lexeme.push(this.next());
    }
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Tag, new Location(start, end));
  }
  scanMinus(): Token {
    const start = this.position;
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
        if(isCommentStar(this.position.column) && starEnabled) { this.next();} 
        else { this.lexeme.push(this.next()); }
      }
      // Consume the last three lexemes
      if (isMarkdownTag()) { this.consume(3, this.lexeme); }
      type = TokenType.Markdown;
    } else { this.lexeme.push(this.next()); type = TokenType.Minus; }
    const end = this.position;
    return new Token(this.lexeme.join(''), type, new Location(start, end));
  }
  scanColon(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Colon, new Location(start, end));
  }
  scanQuestionMark(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.QuestionMark, new Location(start, end));
  }
  scanEqual(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Equal, new Location(start, end));
  }
}
const tokens = new CommentScanner(
  FS.readFileSync(`${Path.resolve(__dirname, '../../test/comment.txt')}`, 'utf8')
).scan();
tokens.stream.forEach(token => console.log(token.lexeme, 'is a' ,TokenType[token.type]));
