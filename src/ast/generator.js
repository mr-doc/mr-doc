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
    visitBinaryExpression(expression) {
        return this.stringify({
            left: expression.left.accept(this),
            right: expression.right.accept(this)
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUJBLDRCQUE0QjtBQUM1Qiw0Q0FBcUM7QUFFckM7SUFJRSxZQUFZLE9BQVk7UUFIaEIsWUFBTyxHQUFHO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFFQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQWU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFNBQStCO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBNEI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQXVCO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNoSCxXQUFXLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENB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