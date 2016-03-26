'use strict';
const Log = require('./src/utils/log');
const Stream = require('./src/utils/stream');
const Source = require('./src/utils/source');
const _ = require('lodash');
const log = Log.global();
class MrDoc {
  static cli(stream) {
    Stream.toArray(stream)
    .then(result => {
      const files = Source.create(result);
      log.info('number of files', files.length);
      files.forEach(file => {
        log.info(file.ref);
        _.forEach(file.ref, (i) => log.info(i));
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
