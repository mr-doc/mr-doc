"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const TomLexer_1 = require("./TomLexer");
const TomParser_1 = require("./TomParser");
exports.default = (input) => {
    // Get the input stream
    return new TomParser_1.TomParser(new antlr4ts_1.CommonTokenStream(new TomLexer_1.TomLexer(new antlr4ts_1.ANTLRInputStream(input)))).documentation();
};
//# sourceMappingURL=index.js.map