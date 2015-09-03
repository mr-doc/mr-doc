/*! global process */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

/**
 * The main class that creates beautiful documents.
 * @class Doxx
 * @extends Compiler
 */

var Doxx = (function (_Compiler) {
  _inherits(Doxx, _Compiler);

  // Initialize the compiler
  // and pass the parser.

  function Doxx(options) {
    _classCallCheck(this, Doxx);

    _get(Object.getPrototypeOf(Doxx.prototype), 'constructor', this).call(this, (0, _parser2['default'])(options));
  }

  /**
   * Generates the documentations.
   */

  _createClass(Doxx, [{
    key: 'generate',
    value: function generate() {
      var _this = this;

      //Compute all symboles
      var allSymbols = this.files.reduce(function (m, a) {
        m = m.concat(a.symbols || []);
        return m;
      }, []);

      var pkg;
      //Get package.json
      try {
        pkg = require(process.cwd() + '/package');
      } catch (err) {}

      var readme = pkg && pkg.readme,
          readMeFile = _path2['default'].resolve(process.cwd(), this.options.readme || pkg && pkg.readmeFileName || 'README.md');

      if (!readme && _fs2['default'].existsSync(readMeFile)) {
        readme = _fs2['default'].readFileSync(readMeFile).toString();
      } else {
        console.warn(new Error('No README.md file found at ' + readMeFile));
      }

      readme = readme || pkg && pkg.description;

      if (!readme) {
        console.warn(new Error('Empty README.md ' + readMeFile));
        readme = '';
      }

      //Enable line-breaks ala github markdown
      _marked2['default'].setOptions({
        breaks: true,
        smartLists: true
      });

      //Get readme data
      this.files.unshift({
        name: 'Main',
        targetName: 'index.html',
        readme: (0, _marked2['default'])(readme),
        dox: [],
        symbols: []
      });

      //Make sure the folder structure in target mirrors source
      var folders = [];

      this.files.forEach(function (file) {
        var folder = file.targetName.substr(0, file.targetName.lastIndexOf(_path2['default'].sep));

        if (folder !== '' && folders.indexOf(folder) === -1) {
          folders.push(folder);
          _mkdirp2['default'].sync(_this.options.target + '/' + folder);
        }
      });

      //Render and write each file
      this.files.forEach(function (file) {

        // Set each files relName in relation
        // to where this file is in the directory tree
        _this.files.forEach(function (f) {

          // Count how deep the current file is in relation to base
          var count = file.name.split('/');
          count = count === null ? 0 : count.length - 1;

          // relName is equal to targetName at the base dir
          f.relName = f.targetName;

          // For each directory in depth of current file
          // add a ../ to the relative filename of this link
          while (count > 0) {
            f.relName = '../' + f.relName;
            count--;
          }
        });

        var title = _this.options.title;

        if (!title) {
          title = pkg && pkg.name || 'Title Not Set';
        }

        var compileOptions = _lodash2['default'].extend({}, file, {
          title: title,
          allSymbols: allSymbols,
          files: _this.files,
          currentName: file.name
        });

        var compiled = _this.compile(compileOptions);
        (0, _mkdirp2['default'])(_this.options.target, function (err) {
          if (err) return;else _fs2['default'].writeFileSync(_path2['default'].join(_this.options.target, file.targetName), compiled);
        });
      });
    }
  }]);

  return Doxx;
})(_compiler2['default']);

exports['default'] = function (options) {
  'use strict';
  return new Doxx(options);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/doxx.js.map