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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyU3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3Q0FBbUM7QUFHbkM7SUFNRSx5QkFBWSxDQUFTO1FBTGIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVILENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQVUsQ0FBQyxDQUFDO0lBQUMsQ0FBQztJQUN4RSx1REFBdUQ7SUFDL0MsOEJBQUksR0FBWixVQUFhLENBQVMsRUFBRSxJQUFhO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGlDQUFPLEdBQVAsY0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCw4QkFBSSxHQUFKLGNBQWlCLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLGtDQUFRLEdBQVIsY0FBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsOEJBQUksR0FBSixVQUFLLEVBQVUsSUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxzQkFBSSxrQ0FBSzthQUFULGNBQXVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEUsc0JBQUkscUNBQVE7YUFBWixjQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3pDLHNCQUFJLGlDQUFJO2FBQVIsY0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pDLHNCQUFJLG1DQUFNO2FBQVYsY0FBZSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3JDLHNCQUFJLG1DQUFNO2FBQVYsY0FBZSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QyxzQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMifQ==