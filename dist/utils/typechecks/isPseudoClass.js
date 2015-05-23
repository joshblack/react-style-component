'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isPseudoClass;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _pseudoClasses = require('./pseudo-classes');

var _pseudoClasses2 = _interopRequireDefault(_pseudoClasses);

function isPseudoClass(key) {
  return _pseudoClasses2['default'].has(key);
}

module.exports = exports['default'];