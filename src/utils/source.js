'use strict';
const Extension = require('./extension');
const File = require('fs-extra');
const ShortID = require('shortid');
const _ = require('lodash');
const Path = require('path');
const isGlob = require('is-glob');
class Source {
  static normalize(source, options) {
    return source.split(',')
    .map(path => path.trim())
    .map(path => Source.normalizePath(path, options));
  }
  static generateReferences(files) {
    // Process the files.
    const result = files
    .map(file => Source.processFile(file));
    // Create references for each file.
    const references = result
    .map(file => Source.createReference(file));
    // Process the references and attach it to each file.
    return result
    .map(file => Source.processReference(file, references));
  }
  static processFile(file) {
    return {
      id: ShortID.generate(),
      cwd: file.cwd,
      base: file.base.replace(file.cwd + Path.sep, ''),
      path: Path.parse(file.path.replace(file.cwd + Path.sep, '')),
      source: File.readFileSync(file.path, 'utf8'),
      comments: undefined,
    };
  }
  static createReference(file) {
    return {
      id: file.id,
      cwd: file.cwd,
      base: file.base,
      path: file.path,
      source: file.source,
      comments: file.comments,
    };
  }
  static processReference(file, references) {
    return _.merge(file, {
      ref: references.map(ref => ({ [ref.id]: _.omit(ref, 'id') })),
    });
  }
  static normalizePath(path, options) {
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

module.exports = Source;
