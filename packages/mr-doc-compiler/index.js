"use strict";
const JSON = require('./src/compilers/json');
const HTML = require('./src/compilers/html');
class Compiler {
    constructor(options) {
        this.options = options;
    }
    factory() {
        switch (this.options.file.format) {
            case 'json':
                return (new JSON(this.options));
            case 'html':
                return (new HTML(this.options));
        }
    }
}
module.exports = Compiler;
//# sourceMappingURL=index.js.map