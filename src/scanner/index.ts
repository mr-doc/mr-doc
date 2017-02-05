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
  Initializer,
  Equal,
  Identifier,
  LineTerminator,
  Markdown,
  Minus,
  NullTerminator,
  QuestionMark,
  SpecialWord,
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
  private scanString(): Token {
    const start = this.position;
    const previousToken = this.tokens.length > 0 ? this.tokens[this.tokens.length - 1] : false;
    // Handle strings that are identifiers. ie. MyClass | myVariable{?}: string
    if (previousToken && previousToken.type === TokenType.Tag) {
      if(previousToken.lexeme === "@return") {
        while(!Match.isLineTerminator(this.current())) {
          this.lexeme.push(this.next());
        }
        const end = this.position;
        const lexeme = this.lexeme.join('');
        return new Token(lexeme, TokenType.Description, new Location(start, end));
      }
      while(!(includes.apply(':-?', [this.current()])) && !Match.isSpace(this.current())) {
          this.lexeme.push(this.next());
      }
      const end = this.position;
      const lexeme = this.lexeme.join('');
      return new Token(lexeme, TokenType.Identifier, new Location(start, end));
    }

    // Handle special words. ie. : [special word]
    if (previousToken && previousToken.type === TokenType.Colon) {
      while(this.current() !== '-' && !Match.isSpace(this.current())) { 
        this.lexeme.push(this.next());
      }
      const end = this.position;
      return new Token(this.lexeme.join(''), TokenType.SpecialWord, new Location(start, end));
    }

    // Handle default values. ie. : [special word] = value | ... = value
    if(previousToken && previousToken.type === TokenType.Equal) {
      while(this.current() !== '-' && !Match.isSpace(this.current())) {
        this.lexeme.push(this.next())
      }
      const end = this.position;
      return new Token(this.lexeme.join(''), TokenType.Initializer, new Location(start, end));
    }

    // Handle Descriptions
    while(!Match.isTerminator(this.current())) {
      this.lexeme.push(this.next())
    }

    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Description, new Location(start, end));
    
  }
  private scanLineTerminator(): Token {
    const start = this.position;
    this.lexeme.push(this.next())
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.LineTerminator, new Location(start, end));
  }
  private scanNullTerminator(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.NullTerminator, new Location(start, end));
  }
  private scanTag(): Token {
    const start = this.position;
    while(!Match.isSpace(this.current()) && this.current() !== ':') {
      this.lexeme.push(this.next());
    }
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Tag, new Location(start, end));
  }
  private scanMinus(): Token {
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
  private scanColon(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Colon, new Location(start, end));
  }
  private scanQuestionMark(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.QuestionMark, new Location(start, end));
  }
  private scanEqual(): Token {
    const start = this.position;
    this.lexeme.push(this.next());
    const end = this.position;
    return new Token(this.lexeme.join(''), TokenType.Equal, new Location(start, end));
  }
}
// const tokens = new CommentScanner(
//   FS.readFileSync(`${Path.resolve(__dirname, '../../test/comment.txt')}`, 'utf8')
// ).scan();
// tokens.stream.forEach(token => console.log(token.lexeme, 'is a' ,TokenType[token.type]));
