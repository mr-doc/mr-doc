"use strict";
const JavaScript = require('./src/parsers/javascript');
class Parser {
    constructor(config) {
        this.config = config;
    }
    factory() {
        switch (this.config.language) {
            case 'javascript':
                return new JavaScript(this.config.version, this.config.parser);
        }
    }
}
module.exports = Parser;
//# sourceMappingURL=index.js.map