/* eslint-env node */
'use strict';

const Log = require('../utils/log');
// const Path = require('path');
const pkg = require('../../package.json');
const rc = require('rc');
const Option = require('mr-doc-utils').Option;
const Yargs = require('yargs');
const isGlob = require('is-glob');
const _ = require('lodash');
const Path = require('path');
const Liftoff = require('liftoff');
const gstream = require('glob-stream');
const log = Log.global();

class CLI {
  static parse() {
    // Parse the Arguments!
    return Yargs
    .usage('Usage: mrdoc [options]', Option.cli())
    .showHelpOnFail(false, 'Specify --help for available options')
    .help('help', log.color.gray('Show help.'))
    .alias('help', 'h')
    .argv;
  }
  static launch(argv) {
    // Create the CLI.
    const rocket = new Liftoff({
      name: 'mrdoc',
      processTitle: 'mrdoc',
      v8flags: require('v8flags'),
    });
    // Launch it!
    rocket.launch({
      cwd: argv.cwd,
      configPath: argv.mrdocrc,
    }, env => CLI.handler(env, argv));
  }
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
    // Get the options.
    const opts = rc('mrdoc', Option.merge(options));
    // Split the string if it contains commas.
    let sources = opts.mrdoc.source.indexOf(',') > -1 ?
    opts.mrdoc.source.split(',') : opts.mrdoc.source;
    // Check if sources is not an array.
    if (_.isString(sources) && !isGlob(sources)) {
      // Make sure the path is resolved.
      sources = Path.resolve(opts.mrdoc.cwd, sources);
      // Check to see if '/' is at the end.
      sources = sources[sources.length - 1] === '/' ?
      sources : `${sources}/`;
    }
    return gstream.create(sources, { cwd: opts.mrdoc.cwd });
  }
}

module.exports = CLI;
