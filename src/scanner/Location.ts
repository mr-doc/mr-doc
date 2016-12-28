export class Position {
  readonly position: number;
  readonly line: number;
  readonly column: number;
  constructor(position: number, line: number, column: number) {
    this.position = position;
    this.line = line;
    this.column = column;
  }
}

export default class Location {
  readonly start: Position
  readonly end: Position
  constructor(start: Position, end: Position) {
    this.start = start;
    this.end = end;
  }
}