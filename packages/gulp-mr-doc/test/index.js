'use strict';
const assert = require('chai').assert;
const mrdoc = require('../');
const gulp = require('gulp');
const Path = require('path');

describe('gulp-mr-doc', function() {
  describe('mrdoc', function () {
    it('should exist', function () {
      assert.isOk(mrdoc());
    });
  });
  describe('json', function () {
    it('should output', function (done) {
      gulp.src(Path.join(__dirname, '/fixtures/dir1/index.js'))
        .pipe(mrdoc({ compiler: { file: { format: 'json'} } }))
        .on('data', function(data) {
          let contents = JSON.parse(data.contents);
          assert.isDefined(contents);
          assert.isOk(contents);
          done();
        });
    })
  })

  describe('html', function () {
    describe('theme', function () {
      it('should output', function (done) {
        return gulp.src(Path.join(__dirname, '/fixtures/dir1/index.js'))
          .pipe(mrdoc({ compiler: { file: { format: 'html'} } }))
          .pipe(gulp.dest('docs'))
          .on('end', function () {
            console.log('done');
            done();
          });
        });
      });
    });

});
