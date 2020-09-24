"use strict";

require("core-js/modules/es.array.map");

require("core-js/modules/web.dom-collections.for-each");

/* ES2015 */
// arrow-functions
var a = function a() {};

var a = function a(b) {
  return b;
};

console.log(a, a(1));
var double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      console.log(_this._name + " knows " + f);
    });
  }
};
bob.printFriends();