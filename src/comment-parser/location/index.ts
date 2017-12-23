interface Location {
  position: number;
  line: number;
  column: number;
}

export default Location;

export function location(position: number, line: number, column) {
  return { position, line, column };
}

export class Range {
  readonly start: Location
  readonly end: Location
  constructor(start: Location, end?: Location) {
    this.start = start;
    this.end = end;
  }
}