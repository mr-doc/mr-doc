#!/usr/bin/env node
/* eslint-env node */
'use strict';
import Utils from 'mr-doc-utils';
import CLI from '../src/cli';
import MrDoc from '../';

const { Log } = Utils;
const log = new Log();

// Parse the arguments.
CLI.parse()
// Setup Log.
.then(options => CLI.log(options))
// Launch the CLI.
.then(options => CLI.launch(options))
// Start documentation.
.then(result => MrDoc.generate(result.stream, result.options))
// DEBUG: Land (with success)
.then(() => log.debug(Log.color.blue('Landed CLI with success')))
.catch(error => {
  log.error(error);
  // DEBUG: Land (with failure)
  log.debug(Log.color.blue('Landed CLI with failure'));
});
