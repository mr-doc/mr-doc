import { CharacterStream, TokenStream } from '../stream';
import Location, { Range } from '../location';
import Token, { TokenType } from '../token';

abstract class Scanner {
  private stream = new CharacterStream();
  protected lexeme: string[] = [];
  protected tokens: Token[] = [];
  protected history: Token[] = [];
  constructor(source?: string, location?: Location) {
    if (source) { this.stream = new CharacterStream(source); }
  }
  abstract scan(): TokenStream;
  /**
   * @param token - Add a token to the token stream.
   * @param restrict - Restrict the addition to history only.
   */
  protected addToken(token: Token, restrict = false) {
    if (!restrict) { this.tokens.push(token); }
    this.history.push(token);
  }
  protected consume(to: number, array?: string[]) {
    let i = 0;
    while (i < Math.abs(to)) {
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
  protected get previousToken(): Token {
    return this.tokens[this.tokens.length - 1];
  }
  protected get previousTokenFromHistory(): Token { 
    return this.history[this.history.length - 1];
  }
  source(source?: string, location?: Location) {
    this.stream.source(source, location);
    this.lexeme = [];
    this.tokens = [];
  }
  get location(): Location {
    let { position, line, column } = this.stream;
    return new Location(position, line, column);
  }
}

export default Scanner;