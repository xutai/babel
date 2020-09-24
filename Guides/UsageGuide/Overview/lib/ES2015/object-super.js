"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.reflect.get");

var _obj;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var obj = {
  say: function say() {
    return "Hello";
  }
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

var obj2 = _obj = {
  say: function say() {
    return _get(_getPrototypeOf(_obj), "say", this).call(this) + "World!";
  }
};
Object.setPrototypeOf(obj2, obj);
console.log(obj.say(), obj2.say());