'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isDeclaration;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _declarations = require('./declarations');

var _declarations2 = _interopRequireDefault(_declarations);

var _lodash = require('lodash');

function isDeclaration(key, value) {
  return _declarations2['default'].has(key) && !_lodash.isPlainObject(value);
}

module.exports = exports['default'];