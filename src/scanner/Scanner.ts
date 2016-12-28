import CharacterStream from './CharacterStream';
import Location, { Position } from './Location';
import Token from './Token';

abstract class Scanner {
  private source: CharacterStream;
  protected lexeme: string[] = [];
  protected tokens: Token[] = [];
  constructor(source: string) { this.source = new CharacterStream(source); }
  abstract scan(): Token[];
  protected get position (): Position {
    let { position, line, column } = this.source;
    return new Position(position, line, column);
  }
  protected consume(to: number, array?: string[]) {
    let i = 0;
    while(i < Math.abs(to)) {
      const s = to < 0 ? this.previous() : this.next();
      if (array) { array.push(s); }
      i++;
    }
  }
  protected current(): string { return this.source.current(); }
  protected next(): string { return this.source.next(); }
  protected previous(): string { return this.source.previous(); }
  protected peek(to: number) { return this.source.peek(to); }
  protected get ended(): boolean { return this.source.ended; }
}


export default Scanner;