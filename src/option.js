/*! global __dirname, process */

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

      if (options.title) {
        this.options.title = options.title;
      }

      if (options.extension) {
        this.options.extension = options.extension;
      }

      if (options.template) {
        this.options.template.path = options.template;
      }

      if (!options.source) {
        console.error(new Error('Doxx [error]: You must define a source.'));
        return;
      } else this.options.source = options.source;

      if (options.target) {
        this.options.target = _path2['default'].resolve(process.cwd(), options.target) || process.cwd();
      }
      if (options.ignore) {
        this.options.blacklist = options.ignore.trim().replace(' ', '').split(',');
      }

      if (options.readme) {
        this.options.readme = options.readme;
      }

      if (options.theme) {
        if (_lodash2['default'].isString(options.theme) && !_lodash2['default'].isEmpty(options.theme)) {
          this.options.theme = options.theme.indexOf('doxx-theme-') > -1 ? options.theme : 'doxx-theme-' + options.theme;
        } else this.options.theme = 'doxx-theme-default';
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
        'title': undefined,
        // The folder which should get parsed
        'source': '',
        // The folder which will contain the results.
        'target': '',
        // The target files extension.
        'extension': 'html',
        // The comma seperated list of directories to ignore. (alias for ignore)
        'blacklist': ['test', 'public', 'static', 'view', 'views', 'template', 'templates'],
        // The markdown file to use on the main page of the documentations.
        // Checks the current directory for a package.json or README.md by default
        'readme': '',
        'package': undefined,
        'template': {
          'path': undefined
        },
        'theme': 'doxx-theme-default'
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