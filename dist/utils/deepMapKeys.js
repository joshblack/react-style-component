'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Deep map the keys of an object. The keys of the object will be passed into
 * the given function and will be reassigned according to the function's result.
 *
 * @param  {Object}
 * @param  {Function}
 * @return {Object}
 */
exports['default'] = deepMapKeys;

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _lodash = require('lodash');

function deepMapKeys(obj, fn) {
  return Object.keys(obj).reduce(function (p, key) {
    return _lodash.isPlainObject(obj[key]) ? _extends({}, p, _defineProperty({}, fn(key), deepMapKeys(obj[key], fn))) : _extends({}, p, _defineProperty({}, fn(key), obj[key]));
  }, {});
}

module.exports = exports['default'];