import {
  Statement,
  DescriptionStatement,
  MarkdownStatement,
  TagStatement,
  ParameterDeclaration,
  LiteralExpression,
  BinaryExpression,
  GroupExpression,
  UnionExpression,
  IntersectionExpression
} from './';

import { 
  StatementVisitor, 
  Visitor, 
  ExpressionVisitor, 
  DeclarationVisitor } from '../ast/visitor';
  
import * as _ from 'lodash';
import remove from '../utils/remove';

export class Generator implements StatementVisitor<string>, DeclarationVisitor<string>, ExpressionVisitor<string> {
  private options = {
    omit_location: false
  };
  constructor(options?: {}) {
    this.options = _.merge(this.options, options);
  }
  print(node: Statement): string {
    return node.accept<string>(this);
  }

  visitDescription(statement: DescriptionStatement): string {
    return this.stringify({ "description": statement.description });
  }

  visitMarkdown(statement: MarkdownStatement): string {
    return this.stringify({ "markdown": statement.markdown });
  }

  visitTagStatement(statement: TagStatement): string {
    return this.stringify({
      "tag": _.merge(statement.tag, {
        "description": statement.description ? JSON.parse(statement.description.accept<string>(this)).description : null,
        "parameter": statement.parameter ? JSON.parse(statement.parameter.accept<string>(this)) : null,
      })
    });
  }

  visitParameter(declaration: ParameterDeclaration): string {
    return this.stringify({
      "identifier": declaration.identifier,
      "optional": declaration.optional,
      "value": declaration.value ? JSON.parse(declaration.value.accept<string>(this)) : null,
      "type": declaration.type ? JSON.parse(declaration.type.accept<string>(this)) : null,
    });
  }

  visitLiteralExpression(expression: LiteralExpression): string {
    return this.stringify(expression.value);
  }

  visitBinaryExpression(expression: BinaryExpression) : string {
    return this.stringify({
      left: expression.left.accept(this),
      right: expression.right.accept(this)
    });
  }

  visitGroupExpression(expression: GroupExpression) : string {
    return this.stringify({
      group: JSON.parse(expression.expression.accept(this))
    })
  }

  visitUnionExpresson(expression: UnionExpression) : string {
    return this.stringify({
      union: {
        types: expression.expressions.map(expr => JSON.parse(expr.accept<string>(this))),
      }
    });
  }

  visitIntersectExpression(expression: IntersectionExpression) : string {
    return this.stringify({
      intersection: {
        types: expression.expressions.map(expr => JSON.parse(expr.accept<string>(this))),
      }
    })
  }

  private stringify(object) {
    if (this.options.omit_location) remove(object, 'location');
    return JSON.stringify(object, null, 2);
  }
}