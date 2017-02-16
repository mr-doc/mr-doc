export default class Location {
  readonly position: number;
  readonly line: number;
  readonly column: number;
  constructor(position: number, line: number, column: number) {
    this.position = position;
    this.line = line;
    this.column = column;
  }
}

export class Range {
  readonly start: Location
  readonly end: Location
  constructor(start: Location, end: Location) {
    this.start = start;
    this.end = end;
  }
}