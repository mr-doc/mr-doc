'use strict';
const _ = require('lodash');
// Set default options
let defaults = {
  parser: { language: 'javascript', engine: 'espree', version: '6' },
  compiler: {
    file: {
      name: 'files',
      format: 'json'
    },
    template: {
      path: null,
      engine: 'jade'
    }
  },
  project: { name: '#', homepage: '#', repository: '#' },
  theme: { name: 'mr-doc-theme-default', path: null }
};

/** @class Option - A class that represents an option. */
class Option {
  /**
   * Create an options util.
   * @param  {Object} options - The options for Mr. Doc.
   */
  constructor (options) {
    this._options = options || {};
  }
  /**
   * Get the options.
   * @return {Object} - An object with helper methods.
   * @example
   * // Get the options;
   * let options = (new Option(myoptions)).options();
   *
   * // Get the options for parser
   * let parserOp = options.parser();
   *
   * // Get the options for compiler
   * let compilerOp = options.compiler();
   *
   * // Get the options for theme
   * let themeOp = options.theme();
   *
   * // Get the options for project
   * let projectOp = options.project();
   */
  options () {
    return {
      parser: () => Option.parser(this._options.parser),
      compiler: () => Option.compiler(this._options.compiler),
      theme: () => Option.theme(this._options.theme),
      project: () => Option.project(this._options.project)
    };
  }
  /**
   * Get the parser options.
   * @static
   * @param  {Object} options - The options for the parser.
   * @return {Object}         - The extended options for the parser.
   */
  static parser (options) {
    return _.merge(defaults.parser, options || {})
  }
  /**
   * Get the compiler options.
   * @static
   * @param  {Object} options - The options for the compiler.
   * @return {Object}         - The extended options for the compiler.
   */
  static compiler (options) {
    return _.merge(defaults.compiler, options || {})
  }
  /**
   * Get the theme options.
   * @static
   * @param  {Object} options - The options for the theme.
   * @return {Object}         - The extended options for the theme.
   */
  static theme (options) {
    return _.merge(defaults.theme, options || {})
  }
  /**
   * Get the project options.
   * @static
   * @param  {Object} options - The options for the project.
   * @return {Object}         - The extended options for the project.
   */
  static project (options) {
    return _.merge(defaults.project, options || {})
  }
}

module.exports = Option;
