"use strict";
var JavaScript = require('./javascript');
/**
 * Parser
 */
var Parser = (function () {
    function Parser(config) {
        this.config = config;
    }
    Parser.prototype.factory = function () {
        switch (this.config.language) {
            case 'javascript':
                return new JavaScript(this.config.version, this.config.parser);
        }
    };
    return Parser;
}());
module.exports = Parser;
