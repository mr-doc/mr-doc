import { CommentScanner } from '../scanner/';
import Token, { TokenKind, getTokenName } from '../token';
import Location from '../location'
import * as _ from 'lodash';
import * as AST from '../ast';
const { NodeType, createNode, endNode } = AST;

export class CommentParser {
  currentToken: Token = null;
  scanner: CommentScanner = null;
  constructor(source?: string) {
    this.scanner = new CommentScanner(source);
  }
  private current(): Token {
    // Skip the tokens we don't care
    while (this.currentToken.kind === TokenKind.None) { this.currentToken = this.scanner.scan(); }
    return this.currentToken;
  }

  private get location(): Location { return this.currentToken.location; }

  /* flow control */
  private accept(): Token {
    const previousToken = this.currentToken;
    this.currentToken = this.scanner.scan();
    return previousToken;
  }

  /* comparisons */
  private match(kind: TokenKind, lexeme?: string) {
    const isEqualKind = this.current().kind === kind;
    return lexeme ? (isEqualKind && this.current().lexeme === lexeme) : isEqualKind;
  }

  private expect(kind: TokenKind, lexeme?: string) {
    let token = this.current();
    if (this.match(kind, lexeme)) this.accept();
    else { token = this.raise(kind, lexeme); }
    return token;
  }

  /* error handling */
  private raise(kinds: TokenKind | TokenKind[], expected?: string) {
    const { lexeme, location, kind } = this.current(), loc = `Ln ${location.line}, Col ${location.column}`;
    let kindNames = "";
    if (Array.isArray(kinds)) {
      kinds.forEach((k, i) => i === 0 ? kindNames += getTokenName(k) : kindNames += ` or ${getTokenName(k)}`);
    } else { kindNames = expected ? `(${getTokenName(kinds)}, ${lexeme})` : getTokenName(kinds); }
    console.log(`mrdoc::parse [error]: expected ${kindNames} but found (${getTokenName(kind)}, '${lexeme}'). ${loc}`);
    return new Token(expected ? expected : "", TokenKind.None, this.location);
  }

  parse(): AST.Comment {
    this.currentToken = this.scanner.scan();
    if (this.currentToken) return this.parseComment();
    else return;
  }

  private parseComment() {
    const { Tag, Description, Markdown, None } = TokenKind;
    const rootNode: AST.Comment = createNode(NodeType.Comment, None, this.location);
    (rootNode.comments = []).push(this.parseSingleComment());
    while (this.current() && _.includes([Tag, Description, Markdown], this.current().kind)) {
      rootNode.comments.push(this.parseSingleComment());
    }
    return endNode(rootNode, this.location);
  }

  private parseSingleComment() {
    const { Any, Minus, Identifier, Tag, Description, Markdown, None, Colon } = TokenKind;
    const rootNode: AST.Comment = createNode(NodeType.Comment, None, this.location);
    // console.log(`In parseSingleComment: ${this.current().name}`);

    const getDescription = (): AST.DescriptionComment => {
      // console.log(`In getDescription: ${this.current().name}`);
      const descriptionNode: AST.DescriptionComment = createNode(NodeType.DescriptionComment, Description, this.location);
      descriptionNode.description = this.expect(Description).lexeme;
      return endNode(descriptionNode, this.location);
    }
    switch (this.current().kind) {
      case Description:
        return getDescription();
      case Tag:
        const tagNode: AST.TagComment = createNode(NodeType.TagComment, Tag, this.location);
        tagNode.tag = this.expect(Tag).lexeme;
        if (tagNode.tag === '@return' && this.match(Any)) { tagNode.type = this.parseType(); }
        else if (this.match(Identifier)) tagNode.parameter = this.parseFormalParameter();
        if (this.match(Minus)) { this.expect(Minus); tagNode.description = getDescription(); }
        return endNode(tagNode, this.location);
      case Markdown:
        const mdNode: AST.MarkdownComment = createNode(NodeType.MarkdownComment, Markdown, this.location);
        mdNode.markdown = this.expect(Markdown).lexeme;
        return endNode(mdNode, this.location);
      default: return endNode(createNode(null, this.raise([Description, Tag, Markdown]).kind, null), null);
    }
  }

  private parseFormalParameter(): AST.FormalParameter {
    // console.log(`In parseFormalParameter: ${this.current().name}`);
    const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = TokenKind;
    let rootNode: AST.FormalParameter = createNode(NodeType.FormalParameter, None, this.location);
    const lexeme = this.expect(TokenKind.Identifier).lexeme;
    // console.log(`In parseFormalParameter (after): ${this.current().name}`);

    switch (this.current().kind) {
      case Colon: case Equal:
        rootNode = this.parseParameter();
        (rootNode as AST.Parameter).identifier = lexeme;
        rootNode.isOptional = false;
        break;
      case QuestionMark:
        rootNode = this.parseOptionalParameter();
        (rootNode as AST.OptionalParameter).identifier = lexeme;
        rootNode.isOptional = true;
        break;
      default:
        rootNode.identifier = lexeme;
        rootNode.isOptional = false;
    }
    return endNode(rootNode, this.location);
  }

