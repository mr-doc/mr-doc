import Parser from './Parser';
import Token, { TokenType } from '../token';
import * as _ from 'lodash';

import Node, {
  NodeKind,
  AdvancedComment,
  BasicComment,
  Comment,
  MarkdownComment,
  TypeStatement,
  TypeDeclaration,
  Tag,
  IntersectionType,
  UnionType,
  Identifier
} from '../node';


function test(id: (id: string, id2: string, id3: string) => any) {

}

export default class CommentParser extends Parser {

  parse(): any {
    return this.parseComment();
  }
  private parseComment() {
    console.log('started parsing');
    const { Tag, Description, Markdown } = TokenType;
    this.parseSingleComment();
    console.log(`current: ${this.current().name}`);
    
    while (_.includes([Tag, Description, Markdown], this.current().type)) {
      console.log('...parsing');
      this.parseSingleComment();
      console.log(`current: ${this.current().name}`);
    }
    console.log('\ninfo: completed parsing');
    
    return;
  }
  private parseSingleComment() {
    console.log(`In parseSingleComment: ${this.current().name}`);

    const { Minus, Identifier, Tag, Description, Markdown } = TokenType;
    switch (this.current().type) {
      case Description:
        this.accept();
        break;
      case Tag:
        this.accept();
        if (this.current().type === Minus) {
          this.accept();
          this.accept(Description);
        }
        else if (this.current().type === Identifier) { 
          this.parseParameters();
          if (this.current().type === Minus) {
            this.accept();
            this.accept(Description);
          }
        }
        break;
      case Markdown:
        this.accept();
        break;
      default:
        console.log("error: expected a description, tag or markdown.");
        return;
    }
  }
  private parseParameters() {
    console.log(`In parseParameters: ${this.current().name}`);
    this.parseFormalParameter();
    while (this.current().type === TokenType.Comma) {
      this.accept();
      this.parseFormalParameter();
    }
    return;
  }
  private parseFormalParameter() {
    console.log(`In parseFormalParameter: ${this.current().name}`);
    const { Identifier, Equal, Initializer, QuestionMark, Colon } = TokenType;
    if (this.current().type === Identifier) {
      switch (this.peek(1).type) {
        case Colon:
          this.parseParameter();
          if (this.current().type === Equal) {
            this.accept(Equal);
            this.accept(Initializer);
          }
          break;
        case QuestionMark:
          this.parseOptionalParameter();
          break;
      }
    }
    return;
  }
  private parseParameter() {
    console.log(`In parseParameter: ${this.current().name}`);
    const { Identifier, Colon, LeftParen, RightParen, Any } = TokenType;
    this.accept(Identifier);
    if (this.current().type === Colon) {
      this.accept();
      if (this.current().type === LeftParen) {
        if (this.peek(1).type === Identifier) {
          this.parseArrowFunctionType();
        } else {
          this.accept();
          this.parseType();       
          this.accept(RightParen);
        }
      } else this.parseType();
    }
    return;
  }
  private parseOptionalParameter() {
    console.log(`In parseOptionalParameter: ${this.current().name}`);
    const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = TokenType;
    this.accept(Identifier);
    this.accept(QuestionMark);
    if (this.current().type === Colon) {
      this.accept();
      if (this.current().type === LeftParen) {
        this.accept();
        this.parseType();        
        this.accept(RightParen);
      }
    }
    return;
  }
  private parseType() {
    console.log(`In parseType: ${this.current().name}`);
    const { Any, Pipe, Ampersand, LeftParen } = TokenType;
    
    this.accept(Any);
    switch (this.current().type) {
      case Pipe:
        this.parseUnionType();
        break;
      case Ampersand:
        this.parseUnionType();
        break;
      case LeftParen:
        this.parseArrowFunctionType();
        break;
    }
    return;
  }
  private parseUnionType() {
    console.log(`In parseUnionType: ${this.current().name}`);
    const { Pipe, Any } = TokenType;
    this.accept(Pipe);
    this.accept(Any);
    while (this.current().type === Pipe) {
      this.parseUnionType();
    }
    return;
  }
  private parseIntersectionType() {
    console.log(`In parseIntersectionType: ${this.current().name}`);
    const { Ampersand, Any } = TokenType;
    this.accept(Ampersand);
    this.accept(Any);
    while (this.current().type === Ampersand) {
      this.parseUnionType();
    }
    return;
  }
  private parseArrowFunctionType() {
    console.log(`In parseArrowFunctionType: ${this.current().name}`);
    const {
      Identifier, LeftParen, RightParen,
      Arrow, QuestionMark, Colon, Comma
    } = TokenType;
    this.accept(LeftParen);
    if (this.current().type === Identifier) {
      switch (this.peek(1).type) {
        case Colon:
          this.parseParameter();
          while (this.current().type === Comma) {
            this.accept();
            this.parseParameter();
          }
          break;
        case QuestionMark:
          this.parseOptionalParameter();
          while (this.current().type === Comma) {
            this.accept();
            this.parseOptionalParameter();
          }
          break;
      }
    }
    this.accept(RightParen);
    this.accept(Arrow);
    this.parseType();
    return;
  }
}