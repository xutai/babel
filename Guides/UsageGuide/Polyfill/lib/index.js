"use strict";

// reject
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('foo');
  }, 300);
});
promise1.then(function (value) {
  console.log("then", value);
})["catch"](function (value) {
  console.log("catch", value);
});
console.log(promise1); // resolve

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('bar');
  }, 300);
});
promise2.then(function (value) {
  console.log("then", value);
})["catch"](function (value) {
  console.log("catch", value);
});
console.log(promise2);
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise3');
  }, 300);
});
promise3["finally"](function () {
  console.log('finally!!!');
}); //

var promise4 = Promise.resolve(4).then(function (value) {
  console.log("value:", value);
})["finally"](function (value) {
  console.log("promise4: ", value);
  console.log("promise 4!!!");
});
console.log(promise4);
Promise.resolve()["finally"]();