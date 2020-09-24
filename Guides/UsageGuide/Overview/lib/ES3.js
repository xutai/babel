"use strict";

var _foo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* ES3 */
// member-expression-literals
var obj = {};
obj.foo = "isValid";
obj.const = "isKeyword";
obj["var"] = "isKeyword";
console.log(obj); // property-literals

var a;
var foo = (_foo = {
  // changed
  "bar": function bar() {},
  "1": function _() {},
  // not changed
  "default": 1
}, _defineProperty(_foo, a, 2), _defineProperty(_foo, "foo", 1), _foo);
console.log(foo); // reserved-words

var abstract = 1;
var x = abstract + 1;
console.log(x);