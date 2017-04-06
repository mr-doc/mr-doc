import Scanner, { IScanner } from '../scanner/';
import Token, { TokenKind, getTokenName } from '../token';
import { Range } from '../location'
import * as _ from 'lodash';
import * as AST from '../ast';
const { NodeType, createNode, endNode } = AST;

let scanner: IScanner = null;
let currentToken: Token = null;

function current(): Token {
  // Skip the tokens we don't care
  while(currentToken.kind === TokenKind.None) {
    currentToken = scanner.scan();
  }
  return currentToken;
}

/* flow control */
function accept() {
  currentToken = scanner.scan();
}

/* comparisons */
function match(kind: TokenKind, lexeme?: string) {
  const isEqualKind = current().kind === kind;
  return lexeme ? (isEqualKind && current().lexeme === lexeme) : isEqualKind;
}

function expect(kind: TokenKind, lexeme?: string) {
  let token = current();
  if (match(kind, lexeme)) accept();
  else token = raise(kind, lexeme);
  return token;
}

/* state handling */
function reset() { currentToken = null; }

/* error handling */
function raise(kinds: TokenKind | TokenKind[], expected?: string) {
  const { lexeme, location, kind } = current(), loc = `${location.line}:${location.column}`;
  let kindNames = "";
  if (Array.isArray(kinds)) {
    kinds.forEach((k, i) => i === 0 ? kindNames += getTokenName(k) : kindNames += ` or ${getTokenName(k)}`);
  } else { kindNames = expected ? `(${getTokenName(kinds)}, ${lexeme})` : getTokenName(kinds); }
  console.log(`mrdoc::parse [error]: expected ${kindNames} but found (${getTokenName(kind)}, '${lexeme}'). ${loc}`);
  return new Token(expected ? expected : "", TokenKind.None, current().location);
}


function parse() {
  currentToken = scanner.scan();
  if (currentToken) {
    parseComment();
    reset();
  } else return;
}

function parseComment() {
  const { Tag, Description, Markdown, None } = TokenKind;
  const rootNode: AST.Comment = createNode(NodeType.Comment, None, current().location);
  (rootNode.comments = []).push(parseSingleComment());
  while (current() && _.includes([Tag, Description, Markdown], current().kind)) {
    rootNode.comments.push(parseSingleComment());
  }
  return endNode(rootNode, current().location);
}


function parseSingleComment() {
  const { Minus, Identifier, Tag, Description, Markdown, None } = TokenKind;
  const rootNode: AST.Comment = createNode(NodeType.Comment, None, current().location);
  console.log(`In parseSingleComment: ${current().name}`);

  const getDescription = (): AST.DescriptionComment => {
    console.log(`In getDescription: ${current().name}`);
    const descriptionNode: AST.DescriptionComment = createNode(NodeType.DescriptionComment, Description, current().location);
    descriptionNode.description = expect(Description).lexeme;
    return endNode(descriptionNode, current().location);
  }
  switch (current().kind) {
    case Description:
      return getDescription();
    case Tag:
      const tagNode: AST.TagComment = createNode(NodeType.TagComment, Tag, current().location);
      tagNode.tag = expect(Tag).lexeme;
      if (match(Identifier)) tagNode.parameter = parseFormalParameter();
      if (match(Minus)) { expect(Minus); tagNode.description = getDescription(); }
      return endNode(tagNode, current().location);
    case Markdown:
      const mdNode: AST.MarkdownComment = createNode(NodeType.MarkdownComment, Markdown, current().location);
      mdNode.markdown = expect(Markdown).lexeme;
      return endNode(mdNode, current().location);
    default: return endNode(createNode(null, raise([Description, Tag, Markdown]).kind, null), null);
  }
}

function parseFormalParameter(): AST.FormalParameter {
  console.log(`In parseFormalParameter: ${current().name}`);
  const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = TokenKind;
  const rootNode: AST.FormalParameter = createNode(NodeType.FormalParameter, None, current().location);
  const lexeme = expect(TokenKind.Identifier).lexeme;
  switch (current().kind) {
    case Colon: case Equal:
      rootNode.parameter = parseParameter();
      (rootNode as AST.Parameter).identifier = lexeme;
      rootNode.isOptional = false;
      break;
    case QuestionMark:
      rootNode.parameter = parseOptionalParameter();
      (rootNode as AST.OptionalParameter).identifier = lexeme;
      rootNode.isOptional = true;
      break;
  }
  return endNode(rootNode, current().location);
}

