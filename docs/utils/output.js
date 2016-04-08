'use strict';
const Source = require('./source');
const Log = require('mr-doc-utils').Log;
const log = new Log();
const Parser = require('../parser/');
const Compiler = require('../compiler/');
const Vinyl = require('vinyl');
class Output {
  static handler(buffer, options) {
    return function (callback) {
      Output.format(buffer, options).forEach(Output.toStream(this, options));
      callback();
    };
  }
  static format(buffer, options) {
    const files = Source.create(buffer);
    // Initalize Parser and Compiler
    const parser = (new Parser(options)).factory();
    const compiler = (new Compiler(options)).factory();
    // DEBUG: Parser and Compiler
    log.debug(Log.color.blue('Parser and compiler initialized:'), !!parser && !!compiler);
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
  static toStream(context, options) {
    const file = options.compiler.file;
    return function (f) {
      if (file.format === 'json' || file.format === 'md') {
        this.push(new Vinyl({
          path: `${file.name}.${file.format}`,
          contents: new Buffer(f),
        }));
      } else if (file.format === 'html') {
        this.push(f);
      }
    }.bind(context);
  }
}

module.exports = Output;
