/* eslint-env node */
'use strict';

/* eslint-env node */
const Utils = require('mr-doc-utils');
const log = new Utils.Log();
const _ = require('lodash');

class Log {
  constructor() {
    return log;
  }
  static setup(options) {
    if (options.silent) {
      log.on('error', () => { /* NOOP */});
    }
    Log.levels(options.level)
    .forEach(level => {
      if (level === 'error') Log.error();
      else Log.other(level);
    });
  }
  static levels(level) {
    const levels = _.isString(level) ? level.split(',') : level;
    return levels.map(i => i.replace(/\s/g, ''));
  }
  static error() {
    log.on('error', function error() {
      /* eslint-disable no-console */
      const args = Array.prototype.slice.call(arguments);
      args.unshift(Log.color.cyan('mrdoc'));
      console.log.apply(console, args.map(i => Log.color.red(i)));
      /* eslint-enable no-console */
    });
  }
  static other(level) {
    log.on(level, function logger() {
      /* eslint-disable no-console */
      const args = Array.prototype.slice.call(arguments);
      args.unshift(Log.color.cyan('mrdoc'));
      console.log.apply(console, args);
      /* eslint-enable no-console */
    });
  }
  static get color() {
    return Utils.Log.color;
  }
}

module.exports = Log;
