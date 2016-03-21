const assert = require('chai').assert;
const Option = require('../src/Option');

describe('option', function () {
  it('should return helper methods', function () {
    assert.isDefined((new Option().options()));
  })
  describe('option.parser', function () {
    it('should return an object', function () {
      assert.isObject(Option.parser())
    })
    it('should return an extended object', function () {
      assert.deepEqual(Option.parser({ engine: 'babylon'}), { language: 'javascript', engine: 'babylon', version: '6' })
    })
  })
  describe('option.compiler', function () {
    it('should return an object', function () {
      assert.isObject(Option.compiler())
    })
    it('should return an extended object', function () {
      assert.deepEqual(Option.compiler({
        file: {
          format: 'html'
        }
      }), {
        file: {
          name: 'files',
          format: 'html'
        },
        template: {
          path: null,
          engine: 'jade'
        }
      })
    })
  })
})
