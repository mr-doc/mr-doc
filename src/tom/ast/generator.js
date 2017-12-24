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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUJBLDRCQUE0QjtBQUM1Qiw0Q0FBcUM7QUFFckM7SUFJRSxZQUFZLE9BQVk7UUFIaEIsWUFBTyxHQUFHO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFFQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQWU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFNBQStCO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBNEI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQXVCO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNoSCxXQUFXLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQy9GLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQWlDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BCLFlBQVksRUFBRSxXQUFXLENBQUMsVUFBVTtZQUNwQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVE7WUFDaEMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0RixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3BGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxVQUE2QjtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG9CQUFvQixDQUFDLFVBQTJCO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxVQUEyQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDakY7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsVUFBa0M7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQUMsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFuRUQsOEJBbUVDIn0=