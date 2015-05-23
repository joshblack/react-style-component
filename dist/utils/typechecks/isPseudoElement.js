'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isPseudoElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _pseudoElements = require('./pseudo-elements');

var _pseudoElements2 = _interopRequireDefault(_pseudoElements);

function isPseudoElement(key) {
  return _pseudoElements2['default'].has(key);
}

module.exports = exports['default'];