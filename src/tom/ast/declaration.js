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
//# sourceMappingURL=declaration.js.map