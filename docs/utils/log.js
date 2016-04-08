/* eslint-env node */
'use strict';

/* eslint-env node */
const Utils = require('mr-doc-utils');
const log = new Utils.Log();
const _ = require('lodash');

class Log {
  constructor(options) {
    if (options.silent) {
      log.on('error', () => { /* NOOP */});
      return log;
    }
    this.levels(options.level)
    .forEach(level => {
      if (level === 'error') this.error();
      else this.other(level);
    });
    return log;
  }
  levels(level) {
    const levels = _.isString(level) ? level.split(',') : level;
    return levels
    .map(i => i.replace(/\s/g, ''));
  }
  error() {
    log.on('error', function error() {
      /* eslint-disable no-console */
      const args = Array.prototype.slice.call(arguments);
      args.unshift(log.color.cyan('mrdoc'));
      console.log.apply(console, args.map(i => log.color.red(i)));
      /* eslint-enable no-console */
    });
  }
  other(level) {
    log.on(level, function logger() {
      /* eslint-disable no-console */
      const args = Array.prototype.slice.call(arguments);
      args.unshift(log.color.cyan('mrdoc'));
      console.log.apply(console, args);
      /* eslint-enable no-console */
    });
  }
  /**
   * Get the global instance of Log.
   * @return {Log} - An instance of Log.
   */
  static global() {
    log.color = Utils.Log.color;
    return log;
  }
}

module.exports = Log;
