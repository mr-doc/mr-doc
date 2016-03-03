"use strict";
const JSON = require('./src/compilers/json');
class Compiler {
    constructor(config) {
        this.config = config;
    }
    factory() {
        switch (this.config.format) {
            case 'json':
                return (new JSON(this.config));
        }
    }
}
module.exports = Compiler;
//# sourceMappingURL=index.js.map