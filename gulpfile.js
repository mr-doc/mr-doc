'use strict';
/* Dev-Dependencies */
var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    mocha       = require('gulp-mocha'),
    jshint      = require('gulp-jshint'),
    beautify    = require('gulp-jsbeautify'),
    shell       = require('gulp-shell'),
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
gulp.task('clean-docs', ['gh-pages'], function (cb) {
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
gulp.task('doc', ['build'], shell.task([  
  './bin/mr-doc -s lib/ -o docs/ -n "Mr. Doc" -t cayman'  
]));

gulp.task('default', ['backup','beautify', 'lib', 'watch']);

gulp.task('build', ['backup','beautify', 'lib', 'mocha']);

gulp.task('docs', ['build', 'doc', 'gh-pages', 'clean-docs']);

gulp.task('test', ['mocha']);
