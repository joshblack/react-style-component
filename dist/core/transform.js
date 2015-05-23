'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = transform;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _vendorHyphenate = require('../vendor/hyphenate');

var _vendorHyphenate2 = _interopRequireDefault(_vendorHyphenate);

var _utilsDeepMapKeys = require('../utils/deepMapKeys');

var _utilsDeepMapKeys2 = _interopRequireDefault(_utilsDeepMapKeys);

var _utilsTypechecksIsMedia = require('../utils/typechecks/isMedia');

var _utilsTypechecksIsMedia2 = _interopRequireDefault(_utilsTypechecksIsMedia);

var _utilsTypechecksIsPseudo = require('../utils/typechecks/isPseudo');

var _utilsTypechecksIsPseudo2 = _interopRequireDefault(_utilsTypechecksIsPseudo);

function transform(props, selector) {
  var styles = _utilsDeepMapKeys2['default'](props, _vendorHyphenate2['default']);

  return Object.keys(styles).reduce(function (p, key) {
    if (_utilsTypechecksIsPseudo2['default'](key)) {
      return p.concat.apply(p, _toConsumableArray(transform(styles[key], key)));
    } else if (_utilsTypechecksIsMedia2['default'](key, styles[key])) {
      var _styles$key;

      var _ret = (function () {
        _styles$key = styles[key];
        var rule = _styles$key.rule;
        var queries = _styles$key.queries;
        var value = _styles$key.value;

        // Lift default value
        var declaration = {
          rule: 'declaration',
          selector: selector,
          property: key,
          value: value
        };

        var q = queries.reduce(function (p, query) {
          var _query = _slicedToArray(query, 2);

          var queryString = _query[0];
          var propertyValue = _query[1];

          return p.concat({
            rule: rule,
            selector: selector,
            query: queryString,
            property: key,
            value: propertyValue
          });
        }, []);

        return {
          v: p.concat.apply(p, [declaration].concat(_toConsumableArray(q)))
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    } else {
      return p.concat({
        rule: 'declaration',
        selector: selector,
        property: key,
        value: styles[key]
      });
    }
  }, []);
}

module.exports = exports['default'];