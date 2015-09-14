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

var _elegantSpinner = require('elegant-spinner');

var _elegantSpinner2 = _interopRequireDefault(_elegantSpinner);

var _logUpdate = require('log-update');

var _logUpdate2 = _interopRequireDefault(_logUpdate);

var _dir = require('./dir');

var _dir2 = _interopRequireDefault(_dir);

require('source-map-support/register');

var frame = (0, _elegantSpinner2['default'])();

/**
 * The class that installs themes.
 * @class  Theme
 */

var Theme = (function () {
  function Theme(options) {
    _classCallCheck(this, Theme);

    // Set hidden path
    var hiddenPath = _path2['default'].join(_dir2['default'].getHomeDir(), '.doxx');

    // Set template options
    this.options = {
      theme: {
        name: options.theme,
        path: hiddenPath
      },
      template: {
        path: options.template.path
      },
      target: {
        path: options.target
      }
    };
  }

  /** 
   * Installs the theme and its assets statically
   * @param {Object} options The options
   * @jsfiddle https://jsfiddle.net/iwatakeshi/k5xsvoez/embedded/
   * @return {Function} The promise
   */

  _createClass(Theme, [{
    key: 'install',

    /** 
     * Installs the theme and its assets
     * @return {Function} The promise
     */
    value: function install() {
      return Theme.staticInstall(this.options);
    }
  }], [{
    key: 'staticInstall',
    value: function staticInstall(options) {
      var final = _when2['default'].defer();
      /*
        Required options:
        
        theme.name    (the name of the theme)
        theme.path    (the path to store the theme)
        target.path   (the path to store the compiled content)
        template.path (the template path) *for test purposes only*
       */

      // Create cache paths and helpers
      var cache = {
        theme: {
          path: options.theme.path
        },
        bower: {
          path: _path2['default'].join(_path2['default'].join(options.theme.path, 'bower_components/'), options.theme.name + '/')
        }
      };

      _lodash2['default'].extend(cache, {
        exists: function exists() {
          return _dir2['default'].exists(cache.theme.path) && _dir2['default'].exists(cache.bower.path);
        }
      });

      _lodash2['default'].extend(cache.theme, {
        exists: function exists() {
          return _dir2['default'].exists(cache.theme.path);
        }
      });

      _lodash2['default'].extend(cache.bower, {
        exists: function exists() {
          return _dir2['default'].exists(cache.bower.path);
        }
      });

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
         * Create necessary paths to 
         * process the commands
         * @return {Function}       The promise
         */
        preProcess: function preProcess() {
          var d = _when2['default'].defer();

          var theme = options.theme.name;
          // Create short-hands for paths

          // Sources
          var src = {
            theme: {
              path: options.theme.path
            }
          };

          // Destinations
          var dest = {
            theme: {
              path: options.target.path
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
        createDoxxDir: function createDoxxDir(result) {
          var d = _when2['default'].defer();

          // Check if the source directory exists
          // Note: This is used for caching
          if (_dir2['default'].exists(cache.theme.exists())) {
            d.resolve(result);
          } else {
            (0, _mkdirp2['default'])(cache.theme.path, function (error) {
              console.log(error);
              if (error) d.reject(error);else {
                d.resolve(result);
              }
            });
          }
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

          // Check if the cached bower dir exists
          if (_dir2['default'].exists(cache.bower.path)) {
            d.resolve(result);
          } else {
            _bower2['default'].commands.install([theme], {
              save: false
            }, {
              cwd: cache.theme.path
            }).on('end', function () {
              d.resolve(result);
            }).on('error', d.reject);
          }

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
              template: data.toString(),
              isCached: cache.exists()
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
        }
      };

      // Check if the template is enabled (legacy)
      if (options.template && options.template.path) {
        final.resolve({
          template: _fsExtra2['default'].readFileSync(_path2['default'].resolve(__dirname, options.template.path)).toString()
        });
      } else {

        (function (notify) {

          // Preprocess the commands
          return commands.preProcess().tap(function () {
            notify('Preparing to install theme' + (cache.exists() ? ' from cache.' : ''));
          })
          // Create a temp dir
          .then(commands.createDoxxDir).tap(function () {
            if (!cache.theme.exists()) notify('Creating home directory');
          })
          // Install the theme using bower
          .then(commands.installTheme).tap(function () {
            notify('Installing theme');
          })
          // Copy css dir files
          .then(commands.copyAssetCSS).tap(function () {
            notify('Copying css directory to target');
          })
          // Copy the js dir & files
          .then(commands.copyAssetJS).tap(function () {
            notify('Copying js directory to target');
          })
          // Copy the template dir & file
          .then(commands.copyTemplate).tap(function () {
            notify('Copying template directory to target');
          })
          // Convert the template to a string
          .then(commands.stringifyTemplate).tap(function () {
            notify('Rendering the template from target');
          })
          // Delete the template dir
          .then(commands.deleteTemplateDir).tap(function () {
            notify('Removing template directory from target');
          }).then(final.resolve);
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