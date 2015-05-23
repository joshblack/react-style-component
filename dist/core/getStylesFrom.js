'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getStylesFrom;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

var _consolidate = require('./consolidate');

var _consolidate2 = _interopRequireDefault(_consolidate);

var _className = require('./className');

var _className2 = _interopRequireDefault(_className);

var _vendorAutoprefix = require('../vendor/autoprefix');

var _vendorAutoprefix2 = _interopRequireDefault(_vendorAutoprefix);

function getStylesFrom(props) {
  var className = _className2['default']();
  var transformed = _transform2['default'](_vendorAutoprefix2['default'](_lodash.omit(props, 'children')));
  var consolidated = _consolidate2['default'](transformed);
  var styles = _format2['default'](consolidated, className);

  return { className: className, styles: styles };
}

module.exports = exports['default'];