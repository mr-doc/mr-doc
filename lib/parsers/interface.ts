/**
 *  IParser
 *  Defines the parser
 */

interface IParser {
  version: string;
  parser?: string;
  parse(): Object;
}

export = IParser;