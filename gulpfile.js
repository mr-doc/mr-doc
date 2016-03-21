const gulp = require('gulp');
const mrdoc = require('./packages/gulp-mr-doc');

gulp.task('docs', function () {
  return gulp.src('test/fixtures/**/**.js')
  .pipe(mrdoc({
    compiler: {
      file: {
        format: 'html'
      }
    }
  }))
  .pipe(gulp.dest('docs/'))
})
