'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isPseudo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isPseudoClass = require('./isPseudoClass');

var _isPseudoClass2 = _interopRequireDefault(_isPseudoClass);

var _isPseudoElement = require('./isPseudoElement');

var _isPseudoElement2 = _interopRequireDefault(_isPseudoElement);

function isPseudo(key) {
  return _isPseudoClass2['default'](key) || _isPseudoElement2['default'](key);
}

module.exports = exports['default'];