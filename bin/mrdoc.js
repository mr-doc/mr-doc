#!/usr/bin/env node
/* eslint-env node */
'use strict';

const Option = require('mr-doc-utils').Option;
const debug = require('../src/utils/debug');
const CLI = require('../src/cli');

// Parse the arguments
const argv = CLI.parse();
const level = argv.level || argv.l;
// Set up the logger.
debug(Option.log({
  level: level !== 'silent' ? level : ['info', 'warn'],
  silent: level === 'silent',
}));
// Launch the CLI.
CLI.launch(argv);
