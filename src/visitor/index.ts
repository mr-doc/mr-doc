// import { Statement } from "../ast/index";

import { 
  DescriptionStatement,
  MarkdownStatement,
  TagStatement,
  ParameterDeclaration,
  LiteralExpression
 } from '../ast/'


export interface Visitor {

}

export interface StatementVisitor<T> extends Visitor {
  visitDescription: (statement: DescriptionStatement) => T,
  visitMarkdown: (statement: MarkdownStatement) => T,
  visitTagStatement: (statement: TagStatement) => T,
}

export interface DeclarationVisitor<T> extends Visitor {
  visitParameter: (declaration: ParameterDeclaration) => T,
}

export interface ExpressionVisitor<T> extends Visitor {
  visitLiteralExpression: (expression: LiteralExpression) => T,
}