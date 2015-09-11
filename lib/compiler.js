'use strict';

import jade from 'jade';
import fs from 'fs';
import Path from 'path';
import 'source-map-support/register';
/**
 * The class that compiles the Jade template.
 * @class Compiler
 */
class Compiler {
  constructor(parser) {
      /**
       * Gets the options from the parser.
       * @type {object}
       */
      this.options = parser.options;
      /**
       * Gets the parsed files from the parser
       * @type {Array}
       */
      this.files = parser.files;
      // Set up the compiler
      this.setup();
    }
    /**
     * Compiles the docs.
     * @param  {Object} locals local variable object
     * @param {object} template the template
     * @jsFiddle http://jsfiddle.net/4L6Br/embedded/
     * @return {String} rendered content
     */
  compile(locals, template) {
      // Get the path (alias for filename)
      var {
        path
      } = this.options.template;
      // Return the compiled template
      return this.jade.compile(template || this.template, {
        pretty: true,
        filename: path
      })(locals);
    }
    /** 
     * Sets the template
     * @param {String} path The path to the template
     */
  setTemplate(path) {
    /**
     * Template used to produce the documentation
     * @type {String} template string
     */
    this.template = fs.readFileSync(
      Path.resolve(__dirname, path ||
        this.options.template.path)).toString();
  }

  /**
   * Sets up the compiler by initializing jade,
   * the template, and the filters for jade.
   */
  setup() {
    /**
     * Jade used to compile the documentation
     * @type {Jade} Jade compiler
     */
    this.jade = jade;

    /**
     * Jade support for filter `:code`
     * @param  {String} block
     * @return {String}
     */
    this.jade.filters.code = function (block) {
      return block.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/#/g, '&#35;')
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n');
    };
  }
}

export
default Compiler;