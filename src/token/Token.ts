import Location, { Range } from '../location';
import { getTokenName } from './';
export type TokenType = number | string;

export default class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly range: Range;
  readonly type: TokenType;
  readonly name: string;
  constructor(lexeme: string, type: TokenType, range: Range) {
    this.lexeme = lexeme;
    this.name = getTokenName(type as number);
    this.type = type;
    this.range = range;
    this.location = range.start;
  }
}