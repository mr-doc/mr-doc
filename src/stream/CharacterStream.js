"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Match_1 = require("../utils/Match");
const location_1 = require("../location");
class CharacterStream {
    constructor(source, location) {
        this.stream = [];
        this._position = 0;
        this._line = 1;
        this._column = 0;
        this.source(source, location);
    }
    // [Symbol.iterator]() { return this.stream.values(); }
    mark(c, next) {
        if (Match_1.default.isLineTerminator(c)) {
            this._line = next ? this._line + 1 : this._line - 1;
            this._column = 1;
        }
        else {
            if (next)
                this._column++;
            else
                this._column--;
        }
        return c;
    }
    accept() { const ch = this.current(); this.next(); return ch; }
    current() { return this.stream[this._position]; }
    next() { return this.mark(this.stream[++this._position], true); }
    previous() { return this.mark(this.stream[this._position--], false); }
    peek(to) { return this.stream[this._position + to]; }
    consume(to, array) {
        let i = 0;
        while (i++ < Math.abs(to)) {
            const s = to < 0 ? this.previous() : this.accept();
            if (array)
                array.push(s);
        }
    }
    source(source, location) {
        (this.stream = source ? source.split('') : this.stream).push('\u{0000}');
        this._position = 0;
        this._column = location ? location.column : 0;
        this._line = location ? location.line : 1;
    }
    get eos() { return this.position >= this.source.length - 1 && Match_1.default.isNullTerminator(this.current()); }
    set location(location) {
        this._position = location.position;
        this._line = location.line;
        this._column = location.column;
    }
    get location() { return location_1.location(this.position, this.line, this.column); }
    get position() { return this._position; }
    get line() { return this._line; }
    get column() { return this._column; }
    get length() { return this.stream.length; }
}
exports.default = CharacterStream;
