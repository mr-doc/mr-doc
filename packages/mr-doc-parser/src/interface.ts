/**
 *  IParser
 *  Defines the parser
 */
import Option = require('./option');
interface IParser {
  version?: string;
  engine?: string;
  parse(file:Option.File): Object;
}

export = IParser;
