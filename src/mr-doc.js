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

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

/**
 * The main class that creates beautiful documentations.
 * @class Doxx
 * @extend Compiler
 */

var Doxx = (function (_Compiler) {
  _inherits(Doxx, _Compiler);

  // Initialize the compiler
  // and pass the parser.

  function Doxx(options) {
    _classCallCheck(this, Doxx);

    _get(Object.getPrototypeOf(Doxx.prototype), 'constructor', this).call(this, new _parser2['default'](options));
    // Set the locals stack
    this.locals = [];
  }

  /**
   * Generates the documentations.
   */

  _createClass(Doxx, [{
    key: 'generate',
    value: function generate() {
      var _this = this;

      // Compute all symboles
      var allSymbols = this.files.reduce(function (m, a) {
        m = m.concat(a.symbols || []);
        return m;
      }, []);

      var pkg;
      // Get package.json
      try {
        pkg = require(process.cwd() + '/package');
      } catch (err) {}

      var readme = pkg && pkg.readme,
          readMeFile = _path2['default'].resolve(process.cwd(), this.options.readme || pkg && pkg.readmeFileName || 'README.md');

      if (!readme && _fs2['default'].existsSync(readMeFile)) {
        readme = _fs2['default'].readFileSync(readMeFile).toString();
      } else {
        console.warn(new Error('Doxx [warn]: No README.md file found at ' + readMeFile));
      }

      if (!readme) {
        console.warn(new Error('Doxx [warn]: Empty README.md ' + readMeFile));
        readme = '';
      }

      var md = new _markdownIt2['default']();
      md = md.render.bind(md);

      // Get readme data
      this.files.unshift({
        name: 'Main',
        targetName: 'index.html',
        readme: md(readme),
        dox: [],
        symbols: []
      });

      // Set title
      var title = pkg && pkg.name ? pkg.name : this.options.title;

      // Set description
      var description = pkg && pkg.description ? pkg.description : '';

      // Set URLs
      var url = {
        github: pkg && pkg.homepage ? pkg.homepage.indexOf('github') > -1 ? pkg.homepage : false : false,
        npm: pkg && pkg.name ? 'https://npmjs.com/package/' + pkg.name : false,
        homepage: pkg && pkg.homepage ? pkg.homepage.indexOf('github') === -1 ? pkg.homepage : false : false
      };

      // Make sure the folder structure in target mirrors source
      var folders = [];

      this.files.forEach(function (file) {
        var folder = file.targetName.substr(0, file.targetName.lastIndexOf(_path2['default'].sep));

        if (folder !== '' && folders.indexOf(folder) === -1) {
          folders.push(folder);
          _mkdirp2['default'].sync(_this.options.target + '/' + folder);
        }
      });

      // Set each files relName in relation
      // to where this file is in the directory tree
      this.files.forEach(function (file) {
        file.targets = _this.getTargets(file);
      });

      this.files.forEach(function (file) {
        // Set locals
        _this.locals.push(_lodash2['default'].assign({}, file, {
          project: {
            title: title, description: description, url: url
          },
          allSymbols: allSymbols,
          files: _this.files,
          current: {
            name: file.name
          },
          file: {
            targets: file.targets
          }
        }));
      });

      // Install theme
      new _theme2['default'](this.options).install().then(function (result) {
        var isCached = result.isCached;
        var theme = result.theme;

        if (theme) {
          console.info('Doxx [info]: Installed theme: ' + theme + (isCached ? ' from cache.' : ''));
        }
        _lodash2['default'].forEach(_this.files, function (file, index) {
          // Set template
          _this.setTemplate(result.template);
          // Compile the template
          var compiled = _this.compile(_this.locals[index]);
          // Write files
          (0, _mkdirp2['default'])(_this.options.target, function (error) {
            if (error) return;else _fs2['default'].writeFileSync(_path2['default'].join(_this.options.target, file.targetName), compiled);
          });
        });
      }, console.error);
    }

    /** 
     * Return the targets for the specified file
     * @private
     * @param  {Object} file The file to generate
     * @return {Object}      The iterator
     */
  }, {
    key: 'getTargets',
    value: function getTargets(file) {
      return _lodash2['default'].map(this.files, function (f) {

        // Count how deep the current file is in relation to base
        var count = file.name.split('/');
        count = count === null ? 0 : count.length - 1;

        // relName is equal to targetName at the base dir
        f.relative = {
          name: f.targetName,
          path: ''
        };
        // For each directory in depth of current file
        // add a ../ to the relative filename of this link
        while (count > 0) {
          f.relative.name = '../' + f.relative.name;
          f.relative.path += '../';
          count--;
        }
        // Set the target for each folder
        // to support nested directories
        // and allow asset files to access the dir
        return {
          file: {
            name: f.name
          },
          target: {
            name: f.targetName
          },
          relative: f.relative
        };
      });
    }
  }]);

  return Doxx;
})(_compiler2['default']);

exports['default'] = function (options) {
  return new Doxx(options);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/doxx.js.map