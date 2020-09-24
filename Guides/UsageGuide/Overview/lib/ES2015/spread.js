"use strict";

require("core-js/modules/es.array.concat");

// Function.prototype.apply()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
var a = ['a', 'b', 'c'];
var b = [].concat(a, ['foo']);

function foo(m) {
  console.log(m);
}

var c = foo.apply(void 0, a);
console.log(a, b, c); // 这个foo到底是怎么回事？