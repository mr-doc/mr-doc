/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mr_doc_utils_1 = require("mr-doc-utils");
const _ = require("lodash");
const log = new mr_doc_utils_1.default.Log();
class Log {
    constructor() {
        return log;
    }
    /**
     * Set up the logger.
     * @static
     */
    static setup(options) {
        if (options.silent) {
            log.on('error', () => { });
        }
        Log.levels(options.level)
            .forEach(level => {
            if (level === 'error')
                Log.error();
            else
                Log.other(level);
        });
    }
    /**
     * Set the log levels.
     * @private
     * @static
     * @return {String} - The normalized levels.
     */
    static levels(level) {
        const levels = _.isString(level) ? level.split(',') : level;
        return levels.map(i => i.replace(/\s/g, ''));
    }
    /**
     * Set up the error logger.
     * @private
     * @static
     */
    static error() {
        log.on('error', function error() {
            /* eslint-disable no-console */
            const args = Array.prototype.slice.call(arguments);
            args.unshift(Log.color[Log.levelColor('error')]('[error]:'));
            args.unshift(Log.color.cyan('mrdoc'));
            console.log(...args.map(i => Log.color.red(i)));
            /* eslint-enable no-console */
        });
    }
    /**
     * Set up the other loggers.
     * @private
     * @static
     */
    static other(level) {
        log.on(level, function logger() {
            /* eslint-disable no-console */
            const args = Array.prototype.slice.call(arguments);
            args.unshift(Log.color[Log.levelColor(level)](`[${level}]:`));
            args.unshift(Log.color.cyan('mrdoc'));
            console.log(...args);
            /* eslint-enable no-console */
        });
    }
    static get color() {
        return mr_doc_utils_1.default.Log.color;
    }
    static levelColor(level) {
        return ({
            info: 'green',
            debug: 'blue',
            warn: 'yellow',
            error: 'red',
        })[level];
    }
}
exports.default = Log;
//# sourceMappingURL=log.js.map