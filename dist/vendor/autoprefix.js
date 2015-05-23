'use strict';

function autoprefix(style) {
  if (style.hasOwnProperty('userSelect')) {
    style = Object.assign({}, style, {
      WebkitUserSelect: style.userSelect,
      MozUserSelect: style.userSelect,
      msUserSelect: style.userSelect });
  }

  if (style.hasOwnProperty('transition')) {
    Object.assign(style, {
      WebkitTransition: style.transition,
      MozTransition: style.transition,
      msTransition: style.transition });
  }

  if (style.hasOwnProperty('boxShadow')) {
    Object.assign(style, {
      WebkitBoxShadow: style.boxShadow,
      MozBoxShadow: style.boxShadow,
      msBoxSelect: style.boxShadow });
  }

  if (style.hasOwnProperty('fontSmoothing')) {
    Object.assign(style, {
      WebkitFontSmoothing: style.fontSmoothing,
      MozOsxFontSmoothing: style.fontSmoothing === 'antialiased' ? 'grayscale' : undefined });
  }

  return style;
}

module.exports = autoprefix;