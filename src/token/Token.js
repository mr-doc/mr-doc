"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Token {
    constructor(lexeme, type, location) {
        this.lexeme = lexeme;
        this.name = _1.getTokenName(type);
        this.kind = type;
        this.location = location;
    }
}
exports.default = Token;
