import * as _ from 'lodash';
import Token, { TokenKind, getTokenName } from '../token';
import Location, { Range } from '../location';


// --------------
// -- NodeType --
// --------------

export
  const enum NodeType {
  None = 0,
  // Comment
  Comment, DescriptionComment, TagComment, MarkdownComment,
  // Parameter
  FormalParameter, Parameter, OptionalParameter,
  // Types
  TypeDeclaration, Type, UnionType, IntersectionType, ArrowFunctionType
}

// ----------------------
// -- NodeType Helpers --
// ----------------------

export function getNodeTypeName(flag: NodeType): string {
  return ({
    [NodeType.None]: "None",
    [NodeType.Comment]: "Comment",
    [NodeType.DescriptionComment]: "DescriptionComment",
    [NodeType.TagComment]: "TagComment",
    [NodeType.MarkdownComment]: "MarkdownComment",
    [NodeType.FormalParameter]: "FormalParameter",
    [NodeType.Parameter]: "Parameter",
    [NodeType.OptionalParameter]: "OptionalParameter",
    [NodeType.TypeDeclaration]: "TypeDeclaration",
    [NodeType.Type]: "Type",
    [NodeType.UnionType]: "UnionType",
    [NodeType.IntersectionType]: "IntersectionType",
    [NodeType.ArrowFunctionType]: "ArrowFunctionType"
  })[flag];
}

// --------------------
// -- AST Interfaces --
// --------------------

export interface Node {
  token?: Token
  kind?: TokenKind
  flag?: NodeType
  flagName?: string
  kindName?: string
  range?: Range
}

export interface Comment extends Node {
  comments?: Comment[]
}

export interface DescriptionComment extends Comment {
  description?: string,
}
export interface TagComment extends Comment {
  tag?: string,
  description?: DescriptionComment,
  parameter?: FormalParameter,
  type?: Type
}

export interface MarkdownComment extends Comment {
  markdown?: string
}

export interface FormalParameter extends Node {
  identifier?: string
  parameter?: Parameter | OptionalParameter
  isOptional?: boolean
  type?: Type
}

export interface Parameter extends Node {
  identifier?: string
  initializer?: string | Type
  type?: Type
}

export interface OptionalParameter extends Node {
  identifier?: string
  parameter?: string
  type?: Type
}

export interface TypeDeclaration extends Node {
  type?: Type | ArrowFunctionType
}

export interface Type extends Node {
  type?: any | Type[]
  types?: Type[]
}

export interface UnionType extends Type {
  types?: Type[]
}

export interface IntersectionType extends Type {
  types?: Type[]
}

export interface ArrowFunctionType extends Type {
  parameters?: FormalParameter[]
}


// -----------------
// -- AST Helpers --
// -----------------

export function createNode(flag: NodeType, kind: TokenKind, start: Location): Node {
  const node: Node = { range: new Range(start), flag, kind, flagName: getNodeTypeName(flag), kindName: getTokenName(kind) }
  return node;
}

export function endNode(node: Node, end: Location) {
  node.range = new Range(node.range.start, end);
  return node;
}