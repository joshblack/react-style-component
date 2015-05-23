'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = consolidate;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function consolidate(styles) {
  var rulesets = styles.filter(function (style) {
    return style['rule'] === 'declaration';
  }).reduce(function (p, style) {
    var selector = style.selector;
    var property = style.property;
    var value = style.value;

    if (selector) {
      return !p.has(selector) ? (p.set(selector, [[property, value]]), p) : (p.get(selector).push([property, value]), p);
    } else {
      p.get('declarations').push([property, value]);
      return p;
    }
  }, new Map([['declarations', []]]));

  var media = styles.filter(function (style) {
    return style['rule'] === 'media';
  }).reduce(function (p, style) {
    var selector = style.selector;
    var query = style.query;
    var property = style.property;
    var value = style.value;

    if (!p.get(query)) {
      if (selector) {
        p.set(query, new Map([['declarations', []], [selector, [[property, value]]]]));
      } else {
        p.set(query, new Map([['declarations', [[property, value]]]]));
      }

      return p;
    } else {
      var declarations = p.get(query).get('declarations');
      var selectors = p.get(query).get(selector) || [];

      if (selector) {
        p.get(query).set(selector, selectors.concat([[property, value]]));
      } else {
        p.get(query).set('declarations', declarations.concat([[property, value]]));
      }

      return p;
    }
  }, new Map());

  return new Map([].concat(_toConsumableArray(rulesets), _toConsumableArray(media)));
}

module.exports = exports['default'];