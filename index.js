'use strict';

const Log = require('mr-doc-utils').Log;
const Output = require('./src/utils/output');
const Promise = require('bluebird');
const Through = require('through2');

const VinylFS = require('vinyl-fs');
const log = new Log();

class MrDoc {
  static cli(stream, options) {
    return new Promise(resolve => {
      stream
        .pipe(MrDoc.gulp(options))
        .pipe(VinylFS.dest(options.mrdoc.output))
        .on('end', () => {
          log.debug(Log.color.blue('Mr. Doc compiled successfully'));
          resolve();
        });
    });
  }
  static gulp(options) {
    const buffer = [];
    return Through.obj((file, enc, callback) => {
      // Store the files in a buffer
      buffer.push(file);
      callback();
    }, Output.handler(options, buffer));
  }
  // static grunt() {
  //   //
  // }
}

module.exports = MrDoc;
