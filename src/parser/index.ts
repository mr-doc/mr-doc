import Parser from './Parser';
import Token, { TokenType } from '../token';
import { Range } from '../location'
import * as _ from 'lodash';
import * as AST from '../ast';
const { NodeType, createNode } = AST;

export default class CommentParser extends Parser {

  parse(): AST.Comment {
    return this.parseComment();
  }
  /**
   * Parses a comment
   * ---
   * Grammar for Comment
   * ```
   * <comment> := <single-comment> (<single-comment>)*
   * ```
   * ---
   * @returns AST.Comment - An ast of the parsed comment.
   */
  private parseComment(): AST.Comment {
    console.log('started parsing');
    const { Tag, Description, Markdown, None } = TokenType;
    const rootNode: AST.Comment = createNode(NodeType.Comment, None, this.location);
    rootNode.comments = []
    rootNode.comments.push(this.parseSingleComment());
    while (_.includes([Tag, Description, Markdown], this.current().type)) {
      rootNode.comments.push(this.parseSingleComment());
    }
    console.log('\ninfo: completed parsing');
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseSingleComment(): AST.Comment {
    const { Minus, Identifier, Tag, Description, Markdown, None } = TokenType;
    const rootNode: AST.Comment = createNode(NodeType.Comment, None, this.location);
    console.log(`In parseSingleComment: ${this.current().name}`);

    const getDescription = (): AST.DescriptionComment => {
      const descriptionNode: AST.DescriptionComment = createNode(NodeType.DescriptionComment, Description, this.location);
      descriptionNode.description = this.current().lexeme;
      return this.match(Description) ? descriptionNode : null;
    }
    switch (this.current().type) {
      case Description:
        const descNode = getDescription();
        this.accept();
        return descNode;
      case Tag:
        const tagNode: AST.TagComment = createNode(NodeType.TagComment, Tag, this.location);
        tagNode.tag = this.current().lexeme;
        this.accept();
        if (this.match(Minus)) {
          this.accept();
          tagNode.description = getDescription();
          this.accept(Description);
          return tagNode;
        } else if (this.match(Identifier)) {
          const formalParamNode: AST.FormalParameter = this.parseFormalParameter();
          if (this.match(Minus)) {
            this.accept();
            tagNode.description = getDescription();
            this.accept(Description);
          }
          tagNode.parameter = formalParamNode;
        }
        tagNode.range = new Range(rootNode.range.start, this.location.end);
        return tagNode;
      case Markdown:
        const mdNode: AST.MarkdownComment = createNode(NodeType.MarkdownComment, Markdown, this.location);
        mdNode.markdown = this.current().lexeme;
        mdNode.range = this.current().range;
        this.accept();
        return mdNode;
      default:
        console.log("error: expected a description, tag or markdown.");
        rootNode.range = new Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
  }
  private parseFormalParameter(): AST.FormalParameter {
    console.log(`In parseFormalParameter: ${this.current().name}`);
    const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = TokenType;
    const rootNode: AST.FormalParameter = createNode(NodeType.FormalParameter, None, this.location);
    if (this.match(Identifier)) {
      switch (this.peek(1).type) {
        case Colon:
        case Equal:
          rootNode.parameter = this.parseParameter();
          rootNode.isOptional = false;
          break;
        case QuestionMark:
          rootNode.parameter = this.parseOptionalParameter();
          rootNode.isOptional = true;
          break;
      }
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseParameter(): AST.Parameter {
    console.log(`In parseParameter: ${this.current().name}`);
    const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = TokenType;
    const rootNode: AST.Parameter = createNode(NodeType.Parameter, Identifier, this.location);

    rootNode.identifier = this.current().lexeme;
    this.accept(Identifier);
    if (this.match(Colon)) {
      rootNode.type = this.parseTypeDeclaration();
    } else if (this.match(Equal)) {
      this.accept();
      rootNode.initializer = this.current().lexeme;
      this.accept(Initializer);
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseOptionalParameter(): AST.OptionalParameter {
    console.log(`In parseOptionalParameter: ${this.current().name}`);
    const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = TokenType;
    const rootNode: AST.Parameter = createNode(NodeType.Parameter, Identifier, this.location);

    rootNode.identifier = this.current().lexeme;
    this.accept(Identifier);
    this.accept(QuestionMark);
    if (this.match(Colon)) { rootNode.type = this.parseTypeDeclaration(); }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseTypeDeclaration(): AST.TypeDeclaration {
    const { LeftParen, RightParen, Identifier, None } = TokenType;
    const rootNode: AST.TypeDeclaration = createNode(NodeType.TypeDeclaration, None, this.location);
    // Consume ':'
    this.accept();
    if (this.match(LeftParen)) {
      if (this.peek(1).type === Identifier || this.peek(1).type == RightParen) {
        rootNode.type = this.parseArrowFunctionType();
      } else {
        this.accept();
        rootNode.type = this.parseType();
        this.accept(RightParen);
      }
    } else rootNode.type = this.parseType();
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseType(): AST.Type {
    console.log(`In parseType: ${this.current().name}`);
    const { Any, Pipe, Ampersand, LeftParen } = TokenType;
    const rootNode: AST.Type = createNode(NodeType.Type, Any, this.location);

    if (!_.includes([Pipe, Ampersand, LeftParen], this.peek(1).type)) {
      rootNode.type = this.current().lexeme;
      this.accept(Any);
    } else {
      switch (this.peek(1).type) {
        case Pipe:
          rootNode.type = this.parseUnionType();
          break;
        case Ampersand:
          rootNode.type = this.parseUnionType();
          break;
        case LeftParen:
          rootNode.type = this.parseArrowFunctionType();
          break;
      }
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseUnionType(): AST.UnionType {
    console.log(`In parseUnionType: ${this.current().name}`);
    const { Pipe, Any } = TokenType;
    const rootNode: AST.UnionType = createNode(NodeType.UnionType, Any, this.location);
    rootNode.types = [this.current().lexeme]
    this.accept(Any);
    if (this.match(Pipe)) {
      this.accept();
      rootNode.types.push(this.current().lexeme);
      this.accept(Any);
    }
    while (this.match(Pipe)) {
      this.accept();
      if (this.match(Any)) {
        rootNode.types.push(this.current().lexeme);
      }
      this.accept(Any);
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseIntersectionType(): AST.IntersectionType {
    console.log(`In parseIntersectionType: ${this.current().name}`);
    const { Ampersand, Any } = TokenType;
    const rootNode: AST.IntersectionType = createNode(NodeType.IntersectionType, Any, this.location);
    rootNode.types = [this.current().lexeme]
    this.accept(Any);
    if (this.match(Ampersand)) {
      this.accept();
      rootNode.types.push(this.current().lexeme);
      this.accept(Any);
    }
    while (this.match(Ampersand)) {
      this.accept();
      if (this.match(Any)) {
        rootNode.types.push(this.current().lexeme);
      }
      this.accept(Any);
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseArrowFunctionType(): AST.ArrowFunctionType {
    console.log(`In parseArrowFunctionType: ${this.current().name}`);
    const { 
      Identifier, LeftParen, RightParen, Arrow, QuestionMark, Colon, Comma, None
    } = TokenType;
    const rootNode: AST.ArrowFunctionType = createNode(NodeType.ArrowFunctionType, None, this.location);
    rootNode.parameters = [];
    this.accept(LeftParen);
    if (this.match(Identifier)) {
      switch (this.peek(1).type) {
        case Colon:
          rootNode.parameters.push(this.parseParameter());
          while (this.match(Comma)) {
            this.accept();
            rootNode.parameters.push(this.parseParameter());
          }
          break;
        case QuestionMark:
          rootNode.parameters.push(this.parseOptionalParameter());
          while (this.match(Comma)) {
            this.accept();
            rootNode.parameters.push(this.parseOptionalParameter());
          }
          break;
      }
    }
    this.accept(RightParen);
    this.accept(Arrow);
    rootNode.type = this.parseType();
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
}