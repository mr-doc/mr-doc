"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const remove_1 = require("../utils/remove");
class Printer {
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
exports.Printer = Printer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFtQkEsNEJBQTRCO0FBQzVCLDRDQUFxQztBQUVyQztJQUlFLFlBQVksT0FBWTtRQUhoQixZQUFPLEdBQUc7WUFDaEIsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FBQztRQUVBLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxLQUFLLENBQUMsSUFBZTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBUyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsU0FBK0I7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUE0QjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBdUI7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2hILFdBQVcsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJ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