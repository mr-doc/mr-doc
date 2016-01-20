/* global describe, it */
var Option = require('../src/option.js');
var assert = require('chai').assert;
describe('Option', function () {
  describe('setOptions', function () {
    it('should allow for relative theme paths', function () {
      var options = new Option();
      options.setOptions({
        source: './',
        theme: './themes/mr-doc'
      });
      assert.equal(options.options.theme.name, './themes/mr-doc');
    });
  });
});