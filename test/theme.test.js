/* global describe, it */
var Theme = require('../src/theme.js');
var assert = require('chai').assert;
var Path = require('path');
describe('Theme', function () {
  describe('findTheme', function () {
    it('should allow for relative theme paths', function () {
      assert.equal(Theme.findTheme({
        private: true,
        theme: {
          name: './node_modules/mr-doc-theme-cayman'
        }
      }).path, Path.normalize(Path.join(process.cwd(),'/node_modules/mr-doc-theme-cayman')));
    });
  });
});