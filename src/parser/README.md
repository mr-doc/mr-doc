# Parser

This directory contains the source file for the parser. There are a few things to cover
in order to understand how the parser works.

## Specification

The parser in `index.js`, uses the Factory Pattern to create different parsers for the specified language.

There are various languages that the parser hopes to support but the available ones are the following:
* JavaScript
  * Acorn
  * Babylon (default)
  * Espree

The parser should only produce a an array with the results attached and ready to be passed down to the compiler.

### Interface

Initially the interface was written in TypeScript, but to keep things simple for those who are not familiar with TypeScript and would like to contribute, I decided to stick with ES6 (without Babel).

The following would be interface that must be implemented (unless specified):

```javascript
class IParser {
  /**
   * IParser
   * @param  {Object} options - The options for the compiler provided by mr-doc-utils/options
   */
  constructor(options) {
    this.options = options;
  }
  /**
   * Parses the sources' comments into the desired output.
   * @param  {Array<Object>} results - The files to parse.
   * @return {Array<Object>} - The parsed comments.
   */
  parse(sources) {
    // ...
  }
}
```
