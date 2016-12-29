"use strict";
import Scanner from './Scanner';
import Token from './Token';
import Location from './Location';
import Match from '../utils/Match';
import * as FS from 'fs';
import * as Path from 'path';


/**
 * JSDOC grammer
 * <jsdoc> := <start> <comment> <end>
 * <start> := <forward slash> <asterisk> <asterisk>
 * <forward slash> := '/'
 * <asterisk> := '*'
 * <comment> := <simple comment>
 *            | <complex comment>
 *            | <markdown comment>
 * <simple comment> := <description> <eol> { <simple comment> }
 * <description> := <special char> { <special char> }
 * <special char> := [a-z] | [A-Z] | [0-9] | <ws>
 * <period> := '.'
 * <eol> := '\n'
 * <complex comment> := <type declaration> <minus> <simple comment>
 * <type declaration> := <tag> <variable> <colon> <reserved>
 * <tag> := @public | @private | @protected | ...
 * <variable> := <char> { <char> }
 * <char> := [a-z] | [A-Z] | [0-9] | '_'
 * <colon> := ':'
 * <type> := 'string' | 'number' | 'object' | 'function' | 'undefined' | 'boolean'
 * <collection type> := '[]'
 * <default type> := <assignment>
 */

export enum TokenType {
  Colon,
  Description,
  Equal,
  Identifier,
  LineTerminator,
  MarkdownComment,
  Minus,
  NullTerminator,
  QuestionMark,
  ReservedWord,
  Tag,
}

export default class CommentScanner extends Scanner {
  constructor(source: string) { super(source); }
  scan(): Token[] {
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
      } else if(ch === '?'){
        this.tokens.push(this.scanQuestionMark());
      } else { this.next(); } 
    }
    return this.tokens;
  }
  scanString(): Token {
    const start = this.position;
    const previousToken = this.tokens[this.tokens.length - 1];
    // Handle strings that are identifiers. ie. MyClass | myVariable: string[?]
    if (previousToken.type === TokenType.Tag) {
      while(!':-?'.includes(this.current()) && !Match.isSpace(this.current())) {
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
    let type: TokenType;
    const isMarkdownTag = (): boolean => this.current() + this.peek(1) + this.peek(2) === '---';
    
    // Determine whether it is markdown
    if (isMarkdownTag()) {
      // Consume the first three lexemes
      this.consume(3, this.lexeme);
      // Keep consuming the lexemes until markdown ends
      while (!isMarkdownTag()) { this.lexeme.push(this.next()); }
      // Consume the last three lexemes
      if (isMarkdownTag()) { this.consume(3, this.lexeme); }
      type = TokenType.MarkdownComment;
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
  // scanEqual(): Token {
  //   const start = this.position;
  //   this.lexeme.push(this.next());
  //   const end = this.position;
  //   return new Token(this.lexeme.join(''), TokenType.Equal, new Location(start, end));
  // }
}
const tokens = new CommentScanner(
  FS.readFileSync(`${Path.resolve(__dirname, '../../test/comment.txt')}`, 'utf8')
).scan();
tokens.forEach(token => console.log(token.lexeme, 'is a' ,TokenType[token.type]));
