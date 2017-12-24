import { Token } from '../token/'


export class Exception extends Error {
  private token: Token
  constructor(token: Token, message?: string) {
    super(message);
    Error.captureStackTrace(this, Exception.constructor);
    this.token = token;
    // Object.setPrototypeOf(this, Exception.prototype);
  }
}

export class ParseException extends Exception {
  constructor(token: Token, message?: string) {
    super(token, message);
    this.name = this.constructor.name;
    this.stack = `(line ${token.location.line}, column ${token.location.column})`;
  }
}