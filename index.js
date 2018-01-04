'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mr_doc_utils_1 = require("mr-doc-utils");
const output_1 = require("./src/utils/output");
const VinylFS = require("vinyl-fs");
const mr_doc_parser_1 = require("mr-doc-parser");
// const Compiler = require('mr-doc-compiler');
const { Option, Log } = mr_doc_utils_1.default;
const log = new Log();
class MrDoc {
    static generate(stream, options) {
        return new Promise(resolve => {
            const output = options.output || options.o || Option.options().mrdoc.output;
            stream
                .pipe(MrDoc.gulp(Option.merge(options, true)))
                .pipe(VinylFS.dest(output))
                .on('end', () => {
                log.debug(Log.color.blue('Mr. Doc compiled successfully'));
                resolve();
            });
        });
    }
    static gulp(options) {
        return (new output_1.default(options))
            .use(MrDoc.parser)
            .use(options => (options) => [])
            .toStream();
    }
    // static grunt() {
    //   //
    // }
    static parser(options) {
        // return (new Parser(options)).parse(;
        return new mr_doc_parser_1.default(options.parser);
    }
}
exports.default = MrDoc;
//# sourceMappingURL=index.js.map