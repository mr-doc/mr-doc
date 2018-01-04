#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mr_doc_utils_1 = require("mr-doc-utils");
const cli_1 = require("../src/cli");
const _1 = require("../");
const { Log } = mr_doc_utils_1.default;
const log = new Log();
// Parse the arguments.
cli_1.default.parse()
    .then(options => cli_1.default.log(options))
    .then(options => cli_1.default.launch(options))
    .then(result => _1.default.generate(result.stream, result.options))
    .then(() => log.debug(Log.color.blue('Landed CLI with success')))
    .catch(error => {
    log.error(error);
    // DEBUG: Land (with failure)
    log.debug(Log.color.blue('Landed CLI with failure'));
});
//# sourceMappingURL=mrdoc.js.map