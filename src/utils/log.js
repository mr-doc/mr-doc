'use strict';

const Log = require('mr-doc-utils').Log;
// Create a global logger
const log = new Log();
// Append the color
log.color = Log.color;
module.exports = log;
