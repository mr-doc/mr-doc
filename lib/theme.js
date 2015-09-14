'use strict';
import bower from 'bower';
import when from 'when';
import Path from 'path';
import mkdirp from 'mkdirp';
import _ from 'lodash';
import File from 'fs-extra';
import del from 'del';
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';
import Dir from './dir';
import 'source-map-support/register';

let frame = elegantSpinner();


/**
 * The class that installs themes.
 * @class  Theme
 */
class Theme {
  constructor(options) {
    // Set hidden path
    let hiddenPath = Path.join(Dir.getHomeDir(), '.doxx');

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
  static staticInstall(options) {
      let final = when.defer();
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
          path: Path.join(Path.join(
              options.theme.path,
              'bower_components/'),
            options.theme.name + '/')
        }
      };

      _.extend(cache, {
        exists: () => {
          return Dir.exists(cache.theme.path) &&
            Dir.exists(cache.bower.path);
        }
      });

      _.extend(cache.theme, {
        exists: () => {
          return Dir.exists(cache.theme.path);
        }
      });

      _.extend(cache.bower, {
        exists: () => {
          return Dir.exists(cache.bower.path);
        }
      });

      /** 
       * The commands to install the theme
       * @type {object}
       */
      let commands = {
        showProgress: (command) => {
          var count = 0;
          while (count < 200) {
            logUpdate('Doxx [info]: ' + frame() + ' ' + command);
            count++;
          }
        },
        /**
         * Create necessary paths to 
         * process the commands
         * @return {Function}       The promise
         */
        preProcess: () => {
          let d = when.defer();

          let theme = options.theme.name;
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
        createDoxxDir: (result) => {
          let d = when.defer();

          // Check if the source directory exists
          // Note: This is used for caching
          if (Dir.exists(cache.theme.exists())) {
            d.resolve(result);
          } else {
            mkdirp(cache.theme.path, (error) => {
              console.log(error);
              if (error) d.reject(error);
              else {
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
        installTheme: (result) => {
          var d = when.defer();
          var {
            theme
          } = result;
          // Check if the cached bower dir exists
          if (Dir.exists(cache.bower.path)) {
            d.resolve(result);
          } else {
            bower.commands
              .install([theme], {
                save: false
              }, {
                cwd: cache.theme.path
              }).on('end', () => {
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
        deleteTemplateDir: (result) => {
          let d = when.defer();

          var {
            dest
          } = result;
          del([dest.template.path]).then(() => {
            d.resolve(result);
          });
          return d.promise;
        }
      };

      // Check if the template is enabled (legacy)
      if (options.template && options.template.path) {
        final.resolve({
          template: File.readFileSync(
            Path.resolve(__dirname,
              options.template.path)).toString()
        });
      } else {

        ((notify) => {

          // Preprocess the commands
          return commands.preProcess()
            .tap(() => {
              notify('Preparing to install theme' +
                (cache.exists() ? ' from cache.' : ''));
            })
            // Create a temp dir
            .then(commands.createDoxxDir)
            .tap(() => {
              if (!cache.theme.exists())
                notify('Creating home directory');
            })
            // Install the theme using bower
            .then(commands.installTheme)
            .tap(() => {
              notify('Installing theme');
            })
            // Copy css dir files
            .then(commands.copyAssetCSS)
            .tap(() => {
              notify('Copying css directory to target');
            })
            // Copy the js dir & files
            .then(commands.copyAssetJS)
            .tap(() => {
              notify('Copying js directory to target');
            })
            // Copy the template dir & file
            .then(commands.copyTemplate)
            .tap(() => {
              notify('Copying template directory to target');
            })
            // Convert the template to a string
            .then(commands.stringifyTemplate)
            .tap(() => {
              notify('Rendering the template from target');
            })
            // Delete the template dir
            .then(commands.deleteTemplateDir)
            .tap(() => {
              notify('Removing template directory from target');
            })
            .then(final.resolve);
        })(commands.showProgress);
      }
      return final.promise;
    }
    /** 
     * Installs the theme and its assets
     * @return {Function} The promise
     */
  install() {
    return Theme.staticInstall(this.options);
  }
}

export default Theme;