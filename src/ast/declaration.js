"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Declaration {
}
exports.Declaration = Declaration;
class ParameterDeclaration {
    constructor(identifier, value, optional = false) {
        this.identifier = identifier;
        this.value = value;
        this.optional = optional;
    }
    accept(visitor) {
        return visitor.visitParameter(this);
    }
}
exports.ParameterDeclaration = ParameterDeclaration;
