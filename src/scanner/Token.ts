import Location from './Location';

export type TokenType = number | string;

export default class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly type: TokenType
  constructor(lexeme: string, type: TokenType, location: Location) {
    this.lexeme = lexeme;
    this.type = type;
    this.location = location;
  }
}