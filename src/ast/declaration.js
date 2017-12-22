"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Declaration {
}
exports.Declaration = Declaration;
class ParameterDeclaration {
    constructor(identifier, value, type, optional = false) {
        this.identifier = identifier;
        this.value = value;
        this.type = type;
        this.optional = optional;
    }
    accept(visitor) {
        return visitor.visitParameter(this);
    }
}
exports.ParameterDeclaration = ParameterDeclaration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWNsYXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0NBRUM7QUFGRCxrQ0FFQztBQUVEO0lBS0UsWUFBWSxVQUFpQixFQUFFLEtBQWlCLEVBQUUsSUFBaUIsRUFBRSxXQUFvQixLQUFLO1FBQzVGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFDTSxNQUFNLENBQUksT0FBOEI7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBZEQsb0RBY0MifQ==