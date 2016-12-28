import Match from '../utils/Match';

export default class CharacterStream {
  private stream: string[] = [];
  private _position: number = 0;
  private _line: number = 1;
  private _column: number = 0;

  constructor(s: String) { (this.stream = s.split('')).push('\u{0000}'); }
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
  peek(to: number) { return this.stream[this._position + to]; }
  get ended(): boolean { return this._position === this.stream.length; }
  get position() { return this._position; }
  get line() { return this._line; }
  get column() { return this._column; }
  get length() { return this.stream.length; }
}