'use strict';

import jade from 'jade';
import File from 'fs';
import Path from 'path';
import _ from 'lodash';
import 'source-map-support/register';
/**
 * The class that compiles the Jade template.
 * @class Compiler
 */
class Compiler {
  constructor(parser) {

      /**
       * Jade used to compile the documentation
       * @type {Jade} Jade compiler
       */
      this.jade = jade;

      // Set the options
      this.options = parser ? parser.options : {};
      // Sets the files from the parser
      this.files = parser ? parser.files : [];
      // Set up the compiler's code filter
      this.setCodeFilter();
    }
    /** 
     * Compiles the docs
     * @param  {Object} locals   The local variable object
     * @param  {String} template The template to compile
     * @jsFiddle https://jsfiddle.net/iwatakeshi/pmp9ygwL/embedded/
     * @return {String}          The compiled content
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
     * Compiles the docs with a specified path
     * @param  {Object} path     The path to compile
     * @param  {Object} locals   The local variable object
     * @param  {String} template The template to compile
     * @return {String}          The compiled content
     */
  compileWithPath(path, locals, template) {
      // Return the compiled template
      return this.jade.compile(template || this.template, {
        pretty: true,
        // Alias for filename
        filename: path
      })(locals);
    }
    /** 
     * Sets the template
     * @param {String} template The template
     * @returns {Compiler} The compiler
     */
  setTemplate(template) {
    // Template used to produce the documentation
    this.template = template;
    return this;
  }

  /** 
   * Sets the template
   * @param {String} path The path to the template
   * @returns {Compiler} The compiler
   */
  setTemplateWithPath(path) {
    // Template used to produce the documentation
    this.template = File.readFileSync(
      Path.resolve(__dirname, path ||
        this.options.template.path)).toString();
    return this;
  }

  /** 
   * Sets custom filter(s)
   * @param {Array|Object} filters The custom filter(s) to set
   * @jsFiddle https://jsfiddle.net/iwatakeshi/sbr206cf/embedded/
   * @returns {Compiler} The compiler
   */
  setFilters(filters) {
    // Check if the fitlers is an object
    if (_.isPlainObject(filters)) {
      this.jade.filters[filters.name] = filters.filter;
    }
    // Check if the filters is an array
    if (_.isArray(filters)) {
      _.forEach(filters, (filter) => {
        this.jade.filters[filter.name] = filter.filter;
      });
    }
    return this;
  }

  /**
   * Sets the code filter for `:code`
   * @param {Function} filter The code filter to set
   * @returns {Compiler} The compiler
   */
  setCodeFilter(filter) {
    /**
     * Jade support for filter `:code`
     * @param  {String} block
     * @return {String}
     */
    this.jade.filters.code = filter || function (block) {
      return block.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/#/g, '&#35;')
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n');
    };

    return this;
  }
}

export
default Compiler;