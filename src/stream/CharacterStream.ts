import Match from '../utils/Match';
import Stream from './Stream';
import Location from '../Location/';

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
    } else { this._column++; }
    return c;
  }
  current(): string { return this.stream[this._position]; }
  next(): string { return  this.mark(this.stream[this._position++], true); }
  previous(): string { return this.mark(this.stream[this._position--], false); }
  peek(to: number): string { return this.stream[this._position + to]; }
  source(source: string, location?: Location) {
    (this.stream = source ? source.split('') : this.stream).push('\u{0000}'); 
    if (location) {
      this._position = location.position;
      this._column = location.column;
      this._line = location.line;
    } else {
      this._position = this._column = 0;
      this._line = 1;
    }
  }
  get ended(): boolean { return this._position === this.stream.length; }
  set location(location: Location) {
    this._position = location.position;
    this._line = location.line;
    this._column = location.column;
  }
  get position() { return this._position; }
  get line() { return this._line; }
  get column() { return this._column; }
  get length() { return this.stream.length; }
}