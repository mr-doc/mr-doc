/* eslint-env node */
'use strict';

const Extension = require('../utils/extension');
const File = require('fs-extra');
const Log = require('../utils/log');
const Liftoff = require('liftoff');
const Option = require('mr-doc-utils').Option;
const Path = require('path');
const Promise = require('bluebird');
const Yargs = require('yargs');
const ViynlFS = require('vinyl-fs');
const isGlob = require('is-glob');
const log = Log.global();
const pkg = require('../../package.json');
const rc = require('rc');
const _ = require('lodash');

class CLI {
  /**
   * Parse the CLI arguments.
   * @static
   */
  static parse() {
    return Yargs
    .usage('Usage: mrdoc [options]', Option.cli())
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
      const opts = rc('mrdoc', Option.merge(options));
      const sources = opts.mrdoc.source.split(',')
      .map(path => path.trim())
      .map(path => {
        // Check if the path is not in glob pattern.
        if (!isGlob(path)) {
          // Assume that Glob is used.
          let isFile = false;
          // Make sure the path is resolved.
          let str = Path.resolve(opts.mrdoc.cwd, path).replace('/', Path.sep);
          // Check if the path is a file or directory.
          if (_.isEmpty(Path.parse(path).ext)) {
            // Check if the path has a '/' at the end.
            str = str[str.length - 1] === Path.sep ?
            str : `${str}${Path.sep}`;
          } else isFile = true;
          // Make sure the file or directory exists;
          if (File.existsSync(str)) {
            if (!isFile) {
              // Check if the directory has sub-directories.
              const hasSubDirs = File.readdirSync(str)
              .filter(file =>
                File.statSync(Path.join(str, file)).isDirectory()).length > 1;
              // Get the file extension.
              const extension = Extension.find(opts.parser.language);
              // Set the glob pattern based on 'hasSubDirs'.
              str = hasSubDirs ?
              `${str}**${Path.sep}*${extension}` : `${str}*${extension}`;
            }
          } else return null;
          return str;
        }
        return path;
      });
      // DEBUG: Sources
      log.debug(log.color.blue('Sources:'), sources);
      if (sources.indexOf(null) > -1) {
        reject(`${_.isArray(sources) ? sources.join(', ') : sources} does not exist!`);
      } else resolve({ stream: ViynlFS.src(sources, { cwd: opts.mrdoc.cwd }), options: opts });
    });
  }
}

module.exports = CLI;
