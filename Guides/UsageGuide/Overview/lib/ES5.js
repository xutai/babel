"use strict";

/* ES5 */
// property-mutators
var foo = {
  get bar() {
    return this._bar;
  },

  set bar(value) {
    this._bar = value;
  }

};
console.log(foo);
foo.bar = 10; // foo.bar(10)

console.log(foo, foo.bar);