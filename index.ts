'use strict';
import Utils from 'mr-doc-utils';
import Output from './src/utils/output';
import * as VinylFS from 'vinyl-fs';
import Parser from 'mr-doc-parser';
import { DocOptions } from 'mr-doc-utils/src/option';

// const Compiler = require('mr-doc-compiler');
const { Option, Log } = Utils;

const log = new Log();

export default class MrDoc {
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
    return (new Output(options))
    .use(MrDoc.parser)
    .use(options => (options) => [])
    // .use(MrDoc.compiler)
    .toStream();
  }
  // static grunt() {
  //   //
  // }
  static parser(options: DocOptions) {
    // return (new Parser(options)).parse(;
    return new Parser(options.parser);
  }
  // static compiler(options) {
  //   return (new Compiler(options)).factory();
  // }
}