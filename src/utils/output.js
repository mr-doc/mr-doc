'use strict';
const Source = require('./source');
const Log = require('mr-doc-utils').Log;
const log = new Log();
const Parser = require('../parser/');
const Compiler = require('../compiler/');
const Vinyl = require('vinyl');
const Option = require('mr-doc-utils').Option;

class Output {
  static handler(options, buffer) {
    const opt = (new Option(options)).options();
    return function (callback) {
      Output.format(opt, buffer).forEach(Output.toStream(opt, this));
      callback();
    };
  }
  static format(options, buffer) {
    const files = Source.create(buffer);
    // Initalize Parser and Compiler
    const parser = (new Parser(options)).factory();
    const compiler = (new Compiler(options)).factory();
    // DEBUG: Parser and Compiler
    log.debug(Log.color.blue('Parser and compiler initialized:'), !!parser && !!compiler);
    // DEBUG: Files
    log.debug(Log.color.blue('Number of files: '), files.length);

    const format = options.compiler().file.format;
    if (format === 'md' || format === 'json') {
      return files
      .map(file => parser.parse(file))
      .map(file => compiler.compile(file));
    }
    return buffer;
  }

  static toStream(options, context) {
    const format = options.compiler().file.format;
    const file = options.compiler().file;
    return function (f) {
      if (format === 'json' || format === 'md') {
        this.push(new Vinyl({
          path: `${file.name}.${file.format}`,
          contents: new Buffer(f),
        }));
      } else if (format === 'html') {
        this.push(f);
      }
    }.bind(context);
  }
}

module.exports = Output;
