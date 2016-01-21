/* global describe, it */
var Theme = require('../src/theme.js');
var assert = require('chai').assert;
describe('Theme', function () {
  describe('findTheme', function () {
    it('should allow for relative theme paths', function () {
      assert.equal(Theme.findTheme({
        private: true,
        theme: {
          name: './node_modules/mr-doc-theme-cayman'
        }
      }).path, process.cwd() + '/node_modules/mr-doc-theme-cayman');
    });
  });
});