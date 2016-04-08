'use strict';
const Path = require('path');
const Extension = require('./extension');
const isGlob = require('is-glob');
const _ = require('lodash');

class FS {
  static normalize(path, options) {
    // Check if the path is not in glob pattern.
    if (!isGlob(path)) {
      // Assume that Glob is used.
      let isFile = false;
      // Make sure the path is resolved.
      let str = Path.resolve(options.mrdoc.cwd, path).replace('/', Path.sep);
      // Check if the path is a file or directory.
      if (_.isEmpty(Path.parse(path).ext)) {
        // Check if the path has a '/' at the end.
        str = str[str.length - 1] === Path.sep ?
        str : `${str}${Path.sep}`;
      } else isFile = true;
      // Make sure the file or directory exists;
      if (File.existsSync(str)) {
        if (!isFile) {
          // Check if the directory has sub-directories.
          const hasSubDirs = File.readdirSync(str)
          .filter(file =>
            File.statSync(Path.join(str, file)).isDirectory()).length > 1;
          // Get the file extension.
          const extension = Extension.find(options.parser.language);
          // Set the glob pattern based on 'hasSubDirs'.
          str = hasSubDirs ?
          `${str}**${Path.sep}*${extension}` : `${str}*${extension}`;
        }
      } else return null;
      return str;
    }
    return path;
  }
}

module.exports = FS;
