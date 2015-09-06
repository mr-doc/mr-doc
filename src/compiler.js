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

/**
 * The class that compiles the Jade template.
 * @class Compiler
 */

var Compiler = (function () {
  function Compiler(parser) {
    _classCallCheck(this, Compiler);

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
   * @jsFiddle http://jsfiddle.net/4L6Br/embedded/
   * @return {String} rendered content
   */

  _createClass(Compiler, [{
    key: 'compile',
    value: function compile(locals) {
      // Get the path (alias for filename)
      var path = this.options.template.path;

      // Return the compiled template
      return this.jade.compile(this.template, {
        pretty: true,
        filename: path
      })(locals);
    }

    /**
     * Sets up the compiler by initializing jade,
     * the template, and the filters for jade.
     */
  }, {
    key: 'setup',
    value: function setup() {
      /**
       * Jade used to compile the documentation
       * @type {Jade} Jade compiler
       */
      this.jade = _jade2['default'];
      /**
       * Template used to produce the documentation
       * @type {String} template string
       */
      this.template = _fs2['default'].readFileSync(_path2['default'].resolve(__dirname, this.options.template.path)).toString();
      /**
       * Jade support for filter `:code`
       * @param  {String} block
       * @return {String}
       */
      this.jade.filters.code = function (block) {
        return block.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/#/g, '&#35;').replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
      };
    }
  }]);

  return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];
//# sourceMappingURL=source maps/compiler.js.map