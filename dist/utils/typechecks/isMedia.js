'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isMedia;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isDeclaration = require('./isDeclaration');

var _isDeclaration2 = _interopRequireDefault(_isDeclaration);

var _lodash = require('lodash');

function isMedia(key, value) {
  return _isDeclaration2['default'](key) && _lodash.isPlainObject(value);
}

module.exports = exports['default'];