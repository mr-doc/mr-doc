/* eslint-env node */
'use strict';

const log = require('../utils/log');
const Path = require('path');
const Option = require('mr-doc-utils').Option;
const File = require('fs-extra');

class Options {
  static join(options) {
    return {
      mrdoc: {
        source: options.source || options.s,
        output: options.output || options.o,
        cwd: options.cwd,
      },
      compiler: Option.compiler({
        file: {
          name: options.formatName,
          format: options.format,
        },
        template: {
          path: options.template || options.b || null,
          engine: options.compilerEngine,
        },
      }),
      parser: Option.parser({
        language: options.parserLang,
        engine: options.parserEngine,
        version: options.parserVersion,
      }),
      theme: Option.theme({
        name: !File.lstatSync(options.theme).isDirectory() ?
        options.theme : 'Custom theme',
        path: File.lstatSync(options.theme).isDirectory() ?
        options.theme : null,
      }),
    };
  }

  static cli() {
    return {
      version: {
        alias: 'v',
        type: 'boolean',
        describe: log.color.gray('Print the global version.'),
      },
      mrdocrc: {
        type: 'string',
        default: Path.join(process.cwd(), '.mrdocrc'),
        describe: log.color.gray(
          `Set path to .mrdocrc.
          This will set the cwd to the rc's directory as well.`),
      },
      cwd: {
        type: 'string',
        default: Path.normalize(process.cwd()),
        describe: log.color.gray('Set the cwd.'),
      },
      'compiler-engine': {
        type: 'string',
        default: 'jade',
        describe: log.color.gray('Set the compiler engine specific to the output format.'),
      },
      source: {
        alias: 's',
        type: 'string',
        describe: log.color.gray(
          'Set the source directory(-ies). Note: Glob notation is allowed.'),
      },
      output: {
        alias: 'o',
        type: 'string',
        default: Path.join(process.cwd(), 'docs/'),
        describe: log.color.gray('Set the output directory.'),
      },
      format: {
        alias: 'f',
        type: 'string',
        default: 'html',
        describe: log.color.gray('Set the output format. Formats: html, json, md'),
      },
      'format-name': {
        type: 'string',
        default: 'docs',
        describe: log.color.gray('Set the output name. Note: Only in json and md format.'),
      },
      template: {
        alias: 'b',
        type: 'string',
        describe: log.color.gray('Set the template file to use.'),
      },
      theme: {
        alias: 't',
        type: 'string',
        // TODO: Replace this with mr-doc-theme-default
        default: 'mr-doc-theme-starter-kit',
        describe: log.color.gray('Set the theme to use. Note: Name or path is allowed.'),
      },
      'parser-lang': {
        type: 'string',
        default: 'javascript',
        describe: log.color.gray(
          'Set the language of the sources. Note: This is automatically detected.'),
      },
      'parser-engine': {
        alias: 'e',
        type: 'string',
        default: 'espree',
        describe: log.color.gray(
          'Set the parser engine (if applicable). i.e. espree, babylon, etc.'),
      },
      'parser-version': {
        alias: 'y',
        type: 'number',
        default: 6,
        describe: log.color.gray('Set the parser version. i.e. "6"'),
      },
      log: {
        alias: 'l',
        type: 'string',
        describe: log.color.gray(`Set the log level. Levels: ${[
          log.color.green('debug'),
          log.color.blue('info'),
          log.color.yellow('warn'),
          log.color.red('error'),
          log.color.gray('silent'),
        ].join(', ')}`),
        required: false,
        default: 'info, warn',
      },
    };
  }
}

module.exports = Options;
