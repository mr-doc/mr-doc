'use strict';

const Path = require('path');
const Promise = require('bluebird');
class Theme {
  constructor(options) {
    this.options = options;
      console.log('HERE');
      // TODO: Replace module name with mr-doc-theme-default
      this.theme = require('mr-doc-theme-starter-kit');
      // Check to make sure that a template is not used
      if(this.options.compiler().template.path !== null) {
        if (this.options.theme().name && this.options.theme().path === null) {
          this.theme = require(Path.resolve(process.cwd(), this.options.theme().name));
        } else if(this.options.theme().path) {
          this.theme = require(Path.resolve(process.cwd(), this.options.theme().path));
        }
      }
  }
  install (comments) {
      this.theme(comments, this.options)
      .then(() => console.log('Theme installed!'))
      .pipe((error) => console.error('An error ocurred!', error));
    return comments;
  }
  installAsync (comments) {
    return new Promise((resolve, reject) => {
        this.theme(comments, this.options)
        .then((files) => {
          console.log('DONE!');
          resolve(files)
        })
        .error((error, message) => reject(error, message));
    });
  }
}

module.exports = Theme;
