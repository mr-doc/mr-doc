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
            "value": declaration.value ? JSON.parse(declaration.value.accept(this)) : null
        });
    }
    visitLiteralExpression(expression) {
        return this.stringify(expression.value);
    }
    stringify(object) {
        if (this.options.omit_location)
            remove_1.default(object, 'location');
        return JSON.stringify(object, null, 2);
    }
}
exports.Printer = Printer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFlQSw0QkFBNEI7QUFDNUIsNENBQXFDO0FBRXJDO0lBSUUsWUFBWSxPQUFZO1FBSGhCLFlBQU8sR0FBRztZQUNoQixhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDO1FBRUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELEtBQUssQ0FBQyxJQUFlO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFTLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxTQUErQjtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQTRCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUF1QjtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUM1QixhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDaEgsV0FBVyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUMvRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFpQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixZQUFZLEVBQUUsV0FBVyxDQUFDLFVBQVU7WUFDcEMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1lBQ2hDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdkYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQixDQUFDLFVBQTZCO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sU0FBUyxDQUFDLE1BQU07UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFBQyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQTVDRCwwQkE0Q0MifQ==