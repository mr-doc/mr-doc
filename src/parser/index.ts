import Parser from './Parser';
import Token, { TokenType } from '../token';
import { Range } from '../location'
import * as _ from 'lodash';

import Node, {
  NodeType,
  Comment,
  DescriptionComment,
  TagComment,
  MarkdownComment,
  // Parameters,
  FormalParameter,
  Parameter,
  OptionalParameter,
  TypeDeclaration,
  Type,
  UnionType,
  IntersectionType,
  ArrowFunctionType,
  getNodeTypeName
} from '../node';

export default class CommentParser extends Parser {
  private createNode(flag: NodeType, kind: TokenType) {
    return ({ range: new Range(this.location.start), flag, kind, flagName: getNodeTypeName(flag) });
  }
  parse(): Comment {
    return this.parseComment();
  }
  private parseComment(): Comment {
    console.log('started parsing');
    const { Tag, Description, Markdown, None } = TokenType;
    const rootNode: Comment = this.createNode(NodeType.Comment, None);
    rootNode.comments = []
    rootNode.comments.push(this.parseSingleComment());
    while (_.includes([Tag, Description, Markdown], this.current().type)) {
      console.log('...parsing');
      rootNode.comments.push(this.parseSingleComment());
    }
    console.log(`current: ${this.current().name}`);
    console.log('\ninfo: completed parsing');
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseSingleComment(): Comment {
    const { Minus, Identifier, Tag, Description, Markdown, None } = TokenType;
    const rootNode: Comment = this.createNode(NodeType.Comment, None);
    console.log(`In parseSingleComment: ${this.current().name}`);
    const getDescription = (): DescriptionComment => {
      const current = this.current();
      return this.match(Description) ? ({
        flag: NodeType.DescriptionComment,
        description: current.lexeme,
        kind: current.type as TokenType,
        range: current.range
      }) : null;
    }

    switch (this.current().type) {
      case Description:
        const descNode = getDescription();
        this.accept();
        return descNode;
      case Tag:
        const tagNode: TagComment = this.createNode(NodeType.TagComment, Tag);
        tagNode.tag = this.current().lexeme;
        this.accept();
        if (this.match(Minus)) {
          this.accept();
          tagNode.description = getDescription();
          this.accept(Description);
          return tagNode;
        } else if (this.match(Identifier)) {
          const formalParamNode: FormalParameter = this.parseFormalParameter();
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
        const mdNode: MarkdownComment = this.createNode(NodeType.MarkdownComment, Markdown);
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
  // private parseParameters(): Parameters {
  //   console.log(`In parseParameters: ${this.current().name}`);
  //   const { Comma, None } = TokenType;
  //   const rootNode: Parameters = this.createNode(NodeType.Parameters, None);
  //   let paramNode = this.parseFormalParameter();
  //   rootNode.parameters = [paramNode];
  //   while (this.match(Comma)) {
  //     this.accept();
  //     rootNode.parameters.push(this.parseFormalParameter());

  //   }
  //   rootNode.range = new Range(rootNode.range.start, this.location.end);
  //   return rootNode;
  // }
  private parseFormalParameter(): FormalParameter {
    console.log(`In parseFormalParameter: ${this.current().name}`);
    const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = TokenType;
    const rootNode: FormalParameter = this.createNode(NodeType.FormalParameter, None);

    if (this.match(Identifier)) {
      switch (this.peek(1).type) {
        case Colon:
        case Equal:
          rootNode.parameter = this.parseParameter();
          rootNode.isOptional = false;
          break;
        case QuestionMark:
          const optionalParamNode = this.parseOptionalParameter();
          rootNode.parameter = optionalParamNode;
          rootNode.isOptional = optionalParamNode ? true : false;

          break;
        default:
          rootNode.parameter = this.parseParameter();
          rootNode.isOptional = false;
          break;
      }
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseParameter(): Parameter {
    console.log(`In parseParameter: ${this.current().name}`);
    const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = TokenType;
    const rootNode: Parameter = this.createNode(NodeType.Parameter, Identifier);

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
  private parseOptionalParameter(): OptionalParameter {
    console.log(`In parseOptionalParameter: ${this.current().name}`);
    const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = TokenType;
    const rootNode: Parameter = this.createNode(NodeType.Parameter, Identifier);

    rootNode.identifier = this.current().lexeme;
    this.accept(Identifier);
    this.accept(QuestionMark);
    if (this.match(Colon)) {
      rootNode.type = this.parseTypeDeclaration();
    }
    rootNode.range = new Range(rootNode.range.start, this.location.end);
    return rootNode;
  }
  private parseTypeDeclaration(): TypeDeclaration {
    const { LeftParen, RightParen, Identifier, None } = TokenType;
    const rootNode: TypeDeclaration = this.createNode(NodeType.TypeDeclaration, None);
    // Consume ':'
    this.accept();
    if (this.match(LeftParen)) {
      if (this.peek(1).type === Identifier) {
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
  private parseType(): Type {
    console.log(`In parseType: ${this.current().name}`);
    const { Any, Pipe, Ampersand, LeftParen } = TokenType;
    const rootNode: Type = this.createNode(NodeType.Type, Any);

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
  private parseUnionType(): UnionType {
    console.log(`In parseUnionType: ${this.current().name}`);
    const { Pipe, Any } = TokenType;
    const rootNode: UnionType = this.createNode(NodeType.UnionType, Any);
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
  private parseIntersectionType(): IntersectionType {
    console.log(`In parseIntersectionType: ${this.current().name}`);
    const { Ampersand, Any } = TokenType;
    const rootNode: IntersectionType = this.createNode(NodeType.IntersectionType, Any);
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
  private parseArrowFunctionType(): ArrowFunctionType {
    console.log(`In parseArrowFunctionType: ${this.current().name}`);
    const {
      Identifier, LeftParen, RightParen,
      Arrow, QuestionMark, Colon, Comma, None
    } = TokenType;
    const rootNode: ArrowFunctionType = this.createNode(NodeType.ArrowFunctionType, None);
    this.accept(LeftParen);
    if (this.match(Identifier)) {
      switch (this.peek(1).type) {
        case Colon:
          rootNode.parameter = this.parseParameter();
          if (this.match(Comma)) {
            rootNode.parameters = [rootNode.parameter];
            rootNode.parameter = null;
          }
          while (this.match(Comma)) {
            this.accept();
            rootNode.parameters.push(this.parseParameter());
          }
          break;
        case QuestionMark:
          rootNode.parameter = this.parseOptionalParameter();
          if (this.match(Comma)) {
            rootNode.parameters = [rootNode.parameter];
            rootNode.parameter = null;
          }
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