import Match from '../utils/Match';
import Stream from './';
import Location, { location } from '../location';

export default class CharacterStream implements Stream {
  private stream: string[] = [];
  private _position: number = 0;
  private _line: number = 1;
  private _column: number = 0;
  private _location: Location;
  constructor(source?: string, location?: Location) {
    this.source(source, location);
  }
  // [Symbol.iterator]() { return this.stream.values(); }
  private mark(c: string, next: boolean): string {
    if (Match.isLineTerminator(c)) {
      this._line = next ? this._line + 1 : this._line - 1;
      this._column = 1;
    } else { if (next) this._column++; else this._column--; }
    return c;
  }
  accept(): string { const ch = this.current(); this.next(); return ch; }
  current(): string { return this.stream[this._position]; }
  next(): string { return this.mark(this.stream[++this._position], true); }
  previous(): string { return this.mark(this.stream[this._position--], false); }
  peek(to: number): string { return this.stream[this._position + to]; }
  consume(to: number, array?: string[]) {
    let i = 0;
    while (i++ < Math.abs(to)) {
      const s = to < 0 ? this.previous() : this.accept();
      if (array) array.push(s);
    }
  }
  source(source: string, location?: Location) {
    (this.stream = source ? source.split('') : this.stream).push('\u{0000}');
    this._position = 0;
    this._column = location ? location.column : 0;
    this._line = location ? location.line : 1;
  }
  get eos(): boolean { return this.position >= this.source.length - 1 && Match.isNullTerminator(this.current()); }
  set location(location: Location) {
    this._position = location.position;
    this._line = location.line;
    this._column = location.column;
  }
  get location() { return location(this.position, this.line, this.column); }
  get position() { return this._position; }
  get line() { return this._line; }
  get column() { return this._column; }
  get length() { return this.stream.length; }
}