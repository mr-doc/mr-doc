/*! global __dirname, process */

'use strict';

import path from 'path';
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

      if (options.title) {
        this.options.title = options.title;
      }

      if (options.extension) {
        this.options.extension = options.extension;
      }

      if (options.template) {
        this.options.template.path = options.template;
      }

      if (!options.source) {
        console.error(new Error('Doxx [error]: You must define a source.'));
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

      if (options.theme) {
        if (_.isString(options.theme) && !_.isEmpty(options.theme)) {
          this.options.theme =
            options.theme.indexOf('doxx-theme-') > -1 ? options.theme :
            'doxx-theme-' + options.theme;
        } else this.options.theme = 'doxx-theme-default';
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
      'title': undefined,
      // The folder which should get parsed
      'source': '',
      // The folder which will contain the results.
      'target': '',
      // The target files extension.
      'extension': 'html',
      // The comma seperated list of directories to ignore. (alias for ignore)
      'blacklist': [
        'test', 'public', 'static', 'view',
        'views', 'template', 'templates'
      ],
      // The markdown file to use on the main page of the documentations. 
      // Checks the current directory for a package.json or README.md by default
      'readme': '',
      'package': undefined,
      'template': {
        'path': undefined
      },
      'theme': 'doxx-theme-default'
    };
  }
}

export default (options) => {
  return new Option(options);
};