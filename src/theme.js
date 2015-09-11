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

/**
 * The class that installs themes.
 * @class  Theme
 */

var Theme = (function () {
  function Theme(options) {
    _classCallCheck(this, Theme);

    this.bower = _bower2['default'];
    this.options = {
      bower: {
        path: process.cwd() + '/bower',
        dir: {
          path: _path2['default'].join(options.target, 'bower_components')
        },
        isEnabled: function isEnabled() {
          return !!options.bower;
        }
      },
      target: {
        path: options.target
      }
    };
    this.setup();
  }

  /** 
   * Sets up the package to install
   * bower components
   */

  _createClass(Theme, [{
    key: 'setup',
    value: function setup() {
      try {
        this['package'] = require(this.options.bower.path);
      } catch (error) {}

      if (!this['package']) {
        try {
          this['package'] = require('../bower');
        } catch (error) {}
      }
    }

    /** 
     * Installs the theme and its assets
     * @return {Function} The promise
     */
  }, {
    key: 'install',
    value: function install() {
      var _this = this;

      var d = _when2['default'].defer();

      /** 
       * The commands to install the theme
       * @type {object}
       */
      var commands = {
        /** 
         * Installs the theme through bower
         * @param  {String} theme The theme to install
         * @return {Function}       The promise
         */
        installTheme: function installTheme(theme) {
          var d = _when2['default'].defer();

          if (!theme) _lodash2['default'].forEach(_this['package'], function (value, key) {
            if (key === 'devDependencies' || key === 'dependencies') _lodash2['default'].forEach(_this['package'][key], function (v, k) {
              if (k.indexOf('doxx-theme-') > -1) {
                theme = k;
              }
            });
          });
          _this.bower.commands.install([theme], {
            save: true
          }).on('end', function () {
            d.resolve(theme);
          });
          return d.promise;
        },
        /**
         * Copies the bower dir to the target dir
         * @param  {String} theme The theme to install
         * @return {Function}       The promise
         */
        copyBower: function copyBower(theme) {
          var d = _when2['default'].defer();

          // Sources
          var src = {
            bower: _path2['default'].join(_this.bower.config.cwd, 'bower_components/')
          };
          // Destinations
          var dest = {
            bower: _this.options.bower.dir.path
          };
          // Copy the bower src file
          _fsExtra2['default'].copy(src.bower, dest.bower, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve({
                theme: theme, src: src, dest: dest
              });
            }
          });
          return d.promise;
        },
        /**
         * Removes the original bower dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        removeBowerSrc: function removeBowerSrc(result) {
          var d = _when2['default'].defer();
          var src = result.src;

          (0, _del2['default'])([src.bower]).then(function () {
            d.resolve(result);
          });
          return d.promise;
        },
        /** 
         * Copies the asset dir from the copied bower dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyAssets: function copyAssets(result) {
          var d = _when2['default'].defer();
          var theme = result.theme;
          var src = result.src;
          var dest = result.dest;

          _lodash2['default'].extend(src, {
            assets: {
              dir: _path2['default'].join(_path2['default'].join(_this.options.target.path, 'bower_components/'), theme + '/assets/')
            }
          });
          _lodash2['default'].extend(dest, {
            assets: {
              dir: _path2['default'].join(_this.options.target.path, 'assets/')
            }
          });

          _fsExtra2['default'].copy(src.assets.dir, dest.assets.dir, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /**
         * Copies the css dir from the assets dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyAssetCSS: function copyAssetCSS(result) {
          var d = _when2['default'].defer();
          var theme = result.theme;
          var src = result.src;
          var dest = result.dest;

          _lodash2['default'].extend(src.assets, {
            css: _path2['default'].join(_path2['default'].join(_this.options.target.path, 'bower_components/'), theme + '/assets/css/')
          });
          _lodash2['default'].extend(dest.assets, {
            css: _path2['default'].join(_this.options.target.path, 'css/')
          });
          _fsExtra2['default'].copy(src.assets.css, dest.assets.css, {
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
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyAssetJS: function copyAssetJS(result) {
          var d = _when2['default'].defer();
          var theme = result.theme;
          var src = result.src;
          var dest = result.dest;

          _lodash2['default'].extend(src.assets, {
            js: _path2['default'].join(_path2['default'].join(_this.options.target.path, 'bower_components/'), theme + '/assets/js')
          });
          _lodash2['default'].extend(dest.assets, {
            js: _path2['default'].join(_this.options.target.path, 'js/')
          });
          _fsExtra2['default'].copy(src.assets.js, dest.assets.js, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /**
         * Removes the assets dir from the target
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        deleteAssets: function deleteAssets(result) {
          var d = _when2['default'].defer();
          var dest = result.dest;

          (0, _del2['default'])([dest.assets.dir]).then(function () {
            d.resolve(result);
          });
          return d.promise;
        },
        /**
         * Copies the template dir from the assets dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        copyTemplate: function copyTemplate(result) {
          var d = _when2['default'].defer();
          var theme = result.theme;
          var src = result.src;
          var dest = result.dest;

          _lodash2['default'].extend(src, {
            template: _path2['default'].join(_path2['default'].join(_this.options.target.path, 'bower_components/'), theme + '/template/')
          });
          _lodash2['default'].extend(dest, {
            template: _path2['default'].join(_this.options.target.path, '/template/')
          });

          _fsExtra2['default'].copy(src.template, dest.template, {
            clobber: true
          }, function (error) {
            if (error) d.reject(error);else {
              d.resolve(result);
            }
          });
          return d.promise;
        },
        /**
         * Removes the bower dir from the target dir
         * @param  {object} result The result
         * @return {Function}        The promise
         */
        removeBowerDest: function removeBowerDest() {
          var d = _when2['default'].defer();
          (0, _del2['default'])([_path2['default'].join(_this.options.target.path, 'bower_components/')]).then(function () {
            d.resolve({
              path: _path2['default'].join(_this.options.target.path, 'template/') + 'index.jade'
            });
          });
          return d.promise;
        }
      };

      (0, _mkdirp2['default'])(this.options.target.path, function (error) {
        if (error) d.reject(error);
        var promise;
        // Decide between default template
        // or provided template from bower
        // and install it
        if (!_this.options.bower.isEnabled()) promise = commands.installTheme('doxx-theme-default');else promise = commands.installTheme();

        // Run through the commands
        promise.then(commands.copyBower).then(commands.removeBowerSrc).then(commands.copyAssets).then(commands.copyAssetCSS).then(commands.copyAssetJS).then(commands.deleteAssets).then(commands.copyTemplate).then(commands.removeBowerDest).then(d.resolve);
      });

      return d.promise;
    }
  }]);

  return Theme;
})();

exports['default'] = function (bower) {
  return new Theme(bower);
};

module.exports = exports['default'];
//# sourceMappingURL=source maps/theme.js.map