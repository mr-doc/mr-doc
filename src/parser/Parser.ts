import TokenStream from '../scanner/TokenStream';
import Token from '../scanner/Token';
import { Node } from '../ast/AST';

abstract class Parser {
  private stream: TokenStream;
  constructor(stream: TokenStream) { this.stream = stream; }
  current(): Token { return this.stream.current(); }
  next(): Token { return this.stream.next(); }
  previous(): Token { return this.stream.previous(); }
  peek(to: number): Token { return this.stream.peek(to); }
  abstract parse(): Node;
}

export default Parser;