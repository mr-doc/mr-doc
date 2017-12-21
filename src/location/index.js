"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function location(position, line, column) {
    return { position, line, column };
}
exports.location = location;
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
exports.Range = Range;
