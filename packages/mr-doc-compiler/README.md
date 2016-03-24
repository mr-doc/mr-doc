# Mr. Doc Compiler

This a mono repo for Mr. Doc Compiler. There are a few things to cover
in order to understand how the compiler works.

## Specification

There are three main formats that the compiler will output:
* HTML
* JSON
* Markdown

However, the compiler should not write any files to a path.
It should only produce a string that is ready to be written down.

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
   * @return {String | Object}         The compiled output.
   */
  compile(results) {
    // ...
  }
  /**
   * Compiles the parsed comments into the desired output synchronously.
   * @param  {Array<Object>} results The parsed comments.
   * @return {String | Object}         The compiled output.
   */
  compileSync(results) {
    // ...
  }
}
```
