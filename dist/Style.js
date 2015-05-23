'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _coreGetStylesFrom = require('../core/getStylesFrom');

var _coreGetStylesFrom2 = _interopRequireDefault(_coreGetStylesFrom);

var Style = (function () {
  function Style() {
    _classCallCheck(this, Style);
  }

  _createClass(Style, [{
    key: 'render',
    value: function render() {
      var props = Object.assign({}, this.props);

      var _getStylesFrom = _coreGetStylesFrom2['default'](props);

      var styles = _getStylesFrom.styles;
      var className = _getStylesFrom.className;

      return React.createElement(
        'div',
        null,
        React.createElement('style', { dangerouslySetInnerHTML: { __html: styles } }),
        _react.Children.map(this.props.children, function (child) {
          return _react.cloneElement(child, { className: className });
        })
      );
    }
  }]);

  return Style;
})();

exports['default'] = Style;
module.exports = exports['default'];