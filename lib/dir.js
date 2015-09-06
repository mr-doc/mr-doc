'use strict';

import path from 'path';
import walkdir from 'walkdir';
import _ from 'lodash';

/**
 * The class that manages directories.
 * @class Dir
 */
class Dir {
  constructor() {}

  /**
   * Create an array of all the right files in the source dir
   * @param  {String}   source source path
   * @param  {Object}   options option object
   * @return {Array}
   */
  static collectFiles(source, options) {
    var dirtyFiles = walkdir.sync(source), // tee hee!
      ignore = options.ignore || [],
      files = [];

    dirtyFiles.forEach(function (file) {
      file = path.relative(source, file);

      var doNotIgnore = _.all(ignore, function (d) {
        // return true if no part of the path is in the ignore/black list
        return (file.indexOf(d) === -1);
      });

      if ((file.substr(-2) === 'js') && doNotIgnore) {
        files.push(file);
      }
    });

    return files;
  }
}


export default Dir;