const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('mocha', () => gulp
    .src('test/*.js', { read: false })
    .pipe(mocha()));

gulp.task('default', ['mocha']);
