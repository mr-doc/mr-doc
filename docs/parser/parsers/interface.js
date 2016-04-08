'use strict';
class IParser {
  /**
   * @constructor
   * @param  {Object} options - The options for the compiler provided by mr-doc-utils/options
   */
  constructor(options) {
    this.options = options.parser;
  }
  /**
   * Parses the sources' comments into the desired output.
   * @param  {Array<Object>} results - The files to parse.
   * @return {Array<Object>} - The parsed comments.
   */
  /* eslint-disable no-unused-vars */
  parse(sources) {
    // ...
  }
  /* eslint-enable no-unused-vars */
}

module.exports = IParser;
