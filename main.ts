import { CommentParser } from './src/parser';
import { StatementVisitor, Visitor, ExpressionVisitor, DeclarationVisitor } from './src/visitor';
import {
  Statement,
  DescriptionStatement,
  MarkdownStatement,
  TagStatement,
  ParameterDeclaration,
  LiteralExpression
} from './src/ast/';
import { ParseException } from './src/exceptions';
import * as _ from 'lodash';

export class ASTPrinter implements StatementVisitor<string>, DeclarationVisitor<string>, ExpressionVisitor<string> {
  
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
    return JSON.stringify(object, null, 2);
  }
}


let parser = new CommentParser(`
  Hello world
  @param id = [] - description
  +--
   # Hello
   \`\`\`
    function () {}
   \`\`\`
  +--
`);
let printer = new ASTPrinter();

let statements = parser.parse();

statements.forEach(statement => console.log(printer.print(statement)));
