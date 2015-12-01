'use strict';
/*global process*/

/* Dev-Dependencies */
var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    Path        = require('path'),
    babel       = require('gulp-babel'),
    mocha       = require('gulp-mocha'),
    jshint      = require('gulp-jshint'),
    beautify    = require('gulp-jsbeautify'),
    exec        = require('child_process').exec,
    ghPages     = require('gulp-gh-pages'),
    rimraf      = require('rimraf'),
    config      = require('./config');

/** Backs up the files in case of emergency! */
gulp.task('backup', function () {
  return gulp
    .src('lib/**/**/**.js')
    .pipe(gulp.dest('./.backup'));
});

gulp.task('recover', function(){
  return gulp
  .src('./.backup/**/**/*.js')
  .pipe(gulp.dest('lib/'));
});

/* Formats the files */
gulp.task('beautify', ['backup'],function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(beautify(config.beautify))
    .pipe(gulp.dest('./lib'));
});

/*
 * Clean the docs themes folder
 */
gulp.task('clean:docs', ['gh-pages'], function (cb) {
  rimraf('./docs/', cb);
});

/*
 * Create the gh-pages branch - wont push automatically
 */
gulp.task('gh-pages', ['doc'], function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});


/* Checks the coding style and builds from ES6 to ES5*/
gulp.task('lib',['beautify'],function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(jshint(config.jshint))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('./source maps/'))
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

/* 
 * Runs the doxx command and builds the docs 
* Install other themes here, generate docs for each.
*/
var doc = {
  bin: Path.normalize('./bin/mr-doc'),
  source: ' -s ' + Path.normalize('lib/'),
  output: ' -o ' + Path.normalize('docs/'),
  name:   ' -n ' + '"Mr. Doc"',
  theme:  ' -t ' + '"cayman"'
};
var isWin32 = process.platform === 'win32';
gulp.task('doc', ['build'], function(cb){
  var command = doc.bin + doc.source + doc.output + doc.name + doc.theme;
  exec(isWin32 ? 'node ' + command : command, cb);
});

gulp.task('default', ['backup','beautify', 'lib', 'watch']);

gulp.task('build', ['backup','beautify', 'lib', 'mocha']);

gulp.task('docs', ['build', 'doc', 'gh-pages', 'clean:docs']);

gulp.task('test', ['mocha']);
