"use strict";
var CharacterStream_1 = require("./CharacterStream");
var Location_1 = require("./Location");
var Scanner = (function () {
    function Scanner(source) {
        this.lexeme = [];
        this.tokens = [];
        this.source = new CharacterStream_1.default(source);
    }
    Object.defineProperty(Scanner.prototype, "position", {
        get: function () {
            var _a = this.source, position = _a.position, line = _a.line, column = _a.column;
            return new Location_1.Position(position, line, column);
        },
        enumerable: true,
        configurable: true
    });
    Scanner.prototype.consume = function (to, array) {
        var i = 0;
        while (i < Math.abs(to)) {
            var s = to < 0 ? this.previous() : this.next();
            if (array) {
                array.push(s);
            }
            i++;
        }
    };
    Scanner.prototype.current = function () { return this.source.current(); };
    Scanner.prototype.next = function () { return this.source.next(); };
    Scanner.prototype.previous = function () { return this.source.previous(); };
    Scanner.prototype.peek = function (to) { return this.source.peek(to); };
    Object.defineProperty(Scanner.prototype, "ended", {
        get: function () { return this.source.ended; },
        enumerable: true,
        configurable: true
    });
    return Scanner;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scanner;
//# sourceMappingURL=Scanner.js.map