import TokenStream from '../scanner/TokenStream';
import Token from '../scanner/Token';
import { Node } from '../ast/AST';

abstract class Parser {
  private stream: TokenStream;
  constructor(stream: TokenStream) { this.stream = stream; }
  protected current(): Token { return this.stream.current(); }
  protected next(): Token { return this.stream.next(); }
  protected previous(): Token { return this.stream.previous(); }
  protected peek(to: number): Token { return this.stream.peek(to); }
  abstract parse(): Node;
  get ended(): boolean { return this.stream.ended; }
}

export default Parser;