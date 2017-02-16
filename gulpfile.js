const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => gulp
    .src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

gulp.task('mocha', ['eslint'], () => gulp
    .src('test/*.mocha.js', { read: false })
    .pipe(mocha()));

gulp.task('default', ['eslint', 'mocha']);
