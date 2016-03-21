/**
 *  IParser
 *  Defines the parser
 */
import Option = require('./option');
interface IParser {
  options: Option.Parser;
  parse(file: Option.File): Object;
}

export = IParser;
