'use strict';
const Log = require('mr-doc-utils').Log;
const Stream = require('./src/utils/stream');
const Source = require('./src/utils/source');
const Parser = require('./src/parser/');
const Promise = require('bluebird');
const log = new Log();
class MrDoc {
  static cli(stream, options) {
    return new Promise((resolve, reject) => {
      const parser = (new Parser(options.parser)).factory();
      Stream.toArray(stream)
        .then(result => {
          const files = Source.create(result);
          // DEBUG: Files
          log.debug(Log.color.blue('Number of files: '), files.length);
          try {
            files.forEach(file => parser.parse(file));
            resolve();
          } catch (error) {
            reject(error);
          }
        });
    });
  }
  // static gulp(files) {
  //   //
  // }
  // static grunt() {
  //   //
  // }
}

module.exports = MrDoc;
