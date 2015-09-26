'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('source-map-support/register');

/**  
 * The class that sets the options.  
 * @class Option  
 */

var Option = (function () {
  function Option(options) {
    _classCallCheck(this, Option);

    this.options = this.getDefaults();
    if (options) this.setOptions(options);
  }

  /**      
   * Sets the options      
   */

  _createClass(Option, [{
    key: 'setOptions',
    value: function setOptions(options) {
      var _this = this;

      if (options.name) {
        this.options.name =
        // Because of a known bug: https://github.com/tj/commander.js/issues/283
        // we'll have to check if it's a function
        _lodash2['default'].isFunction(options.name) ? options.name() : options.name;
      }
      if (options.extension) {
        this.options.extension = options.extension;
      }

      if (options.kit) {
        if (_lodash2['default'].isString(options.kit)) {
          if (options.kit.toLowerCase() === 'yes') this.options.kit = true;else if (options.kit.toLowerCase() === 'no') this.options.kit = false;
        } else this.options.kit = true;
      }

      if (options.template) {
        this.options.template.path = options.template;
      }

      // Option - template helpers
      this.options.template.isEnabled = function () {
        return !!options.template;
      };

      this.options.template.isKit = function () {
        return _this.options.kit;
      };

      if (!options.source) {
        console.error(new Error('Mr. Doc [error]: You must define a source.'));
        process.exit(1);
      } else this.options.source = options.source;

      if (options.output) {
        this.options.output = _path2['default'].resolve(process.cwd(), options.output) || process.cwd();
      }

      if (options.ignore) {
        this.options.blacklist = options.ignore.trim().replace(' ', '').split(',');
      }
      if (options.readme) {
        this.options.readme = options.readme;
      }
      if (options.theme) {
        if (_lodash2['default'].isString(options.theme) && !_lodash2['default'].isEmpty(options.theme)) {
          this.options.theme.name = options.theme.indexOf('doxx-theme-') > -1 ? options.theme : 'mr-doc-theme-' + options.theme;
        }
      }
    }

    /**      
     * Returns the current options.      
     * @return {object} The current options      
     */
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }

    /**      
     * Returns the default options.      
     * @return {object} The default options      
     */
  }, {
    key: 'getDefaults',
    value: function getDefaults() {
      return {
        // The title for the page produced      
        'name': undefined,
        // The folder which should get parsed      
        'source': 'lib/',
        // The folder which will contain the results.      
        'output': 'docs/',
        // The output files extension.      
        'extension': 'html',
        // The comma seperated list of directories to ignore. (alias for ignore)      
        'blacklist': ['test', 'public', 'static', 'view', 'views', 'template', 'templates'],
        // The markdown file to use on the main page of the documentations.       
        // Checks the current directory for a package.json or README.md by default     
        'readme': '',
        'package': (function () {
          var pkg = undefined;
          try {
            pkg = require(_path2['default'].join(process.cwd(), '/package.json'));
          } catch (error) {}
          return pkg;
        })(),
        'template': {
          'path': undefined
        },
        'theme': {
          'name': 'mr-doc-theme-default'
        },
        'kit': false
      };
    }
  }]);

  return Option;
})();

exports['default'] = function (options) {
  return new Option(options);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/option.js.map