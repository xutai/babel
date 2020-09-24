"use strict";

require("core-js/modules/es.array.slice");

var obj = {
  x: 1,
  y: 2
};
var x = obj.x,
    y = obj.y; // x = obj.x , y = obj.y

var arr = [1, 2, 3, 4, 5];
var a = arr[0],
    b = arr[1],
    rest = arr.slice(2);
console.log(obj, x, y, rest);