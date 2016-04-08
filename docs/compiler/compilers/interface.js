'use strict';
class ICompiler {
  /**
   * @constructor
   * @param  {Object} options - The options for the compiler provided by mr-doc-utils/options
   */
  constructor(options) {
    this.options = options;
  }
  /**
   * Compile the comments into the desired output.
   * @param  {Array<Object>} results - The files to compile.
   * @return {*} - The compiled files.
   */
  /* eslint-disable no-unused-vars */
  compile(comments) {
    // ...
  }
  /* eslint-enable no-unused-vars */
}

module.exports = ICompiler;