  private parseParameter(): AST.Parameter {
    // console.log(`In parseParameter: ${this.current().name}`);
    const { None, Colon, LeftParen, RightParen, Any, Equal, Initializer } = TokenKind;
    const rootNode: AST.Parameter = createNode(NodeType.FormalParameter, None, this.location);
    if (this.match(Colon)) {
      rootNode.type = this.parseTypeDeclaration();
    }
    if (this.match(Equal)) {
      this.accept();
      if (this.match(TokenKind.Initializer)) {
        rootNode.initializer = this.expect(TokenKind.Initializer).lexeme;
      } else if (this.match(TokenKind.LeftParen)) {
        this.accept();
        rootNode.initializer = this.parseFunctionType();
      }
    }
    return endNode(rootNode, this.location);
  }

  private parseOptionalParameter(): AST.OptionalParameter {
    // console.log(`In parseOptionalParameter: ${this.current().name}`);
    const { None, QuestionMark, LeftParen, RightParen, Colon } = TokenKind;
    const rootNode: AST.OptionalParameter = createNode(NodeType.FormalParameter, None, this.location);
    this.expect(QuestionMark);
    if (this.match(Colon)) {
      rootNode.type = this.parseTypeDeclaration();
      rootNode.type = _.isString(rootNode.type.type) ? rootNode.type : rootNode.type.type;
    }
    return endNode(rootNode, this.location);
  }

  private parseTypeDeclaration(): AST.Type {
    // console.log(`In parseTypeDeclaration: ${this.current().name}`);
    this.expect(TokenKind.Colon);
    return this.parseType();
  }

  private parseType(): AST.Type {
    // console.log(`In parseType: ${this.current().name}`);
    let rootNode: AST.Type = createNode(NodeType.Type, TokenKind.None, this.location);
    if (this.match(TokenKind.LeftParen)) {
      rootNode = this.parseParenthesizedTypeOrFunctionType();
      if (this.match(TokenKind.Ampersand) || this.match(TokenKind.Pipe)) {
        rootNode = this.parseUnionOrIntersectionType(rootNode);
      }
    } else rootNode = this.parseUnionOrIntersectionOrPrimaryType();

    return endNode(rootNode, this.location);
  }

  private parseParenthesizedTypeOrFunctionType(): AST.Type {
    // console.log(`In parseParenthesizedTypeOrFunctionType: ${this.current().name}`);
    let rootNode: AST.Type = createNode(NodeType.Type, TokenKind.None, this.location);
    this.accept();
    if (this.match(TokenKind.Identifier) || this.match(TokenKind.RightParen)) {
      rootNode = this.parseFunctionType();
    } else {
      rootNode = this.parseType();
      this.expect(TokenKind.RightParen);
    }
    // console.log(`In parseParenthesizedTypeOrFunctionType: (after) ${this.current().name}`);
    return endNode(rootNode, this.location);
  }
  private parseUnionOrIntersectionOrPrimaryType(): AST.Type {
    // console.log(`In parseUnionOrIntersectionOrPrimaryType: ${this.current().name}`);
    let rootNode: AST.Type = createNode(NodeType.Type, TokenKind.Any, this.location);
    rootNode.type = this.expect(TokenKind.Any).lexeme;
    // console.log(`In parseUnionOrIntersectionOrPrimaryType: (after) ${this.current().name}`);
    return this.parseUnionOrIntersectionType(rootNode);
  }

  private parseUnionOrIntersectionType(rootNode?: AST.Type) {
    // console.log(`In parseUnionOrIntersectionType: ${this.current().name}`);
    if (this.match(TokenKind.Pipe) || this.match(TokenKind.Ampersand)) {
      const operator = this.current().kind;
      const nodeType = operator === TokenKind.Pipe ? NodeType.UnionType : NodeType.IntersectionType;
      let tempNode: AST.Type = endNode(rootNode, this.location);
      rootNode = createNode(nodeType, operator, this.location);
      (rootNode.types = []).push(tempNode);
      while (this.match(operator)) {
        this.accept();
        rootNode.types.push(this.parseType());
      }
      // console.log(`In parseUnionOrIntersectionType: (after) ${this.current().name}`);
      rootNode.type = rootNode.types;
      delete rootNode.types;
    }
    return endNode(rootNode, this.location);
  }


  private parseFunctionType(): AST.ArrowFunctionType {
    // console.log(`In parseFunctionType: ${this.current().name}`);
    let rootNode: AST.ArrowFunctionType = createNode(NodeType.ArrowFunctionType, TokenKind.None, this.location);
    if (this.match(TokenKind.Identifier)) rootNode.parameters = this.parseFormalParameterList();
    else delete rootNode.parameters;
    this.expect(TokenKind.RightParen);
    this.expect(TokenKind.Arrow);
    // console.log(`In parseFunctionType: (after) ${this.current().name}`);
    rootNode.type = this.parseType();
    return endNode(rootNode, this.location);
  }

  private parseFormalParameterList(): AST.FormalParameter[] {
    // console.log(`In parseFormalParameterList: ${this.current().name}`);
    const parameters: AST.FormalParameter[] = [];
    parameters.push(this.parseFormalParameter());
    while (this.match(TokenKind.Comma)) { this.accept(); parameters.push(this.parseFormalParameter()); }
    return parameters;
  }
}

export default function Parser(source?: string) {
  return new CommentParser(source);
}