'use strict';

const toArray = require('stream-to-array');
class Stream {
  static toArray(stream) {
    return toArray(stream);
  }
}
module.exports = Stream;
