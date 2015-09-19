'use strict';

import Path from 'path';
import walkdir from 'walkdir';
import _ from 'lodash';
import osenv from 'osenv';
import fs from 'fs';
import 'source-map-support/register';

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
      file = Path.relative(source, file);
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

  /**
   * Locates the home directory for the
   * current operating system.
   * Credits to @cliftonc
   * @return {String} The home directory path
   */
  static getHomeDir() {
      return osenv.home() ||
        process.env.HOME ||
        process.env.HOMEPATH ||
        process.env.USERPROFILE;
    }
    /**
     * Checks if the directory exists
     * @param  {String} path The path to the directory
     * @return {Boolean}      The truth value
     */
  static exists(path) {
    try {
      fs.statSync(path);
      return true;
    } catch (err) {
      return !(err && err.code === 'ENOENT');
    }
  }
}


export default Dir;