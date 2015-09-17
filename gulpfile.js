var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var beautify = require('gulp-jsbeautify');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');
var rimraf = require('rimraf');

/* Formats the files */
gulp.task('beautify', function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(beautify({
      "indent_size": 2,
      "indent_char": " ",
      "eol": "\n",
      "indent_level": 0,
      "indent_with_tabs": false,
      "preserve_newlines": true,
      "max_preserve_newlines": 10,
      "jslint_happy": true,
      "space_after_anon_function": false,
      "brace_style": "collapse",
      "keep_array_indentation": false,
      "keep_function_indentation": false,
      "space_before_conditional": true,
      "break_chained_methods": false,
      "eval_code": false,
      "unescape_strings": false,
      "wrap_line_length": 0,
      "wrap_attributes": "auto",
      "wrap_attributes_indent_size": 4,
      "end_with_newline": false
    }))
    .pipe(gulp.dest('./lib'));
});

/*
 * Clean the docs themes folder
 */
gulp.task('clean-docs', ['gh-pages'], function (cb) {
  rimraf('./docs/themes', cb);
});

/*
 * Push to the gh-pages branch
 */
gulp.task('gh-pages', ['doc'], function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages({force:true}));
});

/* Checks the coding style and builds from ES6 to ES5*/
gulp.task('lib',['beautify'],function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("./source maps/"))
    .pipe(gulp.dest('./src'));
});

/* Watches for changes and applies the build task*/
gulp.task('watch', function () {
  return gulp.watch('./lib/**/**/*.js', ['build']);
});

/* Runs tests */
gulp.task('mocha', ['beautify','lib'],function () {
  return gulp.src('./test/**/**/*.js', { read: false })
    .pipe(mocha())
    .once('end', function () {});
});

/* Runs the doxx command and builds the docs 
 * Install other themes here, generate docs for each.
*/
gulp.task('doc', ['build'], shell.task([
  'npm install doxx-theme-default',
  './bin/doxx --source lib --target docs/themes/doxx-theme-default --title Doxx'  
]));

gulp.task('default', ['beautify', 'lib', 'watch']);

gulp.task('build', ['beautify', 'lib', 'mocha']);

gulp.task('docs', ['build', 'doc', 'gh-pages', 'clean-docs']);

gulp.task('test', ['mocha']);
