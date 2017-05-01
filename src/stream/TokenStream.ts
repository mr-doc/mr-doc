import Token from '../token/';
import Stream from './Stream';

export default class TokenStream implements Stream {
  private _stream: Token[] = [];
  private _position: number = 0;
  constructor(tokens: Token[]) { this._stream = tokens; }
  current(): Token { return this._stream[this._position]; }
  next(): Token { return this._stream[this._position++]; }
  previous(): Token { return this._stream[this._position--]; }
  peek(to: number): Token { return this._stream[this._position + to]; }
  source(tokens?: Token[]) {
    this._position = 0;
    this._stream = tokens ? tokens : this._stream;
  }
  get stream(): Token[] { return this._stream; }
  get position(): number { return this._position; }
  get eos(): boolean { return this._position === this._stream.length; }
}