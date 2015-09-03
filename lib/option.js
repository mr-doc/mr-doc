/*! global __dirname, process */
import path from 'path';
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
      if (options.extension) {
        this.options.extension = options.extension;
      }

      if (options.template) {
        this.options.template.path = options.template;
      }

      if (!options.source) {
        console.error(new Error('Error, you must define a source'));
        return;
      } else
        this.options.source = options.source;

      if (options.target) {
        this.options.target = path.resolve(process.cwd(), options.target) ||
          process.cwd();
      }
      if (options.ignore) {
        this.options.blacklist = options.ignore
          .trim().replace(' ', '').split(',');
      }

      if (options.readme) {
        this.options.readme = options.readme;
      }

    }
    /**
     * Returns the current options.
     * @returns {object} The current options
     */
  getOptions() {
      return this.options;
    }
    /**
     * Returns the default options.
     * @returns {object} The default options
     */
  getDefaults() {
    return {
      // The title for the page produced
      'title': '',
      // The folder which should get parsed
      'source': '',
      // The folder which will contain the results.
      'target': '',
      // The target files extension.
      'extension': 'html',
      // The comma seperated list of directories to ignore. (alias for ignore)
      'blacklist': ['test', 'public', 'static', 'views', 'templates'],
      // The markdown file to use on the main page of the documentations. 
      // Checks the current directory for a package.json or README.md by default
      'readme': '',
      'package': undefined,
      'template': {
        'path': '../views/template.jade'
      }
    };
  }
}

export default (options) => {
  'use strict';
  return new Option(options);
};