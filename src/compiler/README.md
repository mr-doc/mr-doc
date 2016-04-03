# Compiler

This directory contains the source file for compiler. There are a few things to cover
in order to understand how the compiler works.

## Specification

The compiler in `index.js`, uses the Factory Pattern to create different compilers for the specified format.

There are three main formats that the compiler will output:
* HTML (including themes)
* JSON
* Markdown

However, the compiler should not write any files to a path.
It should only produce a string that is ready to be piped down the stream.

### Interface

Initially the interface was written in TypeScript, but to keep things simple for those who are not familiar with TypeScript and would like to contribute, I decided to stick with ES6 (without Babel).

The following would be interface that must be implemented (unless specified):

```javascript
class ICompiler {
  /**
   * ICompiler
   * @param  {Object} options - The options for the compiler provided by mr-doc-utils/options
   */
  constructor(options) {
    this.options = options;
  }
  /**
   * Compiles the parsed comments into the desired output.
   * @param  {Array<Object>} results The parsed comments.
   * @return {*}         The compiled output.
   */
  compile(results) {
    // ...
  }
}
```
