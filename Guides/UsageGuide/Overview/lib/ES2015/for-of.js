"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(generator);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
function generator(i) {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return i;

        case 2:
          _context.next = 4;
          return i + 10;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var foo = generator(10);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    console.log(i);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}