'use strict';

import Utils, { DocOptions } from 'mr-doc-utils';
import DocLog from '../utils/log';
import * as Liftoff from 'liftoff';
import * as Yargs from 'yargs';
import * as ViynlFS from 'vinyl-fs';
import * as _ from 'lodash';
import * as globby from 'globby';
import rc = require('rc');

const v8flags = require('v8flags');
const pkg = require('../../package.json');
const { Option, Log } = Utils;
const log = new Log();

interface DocStream {
  stream: NodeJS.ReadWriteStream,
  options: DocOptions
}

/**
 * @class CLI - Parses the cli arguments and launches generator.
 */
export default class CLI {
  static parse() {
    return Promise.resolve(Yargs
      .usage('$0 [options]')
      .options(Option.cli())
      .help('help', Log.color.gray('Show help.'))
      .alias('help', 'h')
      .argv);
  }

  static log(options) {
    return Promise.resolve((() => {
      // Get log level.
      const level = options.level || options.l || Option.options().log.level;
      // Set up the logger.
      DocLog.setup({
        level: level !== 'silent' ? level : '',
        silent: level === 'silent',
      });
      return options;
    })());
  }

  static get rocket() {
    // Create the CLI.
    return new Liftoff({
      name: 'mrdoc',
      processTitle: 'mrdoc',
      v8flags,
    });
  }

  static launch(options): Promise<DocStream> {
    // DEBUG: Launch
    log.debug(Log.color.blue('Launching CLI'));
    return new Promise((resolve, reject) => {
      // Launch the CLI
      CLI.rocket.launch({
        cwd: options.cwd,
        configPath: options.docrc,
      }, env => CLI.handler(env, options)
        .then(resolve)
        .catch(reject));
    });
  }

  static handler(env, options): Promise<DocStream> {
    const version = options.version || options.v;
    let source: string | string[] = options.source || options.s;
    // Print version
    if (version) {
      log.info(`${Log.color.blue('version:')} ${pkg.version}`);
      process.exit();
    }

    // Check if a source exists
    if (_.isEmpty(source) && version === false) {
      log.warn(`${Log.color.yellow('No source specified!')} See --help for usage.`);
      process.exit();
    }
    return new Promise((resolve, reject) => {
      options = rc('doc', Option.merge(options, true));
      source = [source].concat(
        (<DocOptions>options).mrdoc.include,
        (<DocOptions>options).mrdoc.exclude
          .map(s => '!' + s)
      ) as string[];

      // const paths = await globby(source);
      const cwd = (<DocOptions>options).mrdoc.cwd;
      (async () => {
        try {
          resolve(({
            // Using globby since it handles
            // globs better than ViynlFS
            stream: ViynlFS.src(await globby(source), {
              cwd: _.isEmpty(cwd) ? process.cwd() : cwd
            }), options
          }));
        } catch (error) {
          reject(new Error("Could not glob the sources!"));
        }
      })()
    });
  }
}