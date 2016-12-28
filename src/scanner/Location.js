"use strict";
var Position = (function () {
    function Position(position, line, column) {
        this.position = position;
        this.line = line;
        this.column = column;
    }
    return Position;
}());
exports.Position = Position;
var Location = (function () {
    function Location(start, end) {
        this.start = start;
        this.end = end;
    }
    return Location;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Location;
//# sourceMappingURL=Location.js.map