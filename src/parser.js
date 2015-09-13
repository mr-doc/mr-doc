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
      var _this = this;

      var _options = this.options;
      var source = _options.source;
      var extension = _options.extension;
      var blacklist = _options.blacklist;

      if (_lodash2['default'].isArray(source)) {
        this.files = source.map(function (doc) {
          var targetName = doc.name + '.' + extension;
          if (!doc.targetName) doc.targetName = targetName;
          doc.symbols = _symbol2['default'].structure(doc.dox, doc.targetName);
          return doc;
        });
      } else {
        source = _path2['default'].resolve(process.cwd(), source);
        this.files = _dir2['default'].collectFiles(source, {
          ignore: blacklist
        });
        this.files = this.files.map(function (file) {
          var dox = _this.parse(_path2['default'].join(source, file));
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
     * Parses the source using dox.
     * @param {string} filepath The path to the source 
     * @return {object} Returns a JSON representation of the tags as an array
     * @example
     * {
     *	tags:[]
     *	description:{
     *	full:""
     *	summary:""
     *	body:""
     * 	}
     *	ignore:false
     * 	isPrivate:false
     * 	ctx:{
     *	  type:"declaration"
     * 	  name:""
     * 		value:[]
     *		string:""
     *	}
     * }
     */
  }, {
    key: 'parse',
    value: function parse(filepath) {
      var json = null;
      try {
        json = _dox2['default'].parseComments(_fsExtra2['default'].readFileSync(filepath).toString(), {
          raw: false
        });
      } catch (e) {
        console.error('Doxx [error]:', e);
        return [];
      }

      return json.filter(this.shouldPass).map(_symbol2['default'].map);
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

exports['default'] = function (options) {
  return new Parser(options);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/parser.js.map