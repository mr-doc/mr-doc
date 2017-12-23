import Location, { Range } from '../location';
import { getTokenName, TokenType } from './';

export class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly range: Range;
  readonly kind: TokenType;
  readonly name: string;
  constructor(lexeme: string, type: TokenType, location: Location) {
    this.lexeme = lexeme;
    this.name = getTokenName(type as number);
    this.kind = type;
    this.location = location;
  }
}