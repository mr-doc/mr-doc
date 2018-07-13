'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Through = require("through2");
const _ = require("lodash");
const mr_doc_utils_1 = require("mr-doc-utils");
const deptree = require("dependency-tree");
// import { CommentParser, Generator } from '../tom/index';
const { Option, Log } = mr_doc_utils_1.default;
const log = new Log();
/**
 * @class Output - Responsible for parsing and compiling the documentation.
 */
class Output {
    constructor(options) {
        this.options = options;
        this.plugins = [];
    }
    use(plugin) {
        this.plugins.push(plugin);
        return this;
    }
    toStream() {
        return Output
            .toStream(this.plugins[0](this.options), this.plugins[1](this.options), this.options);
    }
    /**
     * @param buffer: Viynl[] - A list of files
     * @param parser: IParser - An instance of a class that implements IParser
     * @param compiler: ICompiler - An instance of a class that implements ICompiler
     * @param options: DocOptions
     */
    static handler(buffer, parser, compiler, options) {
        const file = options.compiler.file;
        return function (callback) {
            Output.generate(buffer, parser, compiler, options).forEach(function (f) {
                // console.log(f);
                // if (file.format === 'json' || file.format === 'md') {
                //   this.push(new Vinyl({
                //     path: `${file.name}.${file.format}`,
                //     contents: Buffer.from(f),
                //   }));
                // } else if (file.format === 'html') {
                //   this.push(f);
                // }
            }.bind(this));
            callback();
        };
    }
    /**
     * @function generate - Generates the documentation by parsing and compiling the files.
     * @param buffer: Vinyl[] - A list of files
     * @param parser: IParser - An instance of a class that implements IParser
     * @param compiler: ICompiler - An instance of a class that implements ICompiler
     * @param options: DocOptions
     * @return (Vinyl & { dependency_list: any })
     */
    static generate(buffer, parser, compiler, options) {
        // const files = Reference.generate(buffer, options);
        const dep_opts = (file) => ({
            filename: file.path,
            directory: file.base,
            filter: (path) => !path.includes("node_modules")
        });
        // DEBUG: Buffer
        log.debug(Log.color.blue(`Generating dependency list for ${buffer.length} files.`));
        let files = buffer.map(file => _.merge(file, {
            dependency_list: deptree.toList(dep_opts(file))
        }));
        // Parse the code
        files.map(file => {
            // console.log(file.contents.toString());
            const result = parser.parse({
                name: file.path,
                source: file.contents.toString()
            });
            // TODO: Fix tom for @returns
            // IDEA: May need to rewrite the scanner
            // to support RustDoc like comments. Basically,
            // assume everything is a markdown comment.
            // result.comments.map(comment => _.merge(comment, {
            //   ast: new CommentParser(`/*${comment.value}*/`).parse()
            //     .map(statement => new Generator().print(statement))
            //     .map(statement => JSON.parse(statement)),
            // }))
            // console.log(JSON.stringify(result.comments, null, 2));
        });
        return files;
    }
    static toBuffer(buffer) {
        return (file, enc, callback) => {
            buffer.push(file);
            callback();
        };
    }
    static toStream(parser, compiler, options) {
        const buffer = [];
        return Through.obj(Output.toBuffer(buffer), Output.handler(buffer, parser, compiler, Option.merge(options)));
    }
}
exports.default = Output;
//# sourceMappingURL=output.js.map