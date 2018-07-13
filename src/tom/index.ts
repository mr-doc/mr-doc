import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TomLexer } from './TomLexer';
import {TomParser } from './TomParser';

export default (input: string) => {
  // Get the input stream
  return new TomParser(new CommonTokenStream(
      new TomLexer(
        new ANTLRInputStream(input)
      )
    )
  ).documentation();
}