'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bower = require('bower');

var _bower2 = _interopRequireDefault(_bower);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

require('source-map-support/register');

var _elegantSpinner = require('elegant-spinner');

var _elegantSpinner2 = _interopRequireDefault(_elegantSpinner);

var _logUpdate = require('log-update');

var _logUpdate2 = _interopRequireDefault(_logUpdate);

var frame = (0, _elegantSpinner2['default'])();
/**
 * The class that installs themes.
 * @class  Theme
 */

var Theme = (function () {
  function Theme(options) {
    _classCallCheck(this, Theme);

    this.bower = _bower2['default'];
    this.options = {
      theme: {
        name: options.theme,
        path: _path2['default'].join(process.cwd(), 'doxx_theme/'),
        target: {
          path: options.target
        }
      },
      template: {
        path: options.template.path,
        isEnabled: function isEnabled() {
          return !!options.template.path;
        }
      }
    };
  }

  /** 
   * Installs the theme and its assets
   * @return {Function} The promise
   */

  _createClass(Theme, [{
    key: 'install',
    value: function install() {
      var _this = this;

      var d = _when2['default'].defer();
      /** 
       * The commands to install the theme
       * @type {object}
       */
      var commands = {
        showProgress: function showProgress(command) {
          var count = 0;
          while (count < 100) {
            (0, _logUpdate2['default'])(frame() + ' ' + command);
            count++;
          }
        },
        /**
         * Create necessary paths to 
         * process the commands
         * @return {Function}       The promise
         */
        preProcess: function preProcess() {
          var d = _when2['default'].defer();

          var theme = _this.options.theme.name;
          // Create short-hands for paths

          // Sources
          var src = {
            theme: {
              path: _this.options.theme.path
            }
          };

          // Destinations
          var dest = {
            theme: {
              path: _this.options.theme.target.path
            }
          };

          // Assets dir
          var assets = {
            path: _path2['default'].join(_path2['default'].join(src.theme.path, 'bower_components/'), theme + '/assets/')
          };

          // Template dir
          var template = {
            path: _path2['default'].join(_path2['default'].join(src.theme.path, 'bower_components/'), theme + '/template/')
          };

          // The css dir within assets dir
          _lodash2['default'].extend(src, {
            css: {
              path: _path2['default'].join(assets.path, 'css/')
            }
          });
          _lodash2['default'].extend(dest, {
            css: {
              path: _path2['default'].join(dest.theme.path, 'css/')
            }
          });

          // The js dir within assets dir
          _lodash2['default'].extend(src, {
            js: {
              path: _path2['default'].join(assets.path, 'js/')
            }
          });
          _lodash2['default'].extend(dest, {
            js: {
              path: _path2['default'].join(dest.theme.path, 'js/')
            }
          });

          // The bower template dir within assets dir
          _lodash2['default'].extend(src, {
            template: template
          });
          _lodash2['default'].extend(dest, {
            template: {
              path: _path2['default'].join(dest.theme.path, 'template/')
            }
          });

          d.resolve({
            theme: theme, src: src, dest: dest
          });
          return d.promise;
        },
        /**
         * Creates a temp dir for bower
         * to install the bower components
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        createTempDir: function createTempDir(result) {
          var d = _when2['default'].defer();

          var src = result.src;

          (0, _mkdirp2['default'])(src.theme.path, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /** 
         * Installs the theme through bower
         * @param  {object} result The result
         * @return {Function}       The promise
         */
        installTheme: function installTheme(result) {
          var d = _when2['default'].defer();

          var theme = result.theme;
          var src = result.src;

          _this.bower.commands.install([theme], {
            save: false
          }, {
            cwd: src.theme.path
          }).on('end', function () {
            d.resolve(result);
          }).on('error', d.reject);
          return d.promise;
        },
        /**
         * Copies the css dir from the assets dir
         * to the target dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyAssetCSS: function copyAssetCSS(result) {
          var d = _when2['default'].defer();

          var src = result.src;
          var dest = result.dest;

          _fsExtra2['default'].copy(src.css.path, dest.css.path, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /**
         * Copies the js dir from the assets dir
         * to the target dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyAssetJS: function copyAssetJS(result) {
          var d = _when2['default'].defer();

          var src = result.src;
          var dest = result.dest;

          _fsExtra2['default'].copy(src.js.path, dest.js.path, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /**
         * Copies the template dir from the assets dir
         * to the target dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyTemplate: function copyTemplate(result) {
          var d = _when2['default'].defer();

          var src = result.src;
          var dest = result.dest;

          _fsExtra2['default'].copy(src.template.path, dest.template.path, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /** 
         * Reads the template and strigifies it.
         * @param  {object} result The result
         * @return {Function}      The promise
         */
        stringifyTemplate: function stringifyTemplate(result) {
          var d = _when2['default'].defer();

          var dest = result.dest;
          var src = result.src;
          var theme = result.theme;

          var file = dest.template.path + 'index.jade';

          _fsExtra2['default'].readFile(file, function (error, data) {
            if (error) d.reject(error);else d.resolve({
              dest: dest, src: src, theme: theme,
              template: data.toString()
            });
          });
          return d.promise;
        },
        /**
         * Removes the template dir from
         * the target dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        deleteTemplateDir: function deleteTemplateDir(result) {
          var d = _when2['default'].defer();

          var dest = result.dest;

          (0, _del2['default'])([dest.template.path]).then(function () {
            d.resolve(result);
          });
          return d.promise;
        },
        /**
         * Removes the temp dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        deleteTempDir: function deleteTempDir(result) {
          var d = _when2['default'].defer();

          var src = result.src;

          (0, _del2['default'])([src.theme.path]).then(function () {
            d.resolve(result);
          });
          return d.promise;
        }
      };

      // Check if the template is enabled (legacy)
      if (this.options.template.isEnabled()) {
        d.resolve({
          template: _fsExtra2['default'].readFileSync(_path2['default'].resolve(__dirname, this.options.template.path)).toString()
        });
      } else {

        (function (notify) {

          // Preprocess the commands
          return commands.preProcess().tap(function () {
            notify('Preparing to install theme');
          })
          // Create a temp dir
          .then(commands.createTempDir).tap(function () {
            return notify('Creating a temp directory \'doxx_theme\'');
          })
          // Install the theme using bower
          .then(commands.installTheme).tap(function () {
            return notify('Installing theme');
          })
          // Copy css dir files
          .then(commands.copyAssetCSS).tap(function () {
            return notify('Copying css directory');
          })
          // Copy the js dir & files
          .then(commands.copyAssetJS).tap(function () {
            return notify('Copying js directory');
          })
          // Copy the template dir & file
          .then(commands.copyTemplate).tap(function () {
            return notify('Copying template directory');
          })
          // Convert the template to a string
          .then(commands.stringifyTemplate).tap(function () {
            return notify('Rendering the template');
          })
          // Delete the template dir
          .then(commands.deleteTemplateDir).tap(function () {
            return notify('Removing the template directory');
          })
          // Delete the temp dir
          .then(commands.deleteTempDir).tap(function () {
            return notify('Removing the temp directory');
          }).then(d.resolve);
        })(commands.showProgress);
      }
      return d.promise;
    }
  }]);

  return Theme;
})();

exports['default'] = function (theme) {
  return new Theme(theme);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/theme.js.map