/* global __dirname, process, console */
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
      let resolved = {
        theme: options.template.path ? undefined : Theme.findTheme(options.theme)
      };
      this.options = {
        theme: {
          name: !options.template ?
            resolved.theme.name : undefined,
          path: !options.template ?
            resolved.theme.path : undefined
        },
        target: {
          path: options.target
        },
        template: {
          name: options.package.name,
          path: options.template.path,
          isKit: () => {
            return options.kit;
          }
        }
      };
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
        src: options.template ?
          options.template.path : options.theme.path,
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
          return File.readFileSync(file);
        }
      };
    }
    /**    
     * Find the theme specified    
     * @param {String} theme The theme to find    
     * @return {Object} The theme.    
     */
  static findTheme(theme) {
      const DEFAULT_THEME = 'mr-doc-theme-default';
      const mrDocPath = Path.resolve(__dirname, '..');
      const projectPath = process.cwd();
      // Plugins may provide a name property
      // so just in case check it
      theme = theme.name ? theme.name : theme;
      const locations = {
        // Path to the project's node_modules dir + theme       
        project: Path.join(projectPath, 'node_modules', theme),
        // Path to Doc's node_modules dir + theme       
        mrDoc: Path.join(mrDocPath, 'node_modules', theme),
        // Path to the Doc's default theme dir       
        default: Path.join(mrDocPath, 'node_modules', DEFAULT_THEME)
      };
      if (Dir.exists(locations.mrDoc)) {
        console.log('Mr. Doc [info]: Using theme [' + theme + ']');
        return {
          name: theme,
          path: locations.mrDoc
        };
      }
      if (Dir.exists(locations.project)) {
        console.log('Mr. Doc [info]: Using theme [' + theme + ']');
        return {
          name: theme,
          path: locations.project
        };
      }
      console.log('Mr. Doc [warn]: Theme "' + theme + '" not found, reverting to default.');
      return {
        name: DEFAULT_THEME,
        path: locations.default
      };
    }
    /**    
     * Copies the theme specified (reverting to default)    
     * over to the target directory. (Async)  
     * @return {Function} The promise.    
     */
  install(options = this.options) {
      let final = when.defer();
      // Check if the template is enabled (legacy)       
      if (options.template.isKit &&
        !options.template.isKit()) {
        if (options.tempate.isKit && !options.template.isKit()) {
          final.resolve({
            template: File.readFileSync(Path.resolve(__dirname, options.template.path)).toString()
          });
        }
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
     * over to the target directory. (Sync)
     * @return The template    
     */
  installSync(options = this.options) {
    if (options.template.isKit &&
      !options.template.isKit()) {
      return {
        template: File.readFileSync(Path.resolve(__dirname, options.template.path)).toString()
      };
    } else {
      let tasks = Theme.tasks(options);
      tasks.copyAssetsSync();
      tasks.showProgress('Copying assets.');
      tasks.stringifyTemplateSync();
      tasks.showProgress('Reading template.');
      tasks.showProgress('Done.');
    }
    return {
      template: ''
    };
  }
}
export default Theme;