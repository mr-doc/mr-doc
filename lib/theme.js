'use strict';
import bower from 'bower';
import when from 'when';
import Path from 'path';
import mkdirp from 'mkdirp';
import _ from 'lodash';
import File from 'fs-extra';
import del from 'del';
import 'source-map-support/register';

/**
 * The class that installs themes.
 * @class  Theme
 */
class Theme {
  constructor(options) {
      this.bower = bower;
      this.options = {
        bower: {
          path: process.cwd() + '/bower',
          dir: {
            path: Path.join(options.target, 'bower_components')
          },
          isEnabled: () => {
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
  setup() {
      try {
        this.package = require(this.options.bower.path);
      } catch (error) {}

      if (!this.package) {
        try {
          this.package = require('../bower');
        } catch (error) {}
      }

    }
    /** 
     * Installs the theme and its assets
     * @return {Function} The promise
     */
  install() {
    let d = when.defer();

    /** 
     * The commands to install the theme
     * @type {object}
     */
    let commands = {
      /** 
       * Installs the theme through bower
       * @param  {String} theme The theme to install
       * @return {Function}       The promise
       */
      installTheme: (theme) => {
        var d = when.defer();

        if (!theme)
          _.forEach(this.package, (value, key) => {
            if (key === 'devDependencies' || key === 'dependencies')
              _.forEach(this.package[key], (v, k) => {
                if (k.indexOf('doxx-theme-') > -1) {
                  theme = k;
                }
              });
          });
        this.bower.commands
          .install([theme], {
            save: true
          }).on('end', () => {
            d.resolve(theme);
          });
        return d.promise;
      },
      /**
       * Copies the bower dir to the target dir
       * @param  {String} theme The theme to install
       * @return {Function}       The promise
       */
      copyBower: (theme) => {
        let d = when.defer();

        // Sources
        var src = {
          bower: Path.join(this.bower.config.cwd, 'bower_components/')
        };
        // Destinations
        var dest = {
          bower: this.options.bower.dir.path
        };
        // Copy the bower src file
        File.copy(src.bower, dest.bower, {
          clobber: true
        }, (error) => {
          if (error) d.reject(error);
          else {
            d.resolve({
              theme, src, dest
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
      removeBowerSrc: (result) => {
        let d = when.defer();
        let {
          src
        } = result;
        del([src.bower]).then(() => {
          d.resolve(result);
        });
        return d.promise;
      },
      /** 
       * Copies the asset dir from the copied bower dir
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      copyAssets: (result) => {
        let d = when.defer();
        var {
          theme, src, dest
        } = result;
        _.extend(src, {
          assets: {
            dir: Path.join(Path.join(
                this.options.target.path, 'bower_components/'),
              theme + '/assets/')
          }
        });
        _.extend(dest, {
          assets: {
            dir: Path.join(this.options.target.path, 'assets/')
          }
        });

        File.copy(src.assets.dir, dest.assets.dir, {
          clobber: true
        }, error => {
          if (error) d.reject(error);
          else {
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
      copyAssetCSS: (result) => {
        let d = when.defer();
        var {
          theme, src, dest
        } = result;
        _.extend(src.assets, {
          css: Path.join(Path.join(
              this.options.target.path, 'bower_components/'),
            theme + '/assets/css/')
        });
        _.extend(dest.assets, {
          css: Path.join(this.options.target.path, 'css/')
        });
        File.copy(src.assets.css, dest.assets.css, {
          clobber: true
        }, error => {
          if (error) d.reject(error);
          else {
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
      copyAssetJS: (result) => {
        let d = when.defer();
        var {
          theme, src, dest
        } = result;
        _.extend(src.assets, {
          js: Path.join(Path.join(
              this.options.target.path, 'bower_components/'),
            theme + '/assets/js')
        });
        _.extend(dest.assets, {
          js: Path.join(this.options.target.path, 'js/')
        });
        File.copy(src.assets.js, dest.assets.js, {
          clobber: true
        }, error => {
          if (error) d.reject(error);
          else {
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
      deleteAssets: (result) => {
        let d = when.defer();
        var {
          dest
        } = result;
        del([dest.assets.dir]).then(() => {
          d.resolve(result);
        });
        return d.promise;
      },
      /**
       * Copies the template dir from the assets dir
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      copyTemplate: (result) => {
        let d = when.defer();
        var {
          theme, src, dest
        } = result;
        _.extend(src, {
          template: Path.join(Path.join(
              this.options.target.path, 'bower_components/'),
            theme + '/template/')
        });
        _.extend(dest, {
          template: Path.join(this.options.target.path, '/template/')
        });

        File.copy(src.template, dest.template, {
          clobber: true
        }, error => {
          if (error) d.reject(error);
          else {
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
      removeBowerDest: () => {
        let d = when.defer();
        del([
          Path.join(
            this.options.target.path,
            'bower_components/')
        ]).then(() => {
          d.resolve({
            path: Path.join(
              this.options.target.path,
              'template/') + 'index.jade'
          });
        });
        return d.promise;
      }
    };

    mkdirp(this.options.target.path, (error) => {
      if (error) d.reject(error);
      var promise;
      // Decide between default template 
      // or provided template from bower
      // and install it
      if (!this.options.bower.isEnabled())
        promise = commands.installTheme('doxx-theme-default');
      else promise = commands.installTheme();

      // Run through the commands
      promise
        .then(commands.copyBower)
        .then(commands.removeBowerSrc)
        .then(commands.copyAssets)
        .then(commands.copyAssetCSS)
        .then(commands.copyAssetJS)
        .then(commands.deleteAssets)
        .then(commands.copyTemplate)
        .then(commands.removeBowerDest)
        .then(d.resolve);
    });

    return d.promise;
  }

}


export default (bower) => {
  return new Theme(bower);
};