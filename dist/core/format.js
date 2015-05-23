'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = format;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _utilsTypechecksIsPseudo = require('../utils/typechecks/isPseudo');

var _utilsTypechecksIsPseudo2 = _interopRequireDefault(_utilsTypechecksIsPseudo);

var _utilsGetType = require('../utils/getType');

var _utilsGetType2 = _interopRequireDefault(_utilsGetType);

function format(styles, className) {
  var str = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = styles.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var key = _step$value[0];
      var value = _step$value[1];

      if (key === 'declarations') {
        var wrapper = wrap(className);

        value = value.map(function (v) {
          var _v = _slicedToArray(v, 2);

          var property = _v[0];
          var value = _v[1];

          return '\t' + property + ': ' + value + ';';
        });

        str = str + wrapper(value.join('\n'));
      } else if (_utilsTypechecksIsPseudo2['default'](key)) {
        var wrapper = wrap(className, key);

        value = value.map(function (v) {
          var _v2 = _slicedToArray(v, 2);

          var property = _v2[0];
          var value = _v2[1];

          return '\t' + property + ': ' + value + ';';
        });

        str = str + wrapper(value.join('\n'));
      } else {
        var wrapper = media(key);
        var inner = '';

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = value.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2);

            var _key = _step2$value[0];
            var values = _step2$value[1];

            var _wrapper = _key === 'declarations' ? wrap(className) : wrap(className, _key);

            if (values.length !== 0) {
              values = values.map(function (v) {
                var _v3 = _slicedToArray(v, 2);

                var property = _v3[0];
                var value = _v3[1];

                return '\t' + property + ': ' + value + ';';
              });

              inner = inner + _wrapper(values.join('\n'));
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        str = str + wrapper(inner);
      }
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

  return str;
}

function media(query) {
  return function inner(content) {
    return '\n@media ' + query + ' {\n' + content + '\n}\n';
  };
}

function wrap(className, selector) {
  var s = selector ? Selector(_utilsGetType2['default'](selector), selector) : undefined;

  return function wrapContent(content) {
    return s ? '\n.' + className + '' + s + ' {\n' + content + '\n}\n' : '\n.' + className + ' {\n' + content + '\n}\n';
  };
}

function Selector(type, keyword) {
  return type === 'pseudoClass' ? ':' + keyword : '::' + keyword;
}
module.exports = exports['default'];