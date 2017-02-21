import Token, { TokenType } from '../token';
import Location, { Range } from '../location';

export
  const enum NodeType {
  None = 0,
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
  ArrowFunctionType

}

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

export interface Node {
  token?: Token
  kind?: TokenType
  flag?: NodeType
  flagName?: string
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
  parameter?: FormalParameter
}

export interface MarkdownComment extends Comment {
  markdown?: string
}

export interface FormalParameter extends Node {
  parameter?: Parameter | OptionalParameter
  isOptional?: boolean
}

export interface Parameter extends Node {
  identifier?: string
  initializer?: string
  type?: TypeDeclaration
}

export interface OptionalParameter extends Node {
  parameter?: string
  type?: TypeDeclaration
}

export interface TypeDeclaration extends Node {
  type?: Type | ArrowFunctionType
}

export interface Type extends Node {
  type?: string | UnionType | IntersectionType | ArrowFunctionType
}

export interface UnionType extends Type {
  types?: Type[]
}

export interface IntersectionType extends Type {
  types?: Type[]
}

export interface ArrowFunctionType extends Type {
  parameter?: Parameter | OptionalParameter
  parameters?: Parameter[] & OptionalParameter[]
}

export default Node;