'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _elegantSpinner = require('elegant-spinner');

var _elegantSpinner2 = _interopRequireDefault(_elegantSpinner);

var _logUpdate = require('log-update');

var _logUpdate2 = _interopRequireDefault(_logUpdate);

require('source-map-support/register');

var frame = (0, _elegantSpinner2['default'])();

/**
 * The class that locates themes
 * @class  Theme
 */

var Theme = (function () {
  function Theme(options) {
    _classCallCheck(this, Theme);

    var resolvedTheme = this.locateTheme(options.theme);

    this.options = {
      theme: {
        name: resolvedTheme.theme,
        path: resolvedTheme.path
      },
      target: {
        path: options.target
      }
    };
  }

  /**
   * Find the theme specified
   */

  _createClass(Theme, [{
    key: 'locateTheme',
    value: function locateTheme(theme) {

      var DEFAULT_THEME = 'doxx-theme-default';
      var doxxBasePath = _path2['default'].resolve(__dirname, '..');
      var projectBasePath = process.cwd();
      var doxxBaseModulePath = _path2['default'].join(doxxBasePath, 'node_modules', theme);
      var projectBaseModulePath = _path2['default'].join(projectBasePath, 'node_modules', theme);
      var defaultThemePath = _path2['default'].join(doxxBasePath, 'node_modules', DEFAULT_THEME);

      var exists = _fs2['default'].existsSync(doxxBaseModulePath);
      if (exists) {
        console.log('Located theme [' + theme + ']: ' + doxxBaseModulePath);
        return {
          theme: theme,
          path: doxxBaseModulePath
        };
      }

      exists = _fs2['default'].existsSync(projectBaseModulePath);
      if (exists) {
        console.log('Located theme [' + theme + ']: ' + projectBaseModulePath);
        return {
          theme: theme,
          path: projectBaseModulePath
        };
      }

      console.log('WARNING: theme "' + theme + '" not found, reverting to default.');

      return {
        theme: DEFAULT_THEME,
        path: defaultThemePath
      };
    }

    /** 
     * Copies the theme specified (reverting to default)
     * over to the target directory.
     */
  }, {
    key: 'install',

    /** 
     * Copies the specific theme assets over to the target directory
     * and returns the     
     */
    value: function install() {
      return Theme.configure(this.options);
    }
  }], [{
    key: 'configure',
    value: function configure(options) {

      var final = _when2['default'].defer();

      // Sources
      var config = {
        src: options.theme.path,
        dest: options.target.path,
        paths: {
          css: {
            src: 'assets/css',
            dest: 'css'
          },
          js: {
            src: 'assets/js',
            dest: 'js'
          }
        }
      };

      /** 
       * The commands to install the theme
       * @type {object}
       */
      var commands = {
        showProgress: function showProgress(command) {
          var count = 0;
          while (count < 200) {
            (0, _logUpdate2['default'])('Doxx [info]: ' + frame() + ' ' + command);
            count++;
          }
        },
        /**
         * Create necessary paths to destination folder
         */
        copyAssets: function copyAssets() {
          var types = _lodash2['default'].keys(config.paths);
          var m = _when2['default'].map(types, function (type) {
            var d = _when2['default'].defer();
            var src = _path2['default'].join(config.src, config.paths[type].src);
            var dest = _path2['default'].join(config.dest, config.paths[type].dest);
            _fsExtra2['default'].copy(src, dest, {
              clobber: true
            }, function (error) {
              if (error) d.reject(error);else {
                d.resolve();
              }
            });
            return d.promise;
          });
          return m;
        },
        /** 
         * Reads the template from the source and strigifies it.
         */
        stringifyTemplate: function stringifyTemplate() {
          var d = _when2['default'].defer();
          var file = _path2['default'].join(config.src, 'template/index.jade');
          _fsExtra2['default'].readFile(file, function (error, data) {
            if (error) d.reject(error);else d.resolve({
              template: data.toString()
            });
          });
          return d.promise;
        }
      };

      // Check if the template is enabled (legacy)
      if (options.template && options.template.path) {
        final.resolve({
          template: _fsExtra2['default'].readFileSync(_path2['default'].resolve(__dirname, options.template.path)).toString()
        });
      } else {
        (function () {
          return commands.copyAssets().then(commands.stringifyTemplate).then(final.resolve);
        })(commands.showProgress);
      }
      return final.promise;
    }
  }]);

  return Theme;
})();

exports['default'] = Theme;
module.exports = exports['default'];
//# sourceMappingURL=source maps/theme.js.map