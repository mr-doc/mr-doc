"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const remove_1 = require("../utils/remove");
class Generator {
    constructor(options) {
        this.options = {
            omit_location: false
        };
        this.options = _.merge(this.options, options);
    }
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
            "value": declaration.value ? JSON.parse(declaration.value.accept(this)) : null,
            "type": declaration.type ? JSON.parse(declaration.type.accept(this)) : null,
        });
    }
    visitLiteralExpression(expression) {
        return this.stringify(expression.value);
    }
    visitGroupExpression(expression) {
        return this.stringify({
            group: JSON.parse(expression.expression.accept(this))
        });
    }
    visitUnionExpresson(expression) {
        return this.stringify({
            union: {
                types: expression.expressions.map(expr => JSON.parse(expr.accept(this))),
            }
        });
    }
    visitIntersectExpression(expression) {
        return this.stringify({
            intersection: {
                types: expression.expressions.map(expr => JSON.parse(expr.accept(this))),
            }
        });
    }
    stringify(object) {
        if (this.options.omit_location)
            remove_1.default(object, 'location');
        return JSON.stringify(object, null, 2);
    }
}
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map