function parseParameter() {
  console.log(`In parseParameter: ${current().name}`);
  const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = TokenKind;
  const rootNode: AST.Parameter = createNode(NodeType.Parameter, Identifier, current().location);
  // rootNode.identifier = expect(Identifier).lexeme;
  if (match(Colon)) rootNode.type = parseTypeDeclaration();
  if (match(Equal)) { rootNode.initializer = expect(Equal).lexeme; }
  return endNode(rootNode, current().location);
}

function parseOptionalParameter() {
  console.log(`In parseOptionalParameter: ${current().name}`);
  const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = TokenKind;
  const rootNode: AST.OptionalParameter = createNode(NodeType.Parameter, Identifier, current().location);
  // rootNode.identifier = expect(Identifier).lexeme;
  expect(QuestionMark);
  if (match(Colon)) { rootNode.type = parseTypeDeclaration(); }
  return endNode(rootNode, current().location);
}

function parseTypeDeclaration() {
  console.log(`In parseTypeDeclaration: ${current().name}`);
  expect(TokenKind.Colon);
  return parseType();
}

function parseType() {
  console.log(`In parseType: ${current().name}`);
  if (match(TokenKind.LeftParen)) parseParenthesizedTypeOrFunctionType();
  else parseUnionTypeOrHigher();
  return null;
}

function parseParenthesizedTypeOrFunctionType() {
  console.log(`In parseParenthesizedTypeOrFunctionType: ${current().name}`);
  const rootNode: AST.Type = createNode(NodeType.Type, TokenKind.None, current().location);
  if (match(TokenKind.LeftParen)) {
    accept();
    if (match(TokenKind.Identifier) || match(TokenKind.RightParen)) {
      parseFunctionType();
      return null;
    } else {
      parseType();
      expect(TokenKind.RightParen);
    }
  }
  return endNode(rootNode, current().location);
}

function parseUnionTypeOrHigher() {
  console.log(`In parseUnionTypeOrHigher: ${current().name}`);
  parseUnionOrIntersectionType(AST.NodeType.UnionType, parseIntersectionTypeOrHigher, TokenKind.Pipe);
}

function parseIntersectionTypeOrHigher() {
  console.log(`In parseIntersectionTypeOrHigher: ${current().name}`);
  parseUnionOrIntersectionType(AST.NodeType.IntersectionType, parseTypeOperatorOrHigher, TokenKind.Ampersand);
}

function parseTypeOperatorOrHigher() {
  console.log(`In parseTypeOperatorOrHigher: ${current().name}`);
  if(match(TokenKind.Any)) accept();
  else parseType();
}

function parseUnionOrIntersectionType(type: AST.NodeType, parseConstituentType: () => void, operator: TokenKind) {
  console.log(`In parseUnionOrIntersectionType: ${current().name}, operator ${getTokenName(operator)}`);
  if (match(operator)) accept();
  parseConstituentType();
  if (match(operator)) {
    while (match(operator)) {
      accept();
      parseConstituentType();
    }
  }
}


function parseFunctionType() {
  console.log(`In parseFunctionType: ${current().name}`);
  if(!match(TokenKind.RightParen)) parseFormalParameterList();
  expect(TokenKind.RightParen);
  expect(TokenKind.Arrow);
  parseType();
}

function parseFormalParameterList() {
  console.log(`In parseFormalParameterList: ${current().name}`);
  parseFormalParameter();
  parseFormalParameters();
}

function parseFormalParameters() {
  console.log(`In parseFormalParameters: ${current().name}`);
  while (match(TokenKind.Comma)) { accept(); parseFormalParameter();}
}


export default function Parser(source?: string) {
  scanner = Scanner(source);
  return {
    parse: function () {
      return parse();
    }
  }
}