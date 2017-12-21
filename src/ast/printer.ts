import {
  Statement,
  DescriptionStatement,
  MarkdownStatement,
  TagStatement,
  ParameterDeclaration,
  LiteralExpression
} from './';

import { 
  StatementVisitor, 
  Visitor, 
  ExpressionVisitor, 
  DeclarationVisitor } from '../visitor';
  
import * as _ from 'lodash';
import remove from '../utils/remove';

export class Printer implements StatementVisitor<string>, DeclarationVisitor<string>, ExpressionVisitor<string> {
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
      "value": declaration.value ? JSON.parse(declaration.value.accept<string>(this)) : null
    });
  }

  visitLiteralExpression(expression: LiteralExpression): string {
    return this.stringify(expression.value);
  }

  private stringify(object) {
    if (this.options.omit_location) remove(object, 'location');
    return JSON.stringify(object, null, 2);
  }
}