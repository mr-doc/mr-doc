"use strict";
var TokenStream = (function () {
    function TokenStream(tokens) {
        this.stream = [];
        this._position = 0;
        this.stream = tokens;
    }
    TokenStream.prototype.current = function () { return this.stream[this._position]; };
    TokenStream.prototype.next = function () { return this.stream[this._position++]; };
    TokenStream.prototype.previous = function () { return this.stream[this._position--]; };
    TokenStream.prototype.peek = function (to) { return this.stream[this._position + to]; };
    Object.defineProperty(TokenStream.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenStream.prototype, "ended", {
        get: function () { return this._position === this.stream.length; },
        enumerable: true,
        configurable: true
    });
    return TokenStream;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenStream;
//# sourceMappingURL=TokenStream.js.map