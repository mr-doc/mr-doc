'use strict';
const ShortID = require('shortid');
const File = require('fs-extra');
const _ = require('lodash');
const Path = require('path');

class Source {
  static create(files) {
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
}

module.exports = Source;
