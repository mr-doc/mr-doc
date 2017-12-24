import { CommentScanner } from '../scanner/';
import Location from '../location'
import * as _ from 'lodash';
import * as AST from '../ast/';
import { ParseException, Exception } from '../exceptions'
import { Expression } from '../ast/';
import { Token, TokenType } from '../token/index';
import TokenStream from '../stream/TokenStream';
// const { NodeType, createNode, endNode } = AST;

export class CommentParser {
  readonly scanner: CommentScanner = null;
  readonly tokens: TokenStream
  constructor(source?: string) {
    this.scanner = new CommentScanner(source);
    this.tokens = this.scanner.toTokenStream();
  }

  private get location(): Location { return this.peek().location; }

  private get eof(): boolean { return this.peek().kind == TokenType.EOF; }

  /* flow control */

  private next(): Token {
    if (!this.eof) this.tokens.next();
    return this.previous();

  }

  private peek(): Token {
    return this.tokens.current();
  }

  private previous(): Token {
    return this.tokens.peek(-1);
  }

  /* comparisons */
  private check(kind: [TokenType, string | null]) {
    if (this.eof) return false;
    const isEqualKind = this.peek().kind === kind[0];
    return kind[1] ? (isEqualKind && this.peek().lexeme === kind[1]) : isEqualKind;
  }

  private match(...kinds: [TokenType, string | null][]) {
    for (let i = 0; i < kinds.length; i++) {
      if (this.check(kinds[i])) {
        this.next();
        return true;
      }
    }
    return false;
  }

  private consume(kind: [TokenType, string | null], message: string) {
    if (this.check(kind)) return this.next();
    throw this.error(this.previous(), message);
  }

  /* error handling */
  private error(token: Token, message: string) {
    // console.log(`mrdoc::parse ${message}`)
    return new ParseException(token, message);
  }

  public parse(): AST.Statement[] {
    let statements: AST.Statement[] = [];
    while (!this.eof) {
      try {
        statements.push(this.parseCommentStatement());
      } catch (error) {
        console.error((<ParseException>error).name, (<ParseException>error).stack, ":", (<ParseException>error).message);
        statements = [];
        break;
      }
    }
    return statements;
  }

  public parseCommentStatement(): AST.Statement {
    /* A Comment is either a description, markdown, or tag */
    if (this.match([TokenType.Description, null]))
      return new AST.DescriptionStatement(this.previous());
    if (this.match([TokenType.Markdown, null]))
      return new AST.MarkdownStatement(this.previous());
    if (this.match([TokenType.Tag, null]))
      return this.parseTagStatement();
    throw this.error(this.previous(), "Expected a description comment, markdown comment, or tag comment");
  }

  public parseTagStatement(): AST.TagStatement {
    let tag = this.previous();

    // Check if we have a parameter
    if (this.check([TokenType.Identifier, null])) {
      let identifier = this.next();

      let optional = false;
      // Is this an optional parameter?
      if (this.check([TokenType.QuestionMark, null])) {
        this.next();
        optional = true;
      }

      let value: Expression;
      // Does it have a default value?
      if (this.check([TokenType.Equal, null]) && optional === false) {
        this.next();
        value = new AST.LiteralExpression(this.consume([TokenType.Initializer, null], "Expected a valid initilizer"));
      }

      let type: Expression;
      // Is there a type associated with this?
      if (this.check([TokenType.Colon, null])) {
        this.next();
        type = this.parseExpression();

        // Does it have a default value after a type? (i.e. @param id: MyType = value)
        if (this.check([TokenType.Equal, null]) && optional === false) {
          this.next();
          
          value = new AST.LiteralExpression(this.consume([TokenType.Initializer, null], "Expected a valid initializer"));
        }
      }

      // Check if we have a description
      if (this.check([TokenType.Minus, null])) {
        this.next();
        if (this.match([TokenType.Description, null])) {
          return new AST.TagStatement(tag,
            new AST.ParameterDeclaration(identifier, value, type, optional),
            new AST.DescriptionStatement(this.previous()));
        }
        throw this.error(this.previous(), "Expected a description comment");
      }
      // Otherwise, create a tag node with a parameter
      return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, type, optional));
    }

    if (this.check([TokenType.Minus, null])) {
      this.next();
      if (this.match([TokenType.Description, null])) {
        return new AST.TagStatement(tag, null, new AST.DescriptionStatement(this.previous()));
      }
      throw this.error(this.previous(), "Expected a description comment");
    }
    return new AST.TagStatement(tag);
  }

  public parseExpression(): Expression {
    return this.parseIntersectionExpression();
  }

  public parseIntersectionExpression(): Expression {
    let expression = this.parseUnionExpression();
    let expressions = [expression];
    while (this.check([TokenType.Ampersand, null])) {
      this.next();
      expressions.push(this.parseExpression());
    }
    return expressions.length > 1 ? new AST.IntersectionExpression(expressions) : expression;
  }

  public parseUnionExpression(): Expression {
    let expression = this.parsePrimaryExpression();
    let expressions = [expression];
    while (this.check([TokenType.Pipe, null])) {
      this.next();
      expressions.push(this.parseExpression());
    }
    return expressions.length > 1 ? new AST.UnionExpression(expressions) : expression;
  }

  public parsePrimaryExpression(): Expression {
    if (this.match([TokenType.Any, null])) {
      return new AST.LiteralExpression(this.previous());
    } else if (this.match([TokenType.LeftParen, null])) {
      let expression = this.parseExpression();
      this.consume([TokenType.RightParen, null], "Expected right parenthesis");
      return new AST.GroupExpression(expression);
    } else throw this.error(this.previous(), "Expected a valid initializer");
  }

}

export default function Parser(source?: string) {
  return new CommentParser(source);
}