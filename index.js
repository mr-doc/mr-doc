'use strict';

const Parser = require('./packages/mr-doc-parser');
const Compiler = require('./packages/mr-doc-compiler');
const Theme = require('./packages/mr-doc-theme');
const Path = require('path');
const Promise = require('bluebird');
// const _ = require('lodash');
// console.log();
// results.forEach(i => console.log(Object.keys(i)));
// console.log();
// var count = 0;
// results.forEach(i => {
//  console.log(`Index: ${count++}`);
//  console.log();
//   console.log('description: ', i.description);
//   console.log('range: ', i.context.range);
//   console.log('tags: ', i.tags);
//   console.log('context.code:\n', i.context.code);
//   console.log();
//   console.log(i.context.file.path);
// });

module.exports = (files, options) => (new Promise((resolve, reject) => {
    try {
      const parser = (new Parser(options.parser())).factory(),
        compiler = (new Compiler(options.compiler())).factory(),
        theme = (new Theme(options));
        let results = files.map(file => {
          return {
            id: file.id,
            path: file.path,
            name: Path.parse(file.path).base,
            result: compiler.compile(parser.parse(file))
          }
        });
        switch (options.compiler().file.format) {
          case 'json':
            resolve(results);
            break;
          case 'html':
          console.log('IN HTML');
            theme.installAsync(results)
            .then(result => resolve(result))
            .error((error, message) => reject(error, message));
          break;
        }
    } catch (e) {
      reject(e);
    }
  }));
