import Location, { Range } from '../location';

export type TokenType = number | string;

export default class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly range: Range;
  readonly type: TokenType

  constructor(lexeme: string, type: TokenType, range: Range) {
    this.lexeme = lexeme;
    this.type = type;
    this.range = range;
    this.location = range.start;
  }
}