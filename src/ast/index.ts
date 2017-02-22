import * as _ from 'lodash';
import Token, { TokenType } from '../token';
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
  parameters?: Parameter[] & OptionalParameter[]
}

// -----------------
// -- AST Helpers --
// -----------------

export function createNode(flag: NodeType, kind: TokenType, range: Range) {
  const node = { range: new Range(range.start), flag, kind, flagName: getNodeTypeName(flag) }
  return node;
}

type visitor = (node: Node, parent?: Node, property?, index?: number) => void;
/**
 * Traverses an AST
 * Credits to https://github.com/olov/ast-traverse
 * @returns Node[]  - A flattened tree
 */
export function traverse(root, visitor?: { pre?: visitor, post?: visitor }) {
  const leaves: Node[] = [];

  const visit = (node: Node, parent?, property?, index?: number) => {
    if (_.isUndefined(node)) return;
    if (visitor && visitor.pre) visitor.pre(node, parent, property, index);
    if (_.isObject(node)) {
      for (const prop in node) {
        let child = node[prop];
        if (_.isArray(child)) {
          for (let i = 0; i < child.length; i++) {
            if (_.isPlainObject(child[i])) {
              leaves.push(child[i])
              visit(child[i], node, prop, i);
            }
          }
        } else if (_.isPlainObject(child)) {
          leaves.push(child);
          visit(child, node, prop);
        }
      }
    }
    if (visitor && visitor.post) visitor.post(node, parent, property, index);
  }
  leaves.push(root);
  visit(root);
  return leaves;
};