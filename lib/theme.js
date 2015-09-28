'use strict';
import when from 'when';
import Path from 'path';
import _ from 'lodash';
import File from 'fs-extra';
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';
import Dir from './dir';
import 'source-map-support/register';
let frame = elegantSpinner();
/**  
 * The class that locates themes  
 * @class Theme  
 */
class Theme {
  constructor(options) {
      if (options) {
        // Check if Doc will be installing a theme
        // or will be rendering a template
        let resolved = {
          theme: options.template.path ? undefined : Theme.findTheme(options)
        };
        // Set the options
        this.options = {
          theme: {
            name: resolved.theme ?
              resolved.theme.name : undefined,
            path: resolved.theme ?
              resolved.theme.path : undefined
          },
          output: {
            path: options.output.path ?
              options.output.path : options.output
          },
          template: {
            name: options.package ?
              options.package.name : '',
            path: options.template.path,
            isEnabled: options.template.isEnabled,
            isKit: options.template.isKit
          }
        };
      }
    }
    /**    
     * Returns the tasks that install the theme    
     * @private    
     * @param options The options to install the themes    
     * @return {object}    
     */
  static tasks(options) {
      // Sources     
      let config = {
        src: (() => {
          if (options.template.isEnabled() && !options.template.isKit())
            return options.template.path;
          else if (options.template.isEnabled())
            return process.cwd();
          else return options.theme.path;
        })(),
        dest: options.output.path,
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
      return {
        /**        
         * Shows the progress for each command        
         */
        showProgress: (command, max = 200) => {
          var count = 0;
          while (count < max) {
            logUpdate('Mr. Doc [info]: ' + frame() + ' ' + command);
            count++;
          }
        },
        /**
         * Create necessary paths to destination folder (Async)        
         */
        copyAssets: () => {
          let types = _.keys(config.paths);
          let m = when.map(types, function(type) {
            let d = when.defer();
            let src = Path.join(config.src, config.paths[type].src);
            let dest = Path.join(config.dest, config.paths[type].dest);
            File.copy(src, dest, {
              clobber: true
            }, error => {
              if (error) d.reject(error);
              else {
                d.resolve();
              }
            });
            return d.promise;
          });
          return m;
        },
        /**        
         * Create necessary paths to destination folder (Sync)       
         */
        copyAssetsSync: () => {
          let types = _.keys(config.paths);
          _.forEach(types, type => {
            let src = Path.join(config.src, config.paths[type].src);
            let dest = Path.join(config.dest, config.paths[type].dest);
            File.copySync(src, dest, {
              clobber: true
            });
          });
        },
        /**        
         * Reads the template from the source and strigifies it. (Async)        
         */
        stringifyTemplate: () => {
          let d = when.defer();
          let file = Path.join(config.src, 'template/index.jade');
          File.readFile(file, (error, data) => {
            if (error) d.reject(error);
            else d.resolve({
              template: data.toString()
            });
          });
          return d.promise;
        },
        /**        
         * Reads the template from the source and strigifies it. (Sync)        
         */
        stringifyTemplateSync: () => {
          let file = Path.join(config.src, 'template/index.jade');
          return File.readFileSync(file).toString();
        }
      };
    }
    /**    
     * Find the theme specified    
     * @param {String} theme The theme to find    
     * @return {Object} The theme.    
     */
  static findTheme(options) {
      const DEFAULT_THEME = 'mr-doc-theme-default';
      const mrDocPath = Path.resolve(__dirname, '..');
      const projectPath = process.cwd();
      const name = options.theme.name;
      // Plugins may provide a name property
      // so just in case check it
      const locations = {
        // Path to the project's node_modules dir + theme       
        project: Path.join(projectPath, 'node_modules', name),
        // Path to Doc's node_modules dir + theme       
        mrDoc: Path.join(mrDocPath, 'node_modules', name),
        // Path to the Doc's default theme dir       
        default: Path.join(mrDocPath, 'node_modules', DEFAULT_THEME)
      };
      if (Dir.exists(locations.mrDoc)) {
        console.log('Mr. Doc [info]: Using theme [' + name + ']');
        return {
          name,
          path: locations.mrDoc
        };
      } else if (Dir.exists(locations.project)) {
        console.log('Mr. Doc [info]: Using theme [' + name + ']');
        return {
          name,
          path: locations.project
        };
      } else {
        console.log('Mr. Doc [warn]: Theme "' + name + '" not found, reverting to default.');
        return {
          name: DEFAULT_THEME,
          path: locations.default
        };
      }
    }
    /**    
     * Copies the theme specified (reverting to default)    
     * over to the output directory. (Async)  
     * @jsfiddle https://jsfiddle.net/iwatakeshi/k5xsvoez/embedded/
     * @return {Function} The promise.    
     */
  install(options = this.options) {
      let final = when.defer();
      // Check if the template is enabled (legacy)       
      if (options.template.isEnabled() &&
        !options.template.isKit()) {
        final.resolve({
          template: File.readFileSync(Path.resolve(__dirname, options.template.path)).toString()
        });

      } else {
        let tasks = Theme.tasks(options);
        ((notify) => {
          return tasks.copyAssets()
            .tap(() => {
              notify('Copying Assets.');
            })
            .then(tasks.stringifyTemplate)
            .tap(() => {
              notify('Rendering template.');
            })
            .then(final.resolve);
        })(tasks.showProgress);
      }
      return final.promise;
    }
    /**      
     * Copies the theme specified (reverting to default)    
     * over to the output directory. (Sync)
     * @jsfiddle https://jsfiddle.net/iwatakeshi/nLvz3g89/embedded/
     * @return {String} The template    
     */
  installSync(options = this.options) {
    var template;
    if (options.template.isEnabled() &&
      !options.template.isKit()) {
      return {
        template: File.readFileSync(Path.resolve(__dirname, options.template.path)).toString()
      };
    } else {
      let tasks = Theme.tasks(options);
      tasks.copyAssetsSync();
      tasks.showProgress('Copying assets.');
      template = tasks.stringifyTemplateSync();
      tasks.showProgress('Reading template.');
      tasks.showProgress('Done.');

      return {
        template
      };
    }
  }
}
export default Theme;