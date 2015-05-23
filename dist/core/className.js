'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = className;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var BASE = letters.length;
var bits = [-1];

function className() {
  inc(bits.length - 1);
  return bits.reduce(function (p, v) {
    return p + letters[v];
  }, '');
}

function inc(i) {
  if (bits[i] + 1 >= BASE) {
    bits[i] = 0;

    if (i - 1 >= 0) {
      inc(i - 1);
    } else {
      bits.unshift(0);
    }
  } else {
    bits[i] += 1;
  }
}
module.exports = exports['default'];