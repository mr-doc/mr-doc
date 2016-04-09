'use strict';

const Log = require('mr-doc-utils').Log;
const Option = require('mr-doc-utils').Option;
const Output = require('./src/utils/output');
const Promise = require('bluebird');
const Through = require('through2');
const VinylFS = require('vinyl-fs');
const log = new Log();

class MrDoc {
  static cli(stream, options) {
    return new Promise(resolve => {
      const output = options.output || options.o || Option.defaults.mrdoc.output;
      stream
        .pipe(MrDoc.gulp(options))
        .pipe(VinylFS.dest(output))
        .on('end', () => {
          log.debug(Log.color.blue('Mr. Doc compiled successfully'));
          resolve();
        });
    });
  }
  static gulp(options) {
    const buffer = [];
    return Through.obj(Output.toBuffer(buffer),
    Output.handler(buffer, Option.merge(options, true)));
  }
  // static grunt() {
  //   //
  // }
}

module.exports = MrDoc;
