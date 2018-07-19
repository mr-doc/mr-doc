'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mr_doc_utils_1 = require("mr-doc-utils");
const log_1 = require("../utils/log");
const Liftoff = require("liftoff");
const Yargs = require("yargs");
const ViynlFS = require("vinyl-fs");
const _ = require("lodash");
const globby = require("globby");
const rc = require("rc");
const v8flags = require('v8flags');
const pkg = require('../../package.json');
const { Option, Log } = mr_doc_utils_1.default;
const log = new Log();
/**
 * @class CLI - Parses the cli arguments and launches generator.
 */
class CLI {
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
            log_1.default.setup({
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
    static launch(options) {
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
    static handler(env, options) {
        const version = options.version || options.v;
        let source = options.source || options.s;
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
            source = [source].concat(options.mrdoc.include, options.mrdoc.exclude
                .map(s => '!' + s));
            // const paths = await globby(source);
            const cwd = options.mrdoc.cwd;
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    resolve(({
                        // Using globby since it handles
                        // globs better than ViynlFS
                        stream: ViynlFS.src(yield globby(source), {
                            cwd: _.isEmpty(cwd) ? process.cwd() : cwd
                        }), options
                    }));
                }
                catch (error) {
                    reject(new Error("Could not glob the sources!"));
                }
            }))();
        });
    }
}
exports.default = CLI;
//# sourceMappingURL=index.js.map