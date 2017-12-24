/* eslint-env node */

'use strict';

const { Source, Option } = require('mr-doc-utils');
const Log = require('../utils/log');
const Liftoff = require('liftoff');
const Promise = require('bluebird');
const Yargs = require('yargs');
const ViynlFS = require('vinyl-fs');
const _ = require('lodash');
const pkg = require('../../package.json');
const rc = require('rc');

const log = new Log();
const v8flags = require('v8flags');

class CLI {
  /**
   * Parse the CLI arguments.
   * @static
   * @return {Promise<options>} - A promise to the options.
   */
  static parse() {
    return Promise.resolve(Yargs
      .usage('$0 [options]')
      .options(Option.cli)
      .help('help', Log.color.gray('Show help.'))
      .alias('help', 'h')
      .argv);
  }
  /**
   * Setup the logger.
   * @param  {Object} options - The parsed CLI arguments.
   * @return {Promise<options>} - A promise to the options.
   */
  static log(options) {
    return Promise.resolve((() => {
      // Get log level.
      const level = options.level || options.l || Option.defaults.log.level;
      // Set up the logger.
      Log.setup({
        level: level !== 'silent' ? level : '',
        silent: level === 'silent',
      });
      return options;
    })());
  }
  /**
   * Create the CLI.
   * @static
   * @return {Liftoff} - An instance of Liftoff.
   */
  static get rocket() {
    // Create the CLI.
    return new Liftoff({
      name: 'mrdoc',
      processTitle: 'mrdoc',
      v8flags,
    });
  }
  /**
   * Launch the CLI.
   * @static
   * @param {Object} options - The parsed CLI arguments.
   * @return {Promise<Stream>} - A promise to the stream.
   */
  static launch(options) {
    // DEBUG: Launch
    log.debug(Log.color.blue('Launching CLI'));
    return new Promise((resolve, reject) => {
      // Launch the CLI
      CLI.rocket.launch({
        cwd: options.cwd,
        configPath: options.mrdocrc,
      }, env => CLI.handler(env, options)
        .then(stream => resolve(stream))
        .catch(error => reject(error)));
    });
  }
  /**
   * Handle the result from the CLI.
   * @private
   * @static
   * @return {Promise<options>} - A promise to the options.
   */
  static handler(env, options) {
    const version = options.version || options.v;
    const source = options.source || options.s;
    if (version) {
      log.info(`${Log.color.blue('version:')} ${pkg.version}`);
      process.exit();
    }
    if (_.isEmpty(source) && version === false) {
      log.warn(`${Log.color.yellow('No source specified!')} See --help for usage.`);
      process.exit();
    }
    return new Promise((resolve, reject) => {
      // Normalize the source's path(s).
      const sources = Source.normalizePath(source, Option.normalize(rc('mrdoc', options)));
      // DEBUG: Sources
      log.debug(Log.color.blue('Sources:'), sources);
      if (sources.indexOf(null) > -1) {
        reject(new Error(`${_.isArray(sources) ? sources.join(', ') : sources} does not exist!`));
      } else resolve({ stream: ViynlFS.src(sources, { cwd: options.cwd }), options });
    });
  }
}

module.exports = CLI;