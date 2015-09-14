'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('source-map-support/register');

/**
 * The class that compiles the Jade template.
 * @class Compiler
 */

var Compiler = (function () {
  function Compiler(parser) {
    _classCallCheck(this, Compiler);

    /**
     * Jade used to compile the documentation
     * @type {Jade} Jade compiler
     */
    this.jade = _jade2['default'];

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

  _createClass(Compiler, [{
    key: 'compile',
    value: function compile(locals, template) {
      // Get the path (alias for filename)
      var path = this.options.template.path;

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
  }, {
    key: 'compileWithPath',
    value: function compileWithPath(path, locals, template) {
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
  }, {
    key: 'setTemplate',
    value: function setTemplate(template) {
      // Template used to produce the documentation
      this.template = template;
      return this;
    }

    /** 
     * Sets the template
     * @param {String} path The path to the template
     * @returns {Compiler} The compiler
     */
  }, {
    key: 'setTemplateWithPath',
    value: function setTemplateWithPath(path) {
      // Template used to produce the documentation
      this.template = _fs2['default'].readFileSync(_path2['default'].resolve(__dirname, path || this.options.template.path)).toString();
      return this;
    }

    /** 
     * Sets custom filter(s)
     * @param {Array|Object} filters The custom filter(s) to set
     * @jsFiddle https://jsfiddle.net/iwatakeshi/sbr206cf/embedded/
     * @returns {Compiler} The compiler
     */
  }, {
    key: 'setFilters',
    value: function setFilters(filters) {
      var _this = this;

      // Check if the fitlers is an object
      if (_lodash2['default'].isPlainObject(filters)) {
        this.jade.filters[filters.name] = filters.filter;
      }
      // Check if the filters is an array
      if (_lodash2['default'].isArray(filters)) {
        _lodash2['default'].forEach(filters, function (filter) {
          _this.jade.filters[filter.name] = filter.filter;
        });
      }
      return this;
    }

    /**
     * Sets the code filter for `:code`
     * @param {Function} filter The code filter to set
     * @returns {Compiler} The compiler
     */
  }, {
    key: 'setCodeFilter',
    value: function setCodeFilter(filter) {
      /**
       * Jade support for filter `:code`
       * @param  {String} block
       * @return {String}
       */
      this.jade.filters.code = filter || function (block) {
        return block.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/#/g, '&#35;').replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
      };

      return this;
    }
  }]);

  return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];
//# sourceMappingURL=source maps/compiler.js.map