"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(token, message) {
        super(message);
        Error.captureStackTrace(this, Exception.constructor);
        this.token = token;
        // Object.setPrototypeOf(this, Exception.prototype);
    }
}
exports.Exception = Exception;
class ParseException extends Exception {
    constructor(token, message) {
        super(token, message);
        this.name = this.constructor.name;
        this.stack = `(line ${token.location.line}, column ${token.location.column})`;
    }
}
exports.ParseException = ParseException;
//# sourceMappingURL=index.js.map