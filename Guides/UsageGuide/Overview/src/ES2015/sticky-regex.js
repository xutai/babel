


// RegExp.prototype.sticky
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky


// RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


// Regular Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
const a = /o+/y

const str = 'bopolobo'

a.lastIndex = 1
console.log(a.test(str))

a.lastIndex = 3
console.log(str.match(a) )

