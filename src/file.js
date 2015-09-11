'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _whenNode = require('when/node');

var _whenNode2 = _interopRequireDefault(_whenNode);

exports['default'] = _whenNode2['default'].liftAll(_fsExtra2['default'], function (promisedFs, liftedFunc, name) {
  promisedFs[name + 'Async'] = liftedFunc;
  return promisedFs;
});
module.exports = exports['default'];
//# sourceMappingURL=source maps/file.js.map