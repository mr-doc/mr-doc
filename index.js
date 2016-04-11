'use strict';

const Log = require('mr-doc-utils').Log;
const Option = require('mr-doc-utils').Option;
const Output = require('./src/utils/output');
const Promise = require('bluebird');
const VinylFS = require('vinyl-fs');
const Parser = require('./src/parser/');
const Compiler = require('./src/compiler/');
const log = new Log();

class MrDoc {
  static cli(stream, options) {
    return new Promise(resolve => {
      const output = options.output || options.o || Option.defaults.mrdoc.output;
      stream
        .pipe(MrDoc.gulp(Option.merge(options, true)))
        .pipe(VinylFS.dest(output))
        .on('end', () => {
          log.debug(Log.color.blue('Mr. Doc compiled successfully'));
          resolve();
        });
    });
  }
  static gulp(options) {
    return Output.toStream(MrDoc.parser(options), MrDoc.compiler(options), options);
  }
  // static grunt() {
  //   //
  // }
  static parser(options) {
    // Initalize Parser and Compiler
    return (new Parser(options)).factory();
  }
  static compiler(options) {
    return (new Compiler(options)).factory();
  }
}

module.exports = MrDoc;
