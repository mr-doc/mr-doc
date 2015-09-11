'use strict';

// import debug from 'debug';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('source-map-support/register');

// Hackily get DEBUG
var env = process.env.DEBUG || '';
console.log(env);
/**
 * Debug is a debug wrapper for Doxx
 */

var Debug = (function () {
  function Debug() {
    var _this = this;

    _classCallCheck(this, Debug);

    this.enabled = {
      debug: false,
      warn: false,
      error: false,
      info: false,
      verbose: false
    };

    _lodash2['default'].forEach(env.split(','), function (level) {
      level = level.replace('doxx:', '').toLowerCase();
      console.log(level);
      switch (level) {
        case 'debug':
          _this.enabled.debug = true;
          break;
        case 'warn':
          _this.enabled.warn = true;
          break;
        case 'error':
          _this.enabled.error = true;
          break;
        case 'info':
          _this.enabled.info = true;
          break;
        case 'verbose':
          _this.enabled.verbose = true;
          break;
        case '*':
          _lodash2['default'].forEach(_this.enabled, function (v, k) {
            _this.enabled[k] = true;
          });
          break;
        default:
          break;
      }
    });
  }

  /**
   * Debugs with a level.
   * @return {Debug}           The Debug instance.
   * @example
   * debug('doxx').warn(...)
   * debug('parser').debug();
   */

  _createClass(Debug, [{
    key: 'debug',
    value: function debug() {
      if (this.enabled.debug) {
        _chalk2['default'].blue.apply(null, arguments);
        this.log.apply(_chalk2['default'].blue.apply(null, arguments));
      }
    }
  }, {
    key: 'warn',
    value: function warn() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this.enabled.warn) {
        _lodash2['default'].forEach(args, function (item, i) {
          return args[i] = _chalk2['default'].yellow(item);
        });
        console.log(args);
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'error',
    value: function error() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (this.enabled.error) {
        _lodash2['default'].forEach(args, function (item, i) {
          return args[i] = _chalk2['default'].red(item);
        });
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'info',
    value: function info() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (this.enabled.info) {
        _lodash2['default'].forEach(args, function (item, i) {
          return args[i] = _chalk2['default'].green(item);
        });
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'verbose',
    value: function verbose() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      if (this.enabled.verbose) {
        _lodash2['default'].forEach(args, function (item, i) {
          return args[i] = _chalk2['default'].cyan(item);
        });
        this.log.apply(this, args);
      }
    }
  }, {
    key: 'log',
    value: function log() {
      console.log.apply(console, arguments);
    }
  }]);

  return Debug;
})();

exports['default'] = function () {
  return new Debug();
};

module.exports = exports['default'];
//# sourceMappingURL=../source maps/utils/debug.js.map