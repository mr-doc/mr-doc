'use strict';
import bower from 'bower';
import when from 'when';
import Path from 'path';
import mkdirp from 'mkdirp';
import _ from 'lodash';
import File from 'fs-extra';
import del from 'del';
import 'source-map-support/register';
import root from 'app-root-path';
/**
 * The class that installs themes.
 * @class  Theme
 */
class Theme {
  constructor(options) {
      this.bower = bower;
      this.options = {
        theme: {
          name: options.theme,
          path: Path.join(root.path, 'theme/'),
          target: {
            path: options.target
          }
        },
        template: {
          path: options.template.path,
          isEnabled: () => {
            return !!options.template.path;
          }
        }
      };
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
       * Create necessary paths to 
       * process the commands
       * @return {Function}       The promise
       */
      preProcess: () => {
        let d = when.defer();
        let theme = this.options.theme.name;
        // Create short-hands for paths

        // Sources
        var src = {
          theme: {
            path: this.options.theme.path
          }
        };

        // Destinations
        var dest = {
          theme: {
            path: this.options.theme.target.path
          }
        };

        // Assets dir
        let assets = {
          path: Path.join(Path.join(
              src.theme.path, 'bower_components/'),
            theme + '/assets/')
        };

        // Template dir
        let template = {
          path: Path.join(Path.join(
              src.theme.path, 'bower_components/'),
            theme + '/template/')
        };

        // The css dir within assets dir
        _.extend(src, {
          css: {
            path: Path.join(assets.path, 'css/')
          }
        });
        _.extend(dest, {
          css: {
            path: Path.join(dest.theme.path, 'css/')
          }
        });

        // The js dir within assets dir
        _.extend(src, {
          js: {
            path: Path.join(assets.path, 'js/')
          }
        });
        _.extend(dest, {
          js: {
            path: Path.join(dest.theme.path, 'js/')
          }
        });

        // The bower template dir within assets dir
        _.extend(src, {
          template
        });
        _.extend(dest, {
          template: {
            path: Path.join(dest.theme.path, 'template/')
          }
        });

        d.resolve({
          theme, src, dest
        });
        return d.promise;
      },
      /**
       * Creates a temp dir for bower
       * to install the bower components
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      createTempDir: (result) => {
        let d = when.defer();
        var {
          src
        } = result;
        mkdirp(src.theme.path, (error) => {
          if (error) d.reject(error);
          else d.resolve(result);
        });
        return d.promise;
      },
      /** 
       * Installs the theme through bower
       * @param  {object} result The result
       * @return {Function}       The promise
       */
      installTheme: (result) => {
        var d = when.defer();
        var {
          theme, src
        } = result;
        this.bower.commands
          .install([theme], {
            save: false
          }, {
            cwd: src.theme.path
          }).on('end', () => {
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
      copyAssetCSS: (result) => {
        let d = when.defer();
        var {
          src, dest
        } = result;

        File.copy(src.css.path, dest.css.path, {
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
       * to the target dir
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      copyAssetJS: (result) => {
        let d = when.defer();
        var {
          src, dest
        } = result;
        File.copy(src.js.path, dest.js.path, {
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
       * Copies the template dir from the assets dir
       * to the target dir
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      copyTemplate: (result) => {
        let d = when.defer();
        var {
          src, dest
        } = result;

        File.copy(src.template.path, dest.template.path, {
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
       * Reads the template and strigifies it.
       * @param  {object} result The result
       * @return {Function}      The promise
       */
      stringifyTemplate: (result) => {
        let d = when.defer();
        var {
          dest, src, theme
        } = result;
        let file = dest.template.path + 'index.jade';

        File.readFile(file, (error, data) => {
          if (error) d.reject(error);
          else d.resolve({
            dest, src, theme,
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
      deleteTemplateDir: (result) => {
        let d = when.defer();
        var {
          dest
        } = result;
        del([dest.template.path]).then(() => {
          d.resolve(result);
        });
        return d.promise;
      },
      /**
       * Removes the temp dir
       * @param  {object} result The result
       * @return {Function}        The promise
       */
      deleteTempDir: (result) => {
        let d = when.defer();
        var {
          src
        } = result;
        del([src.theme.path]).then(() => {
          d.resolve(result);
        });
        return d.promise;
      }
    };

    // Check if the template is enabled (legacy)
    if (this.options.template.isEnabled()) {
      d.resolve({
        template: File.readFileSync(
          Path.resolve(__dirname,
            this.options.template.path)).toString()
      });
    } else {

      // Preprocess the commands
      commands.preProcess()
        // Create a temp dir
        .then(commands.createTempDir)
        // Install the theme using bower
        .then(commands.installTheme)
        // Copy css dir files
        .then(commands.copyAssetCSS)
        // Copy the js dir & files
        .then(commands.copyAssetJS)
        // Copy the template dir & file
        .then(commands.copyTemplate)
        // Convert the template to a string
        .then(commands.stringifyTemplate)
        // Delete the template dir
        .then(commands.deleteTemplateDir)
        // Delete the temp dir
        .then(commands.deleteTempDir)
        // We're done!
        .then(d.resolve);
    }
    return d.promise;
  }

}


export default (theme) => {
  return new Theme(theme);
};