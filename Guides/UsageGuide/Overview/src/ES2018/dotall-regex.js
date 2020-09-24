


// RegExp.prototype.dotAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll

var reg = /c./s

var str = 'abcdef '
console.log(str)

console.log(str.match(reg))
console.log(reg.test(str))


var newStr = str.replace(reg, '****')
console.log( newStr)


// 这到底怎么用？
//是包含下一个元素吗？