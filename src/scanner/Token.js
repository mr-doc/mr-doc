"use strict";
var Token = (function () {
    function Token(lexeme, type, location) {
        this.lexeme = lexeme;
        this.type = type;
        this.location = location;
    }
    return Token;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Token;
//# sourceMappingURL=Token.js.map