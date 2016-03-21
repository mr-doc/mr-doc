'use strict';

const through2 = require('through2'),
  Vinyl = require('vinyl'),
  // TODO: Change this to mr-doc
  MrDoc = require('../../'),
  ShortID = require('shortid'),
  File = require('fs-extra'),
  // TODO: Publish mr-doc-utils
  Option = require('../mr-doc-utils').Option;

/**
 * Mr. Doc stream intended for use within the gulp system.
 *
 * @name mrdoc
 * @param {Object} options - The output options: 'compiler', 'parser', 'project', and 'theme'.
 * @param {String} options.parser.language - The language to parse.
 * @param {String} options.parser.engine - The engine to use for the specified langauge (if applicable).
 * @param {String} options.compiler.file.name - The file name of the JSON result.
 * @param {String} options.compiler.file.format - The format type: 'html'or 'json'.
 * @param {String} options.compiler.template.path - Path to template file.
 * @param {String} options.compiler.template.engine - The engine to use to render the template.
 * @param {String} options.compiler.filename - The custom file name for json output.
 * @param {String} options.project.name - The custom file name for your project
 * @param {String} options.project.homepage - The home page url
 * @param {String} options.project.repository - The repository url
 * @param {String} options.theme.name - The name of the theme to use.
 * @param {String} options.theme.path - The path to the theme directory (including assets).
 * @returns {stream.Transform}
 * @example
 * var mrdoc = require('./'),
 *     gulp = require('gulp');
 * // Mr. Doc with HTML (theme) output,
 * gulp.task('mrdoc', function () {
 *   gulp.src('./index.js')
 *     .pipe(mrdoc({
 *       compiler: {
 *         format: 'html'
 *       }
 *     }))
 *     .pipe(gulp.dest('docs'));
 * });
 *
 * // Mr. Doc with JSON output.
 * gulp.task('mrdoc-json', function () {
 *   gulp.src('./index.js')
 *     .pipe(mrdoc({
 *       format: 'json'
 *     }))
 *     .pipe(gulp.dest('docs'));
 * });
 */
module.exports = function mrdoc (options) {
  // TODO: Create a Utils class that handles options and defaults (should go into mr-doc-utils)
  options = (new Option(options)).options();
  let buffer = [];
  return through2.obj((file, enc, callback) => {
    // Store the files in a buffer
    buffer.push(file);
    callback();
  }, function (callback) {
    // Parses and compiles the output
    MrDoc(buffer.map(file => {
      return {
        id: ShortID.generate(),
        path: file.path,
        source: File.readFileSync(file.path, 'utf8'),
        result: undefined
      };
    }), options)
    .then(files => {
      let format = options.compiler().file.format;
      if(format === 'json') {
        this.push(new Vinyl({
          path: options.compiler().file.name + '.json',
          contents: new Buffer(JSON.stringify(files))
        }));
      } else if(format === 'html') {
        files.forEach(file => this.push(file));
      }
      callback();
    }).error(e => console.error(e));
  });
};
