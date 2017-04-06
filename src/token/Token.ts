import Location, { Range } from '../location';
import { getTokenName, TokenKind } from './';

export default class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly range: Range;
  readonly kind: TokenKind;
  readonly name: string;
  constructor(lexeme: string, type: TokenKind, location: Location) {
    this.lexeme = lexeme;
    this.name = getTokenName(type as number);
    this.kind = type;
    this.location = location;
  }
}