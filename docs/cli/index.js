/* eslint-env node */
'use strict';

const FS = require('../utils/fs');
const Log = require('../utils/log');
const Liftoff = require('liftoff');
const Option = require('mr-doc-utils').Option;
const Promise = require('bluebird');
const Yargs = require('yargs');
const ViynlFS = require('vinyl-fs');
const _ = require('lodash');
const log = Log.global();
const pkg = require('../../package.json');
const rc = require('rc');

class CLI {
  /**
   * Parse the CLI arguments.
   * @static
   */
  static parse() {
    return Yargs
    .usage('Usage: mrdoc [options]', Option.cli)
    .showHelpOnFail(false, 'Specify --help for available options')
    .help('help', log.color.gray('Show help.'))
    .alias('help', 'h')
    .argv;
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
      v8flags: require('v8flags'),
    });
  }
  /**
   * Launch the cli.
   * @static
   * @param {Object} - The parsed CLI arguments.
   * @return {Promise<Stream>} - A promise to the stream.
   */
  static launch(argv) {
    return new Promise((resolve, reject) => {
      // Launch the CLI!
      CLI.rocket.launch({
        cwd: argv.cwd,
        configPath: argv.mrdocrc,
      }, env => CLI.handler(env, argv)
      .then(stream => resolve(stream))
      .catch(error => reject(error)));
    });
  }
  /**
   * Handles the result from the CLI.
   * @static
   */
  static handler(env, options) {
    const version = options.version || options.v;
    const source = options.source || options.s;
    if (version) {
      log.info(`${log.color.blue('version:')} ${pkg.version}`);
      process.exit();
    }
    if (_.isEmpty(source) && version === false) {
      log.warn(`${log.color.yellow('No source specified!')} See --help for usage.`);
      process.exit();
    }
    return new Promise((resolve, reject) => {
      // Get the options.
      const sources = source.split(',')
      .map(path => path.trim())
      .map(path => FS.normalize(path, rc('mrdoc', options)));
      // DEBUG: Sources
      log.debug(log.color.blue('Sources:'), sources);
      if (sources.indexOf(null) > -1) {
        reject(`${_.isArray(sources) ? sources.join(', ') : sources} does not exist!`);
      } else resolve({ stream: ViynlFS.src(sources, { cwd: options.cwd }), options });
    });
  }
}

module.exports = CLI;
