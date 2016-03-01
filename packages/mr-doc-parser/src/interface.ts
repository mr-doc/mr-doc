/**
 *  IParser
 *  Defines the parser
 */
import Option = require('./option');
interface IParser {
  version: string;
  parser?: string;
  parse(file:Option.File): Object;
}

export = IParser;
