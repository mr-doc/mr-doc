import Token from './Token';
import Stream from './Stream';

export default class TokenStream implements Stream {
  readonly stream: Token[] = [];
  private _position: number = 0;
  constructor(tokens: Token[]) { this.stream = tokens; }
  current(): Token { return this.stream[this._position]; }
  next(): Token { return this.stream[this._position++]; }
  previous(): Token { return this.stream[this._position--]; }
  peek(to: number): Token { return this.stream[this._position + to]; }
  get position(): number { return this._position; }
  get ended(): boolean { return this._position === this.stream.length; }
}