'use strict';
import Path from 'path';
import _ from 'lodash';
import 'source-map-support/register';
/**  
 * The class that sets the options.  
 * @class Option  
 */
class Option {
  constructor(options) {
      this.options = this.getDefaults();
      if (options) this.setOptions(options);
    }
    /**      
     * Sets the options      
     */
  setOptions(options) {
    if (options.name) {
      this.options.name =
        // Because of a known bug: https://github.com/tj/commander.js/issues/283
        // we'll have to check if it's a function
        _.isFunction(options.name) ?
        options.name() : options.name;
    }
    if (options.extension) {
      this.options.extension = options.extension;
    }

    if (options.kit) {
      if (_.isString(options.kit)) {
        if (options.kit.toLowerCase() === 'yes')
          this.options.kit = true;
        else if (options.kit.toLowerCase() === 'no')
          this.options.kit = false;
      } else this.options.kit = true;
    }

    if (options.template) {
      this.options.template.path = options.template;
    }

    // Option - template helpers
    this.options.template.isEnabled = () => {
      return !!options.template;
    };

    this.options.template.isKit = () => {
      return this.options.kit;
    };

    if (!options.source) {
      console.error(new Error('Mr. Doc [error]: You must define a source.'));
      process.exit(1);
    } else
      this.options.source = options.source;

    if (options.output) {
      this.options.output = Path.resolve(process.cwd(), options.output) ||
        process.cwd();
    }

    if (options.ignore) {
      this.options.blacklist = options.ignore
        .trim().replace(' ', '').split(',');
    }
    if (options.readme) {
      this.options.readme = options.readme;
    }
    if (options.theme) {
      if (_.isString(options.theme) && !_.isEmpty(options.theme)) {
        this.options.theme.name = options.theme.indexOf('doxx-theme-') > -1 ?
          options.theme : 'mr-doc-theme-' + options.theme;
      }
    }
  }

  /**      
   * Returns the current options.      
   * @return {object} The current options      
   */
  getOptions() {
      return this.options;
    }
    /**      
     * Returns the default options.      
     * @return {object} The default options      
     */
  getDefaults() {
    return {
      // The title for the page produced       
      'name': undefined,
      // The folder which should get parsed       
      'source': 'lib/',
      // The folder which will contain the results.       
      'output': 'docs/',
      // The output files extension.       
      'extension': 'html',
      // The comma seperated list of directories to ignore. (alias for ignore)       
      'blacklist': ['test', 'public', 'static', 'view', 'views', 'template', 'templates'],
      // The markdown file to use on the main page of the documentations.        
      // Checks the current directory for a package.json or README.md by default      
      'readme': '',
      'package': (() => {
        let pkg;
        try {
          pkg = require(Path.join(process.cwd(), '/package.json'));
        } catch (error) {}
        return pkg;
      })(),
      'template': {
        'path': undefined,
      },
      'theme': {
        'name': 'mr-doc-theme-default'
      },
      'kit': false
    };
  }
}
export default (options) => {
  return new Option(options);
};