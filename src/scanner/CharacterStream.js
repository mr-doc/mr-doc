"use strict";
var Match_1 = require("../utils/Match");
var CharacterStream = (function () {
    function CharacterStream(s) {
        this.stream = [];
        this._position = 0;
        this._line = 1;
        this._column = 0;
        (this.stream = s.split('')).push("\0");
    }
    // [Symbol.iterator]() { return this.stream.values(); }
    CharacterStream.prototype.mark = function (c, next) {
        if (Match_1.default.isLineTerminator(c)) {
            this._line = next ? this._line + 1 : this._line - 1;
            this._column = 1;
        }
        else {
            this._column++;
        }
        return c;
    };
    CharacterStream.prototype.current = function () { return this.stream[this._position]; };
    CharacterStream.prototype.next = function () { return this.mark(this.stream[this._position++], true); };
    CharacterStream.prototype.previous = function () { return this.mark(this.stream[this._position--], false); };
    CharacterStream.prototype.peek = function (to) { return this.stream[this._position + to]; };
    Object.defineProperty(CharacterStream.prototype, "ended", {
        get: function () { return this._position === this.stream.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterStream.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterStream.prototype, "line", {
        get: function () { return this._line; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterStream.prototype, "column", {
        get: function () { return this._column; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterStream.prototype, "length", {
        get: function () { return this.stream.length; },
        enumerable: true,
        configurable: true
    });
    return CharacterStream;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CharacterStream;
//# sourceMappingURL=CharacterStream.js.map