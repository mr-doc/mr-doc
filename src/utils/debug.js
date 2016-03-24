'use strict';

/* eslint-env node */
const log = require('./log');
const _ = require('lodash');

module.exports = function debug(options) {
  // Return immediately if logging is not desired.
  if (options.silent) {
    // Keep from crashing process when silent.
    log.on('error', () => {/* NOOP */});
    return;
  }
  let levels = options.level;
  levels = _.isString(levels) ? levels.split(',') : levels;
  levels
  .map(level => level.replace(/\s/g, ''))
  .forEach(level => {
    if (level === 'error') {
      log.on(level, function error() {
        /* eslint-disable no-console */
        const args = Array.prototype.slice.call(arguments);
        args.unshift(log.color.cyan('mrdoc'));
        console.log.apply(console, _.map(arguments, args));
        /* eslint-enable no-console */
      });
    } else {
      log.on(level, function logger() {
        /* eslint-disable no-console */
        const args = Array.prototype.slice.call(arguments);
        args.unshift(log.color.cyan('mrdoc'));
        console.log.apply(console, args);
        /* eslint-enable no-console */
      });
    }
  });
};
