"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./src/parser");
const _ = require("lodash");
class ASTPrinter {
    print(node) {
        return node.accept(this);
    }
    visitDescription(statement) {
        return this.stringify({ "description": statement.description });
    }
    visitMarkdown(statement) {
        return this.stringify({ "markdown": statement.markdown });
    }
    visitTagStatement(statement) {
        return this.stringify({
            "tag": _.merge(statement.tag, {
                "description": statement.description ? JSON.parse(statement.description.accept(this)).description : null,
                "parameter": statement.parameter ? JSON.parse(statement.parameter.accept(this)) : null,
            })
        });
    }
    visitParameter(declaration) {
        return this.stringify({
            "identifier": declaration.identifier,
            "optional": declaration.optional,
            "value": declaration.value ? JSON.parse(declaration.value.accept(this)) : null
        });
    }
    visitLiteralExpression(expression) {
        return this.stringify(expression.value);
    }
    stringify(object) {
        return JSON.stringify(object, null, 2);
    }
}
exports.ASTPrinter = ASTPrinter;
let parser = new parser_1.CommentParser(`
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
