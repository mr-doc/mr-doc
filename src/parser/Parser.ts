import { TokenStream } from '../stream';
import Token, { TokenType, getTokenName } from '../token';
import { Node, NodeType } from '../ast';
import { Range } from '../location';
import * as _ from 'lodash';

abstract class Parser {
  private stream: TokenStream;
  constructor(stream: TokenStream) { this.stream = stream; }
  abstract parse(): Node;
  protected current(): Token { return this.stream.current(); }
  protected next(): Token { return this.stream.next(); }
  protected previous(): Token { return this.stream.previous(); }
  protected peek(to: number): Token { return this.stream.peek(to); }
  protected consume(to: number) {
    let i = 0;
    while (i < Math.abs(to)) {
      const s = to < 0 ? this.previous() : this.next();
      i++;
    }
  }
  protected match(type: TokenType,) {
    let current = this.current();
    return current.type === type;
  }
  protected matchAny(matches: TokenType[]) {
    return _.includes(matches, this.current().type);
  }
  protected matchAll(matches: TokenType[]) {
    let results = [];
    for (let i = 0; i < matches.length; i++) {
      results.push(this.match(matches[i]));
    }
    return results.indexOf(false) === 0;
  }
  
  get ended(): boolean { return this.stream.ended || this.match(TokenType.NullTerminator); }
  protected accept(type?: TokenType) {
    if (type && this.current()) {
      const isEOF = () => this.current().type === TokenType.NullTerminator;
      if (this.current().type === type) {
        if(isEOF()) return;
        this.next();
      } else {
        console.log(`warn: expected a token type of ${getTokenName(type)}`);
        if(isEOF()) return;
        this.next();
      }
    } else { this.next(); }
  }
  get location() { return this.current().range; }
}

export default Parser;