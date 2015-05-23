'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _typechecksIsMedia = require('./typechecks/isMedia');

var _typechecksIsMedia2 = _interopRequireDefault(_typechecksIsMedia);

var _typechecksIsDeclaration = require('./typechecks/isDeclaration');

var _typechecksIsDeclaration2 = _interopRequireDefault(_typechecksIsDeclaration);

var _typechecksIsPseudoClass = require('./typechecks/isPseudoClass');

var _typechecksIsPseudoClass2 = _interopRequireDefault(_typechecksIsPseudoClass);

var _typechecksIsPseudoElement = require('./typechecks/isPseudoElement');

var _typechecksIsPseudoElement2 = _interopRequireDefault(_typechecksIsPseudoElement);

function getType(key, value) {
  var classifiers = new Map([[_typechecksIsMedia2['default'], 'media'], [_typechecksIsDeclaration2['default'], 'declaration'], [_typechecksIsPseudoClass2['default'], 'pseudoClass'], [_typechecksIsPseudoElement2['default'], 'pseudoElement']]);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = classifiers.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var classifier = _step.value;

      if (classifier(key, value)) return classifiers.get(classifier);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  throw new Error('Invalid Property Type `' + classifiers.get(classifier) + '` on a Style Component');
}

module.exports = exports['default'];