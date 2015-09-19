'use strict';
/* Dev-Dependencies */
var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var babel       = require('gulp-babel');
var mocha       = require('gulp-mocha');
var jshint      = require('gulp-jshint');
var beautify    = require('gulp-jsbeautify');
var shell       = require('gulp-shell');
var ghPages     = require('gulp-gh-pages');
var rimraf      = require('rimraf');

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
    .pipe(beautify(require('./config').beautify))
    .pipe(gulp.dest('./lib'));
});

/*
 * Clean the docs themes folder
 */
gulp.task('clean-docs', ['gh-pages'], function (cb) {
  rimraf('./docs/themes', cb);
});

/*
 * Create the gh-pages branch - wont push automatically
 */
gulp.task('gh-pages', ['doc'], function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages({push:false}));
});


/* Checks the coding style and builds from ES6 to ES5*/
gulp.task('lib',['beautify'],function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
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
gulp.task('doc', ['build'], shell.task([  
  './bin/doxx --source lib --target docs/themes/doxx-theme-default --title Doxx'  
]));

gulp.task('default', ['backup','beautify', 'lib', 'watch']);

gulp.task('build', ['backup','beautify', 'lib', 'mocha']);

gulp.task('docs', ['build', 'doc', 'gh-pages', 'clean-docs']);

gulp.task('test', ['mocha']);
