'use strict';
const Source = require('./source');
const Log = require('mr-doc-utils').Log;
const log = new Log();
const Vinyl = require('vinyl');
const Through = require('through2');
const Option = require('mr-doc-utils').Option;

class Output {
  static handler(buffer, parser, compiler, options) {
    const file = options.compiler.file;
    return function (callback) {
      Output.format(buffer, parser, compiler, options).forEach(function (f) {
        if (file.format === 'json' || file.format === 'md') {
          this.push(new Vinyl({
            path: `${file.name}.${file.format}`,
            contents: new Buffer(f),
          }));
        } else if (file.format === 'html') {
          this.push(f);
        }
      }.bind(this));
      callback();
    };
  }
  static format(buffer, parser, compiler, options) {
    const files = Source.generateReferences(buffer);
    // DEBUG: Files
    log.debug(Log.color.blue('Number of files: '), files.length);
    const format = options.compiler.file.format;
    if (format === 'md' || format === 'json') {
      return files
      .map(file => parser.parse(file))
      .map(file => compiler.compile(file));
    }
    return buffer;
  }
  static toBuffer(buffer) {
    return (file, enc, callback) => {
      buffer.push(file);
      callback();
    };
  }
  static toStream(parser, compiler, options) {
    const buffer = [];
    return Through.obj(Output.toBuffer(buffer),
      Output.handler(buffer, parser, compiler, Option.merge(options)));
  }
}

module.exports = Output;
