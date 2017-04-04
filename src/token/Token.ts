import Location, { Range } from '../location';
import { getTokenName } from './';
export type TokenType = number | string;

export default class Token {
  readonly lexeme: string;
  readonly location: Location;
  readonly range: Range;
  readonly type: TokenType;
  readonly name: string;
  readonly line: number;
  readonly column: number;
  readonly position: number;
  constructor(lexeme: string, type: TokenType, location: Location) {
    this.lexeme = lexeme;
    this.name = getTokenName(type as number);
    this.type = type;
    this.location = location;
    
  }
}