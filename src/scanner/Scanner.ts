import { CharacterStream, TokenStream } from '../stream';
import Location, { Range } from '../location';
import Token from '../token';

abstract class Scanner {
  private stream = new CharacterStream();
  protected lexeme: string[] = [];
  protected tokens: Token[] = [];
  constructor(source?: string, location?: Location) { 
    if (source) { this.stream = new CharacterStream(source); }
  }
  abstract scan(): TokenStream;
  protected consume(to: number, array?: string[]) {
    let i = 0;
    while(i < Math.abs(to)) {
      const s = to < 0 ? this.previous() : this.next();
      if (array) { array.push(s); }
      i++;
    }
  }
  protected current(): string { return this.stream.current(); }
  protected next(): string { return this.stream.next(); }
  protected previous(): string { return this.stream.previous(); }
  protected peek(to: number) { return this.stream.peek(to); }
  protected get ended(): boolean { return this.stream.ended; }
  source(source?: string, location?: Location) {
    this.stream.source(source, location);
    this.lexeme = [];
    this.tokens = [];
  }
  get location (): Location {
    let { position, line, column } = this.stream;
    return new Location(position, line, column);
  }
}

export default Scanner;