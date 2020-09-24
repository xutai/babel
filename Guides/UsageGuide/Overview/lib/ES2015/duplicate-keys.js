"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var x = _defineProperty({
  a: 5
}, "a", 6);

var y = _defineProperty({
  get a() {},

  set a(x) {}

}, "a", 3);

console.log(y.a);