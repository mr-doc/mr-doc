'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _symbol = require('./symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dir = require('./dir');

var _dir2 = _interopRequireDefault(_dir);

var _dox = require('dox');

var _dox2 = _interopRequireDefault(_dox);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

require('source-map-support/register');

/**
 * The class that parses the dox tags.
 * @class Parser
 */

var Parser = (function () {
  function Parser(options) {
    _classCallCheck(this, Parser);

    if (options) {
      this.options = options;
      this.start();
    }
  }

  /**
   * Starts the parser.
   */

  _createClass(Parser, [{
    key: 'start',
    value: function start() {
      var _options = this.options;
      var source = _options.source;
      var extension = _options.extension;
      var blacklist = _options.blacklist;

      // Parse the files
      this.files = Parser.parse(source, extension, blacklist);
    }

    /**
     * Parses the source
     * @param  {String|Array} source    The source(s) to parse
     * @param  {String} extension The file extension
     * @param  {Array} ignore    The files to ignore
     * @return {Array}           The parsed files
     */
  }], [{
    key: 'parse',
    value: function parse(source, extension, ignore) {
      if (_lodash2['default'].isArray(source)) {
        return source.map(function (doc) {
          var targetName = doc.name + '.' + extension;
          if (!doc.targetName) doc.targetName = targetName;
          doc.symbols = _symbol2['default'].structure(doc.dox, doc.targetName);
          return doc;
        });
      } else {
        source = _path2['default'].resolve(process.cwd(), source);
        var files = _dir2['default'].collectFiles(source, {
          ignore: ignore
        });
        return files.map(function (file) {
          var dox = Parser.parseComments(_path2['default'].join(source, file));
          var targetName = file + '.' + extension;
          return {
            name: file.replace(/\\/g, '/'),
            targetName: targetName.replace(/\\/g, '/'),
            dox: dox,
            symbols: _symbol2['default'].structure(dox, targetName)
          };
        });
      }
    }

    /**
     * Parses the source's comments using dox.
     * @param {string} filepath The path to the source 
     * @return {object} Returns a JSON representation of the tags as an array
     * @jsFiddle https://jsfiddle.net/iwatakeshi/8hc50sbc/embedded/
     */
  }, {
    key: 'parseComments',
    value: function parseComments(filepath) {
      var json = null;
      try {
        json = _dox2['default'].parseComments(_fsExtra2['default'].readFileSync(filepath).toString(), {
          raw: false
        });
      } catch (error) {
        console.error('Doxx [error]:', error);
        return [];
      }

      return json.filter(Parser.shouldPass).map(_symbol2['default'].map);
    }

    /**
     * Tests if a symbol should be ignored or not.
     * @param  {Object} symbol symbol to check against
     * @return {Boolean} true if the symbol is not private nor must be ignored
     */
  }, {
    key: 'shouldPass',
    value: function shouldPass(symbol) {
      if (symbol.isPrivate) {
        return false;
      }
      if (symbol.ignore) {
        return false;
      }

      // Only for coffeescript
      return symbol.tags.filter(function (tag) {
        return tag.type === 'private' || tag.type === 'ignore';
      }).length === 0;
    }
  }]);

  return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];
//# sourceMappingURL=source maps/parser.js.map