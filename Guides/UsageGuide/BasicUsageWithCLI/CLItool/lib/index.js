"use strict";

var a = [1, 2, 3];
var b = [3, 4, 5];
var c = [].concat(a, b);
console.log(c);

var fn = function fn() {
  return "arrow function";
};

var result = fn();
console.log(result);

var newFn = function newFn() {
  return 1;
};