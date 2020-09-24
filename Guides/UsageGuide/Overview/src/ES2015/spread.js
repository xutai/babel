
// Function.prototype.apply()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


// spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

var a = ['a', 'b', 'c']
var b = [...a, 'foo']


function sum(x,y,z){
    return x + y + z
}
const numbers = [1,2,3]
console.log(sum(...numbers))



function foo(a,b,c) {
    console.log(a,b,c)
    return `${a} ${b} ${c}`
    
}

var c = foo(...a)

console.log(a, b, c)

// 这个foo到底是怎么回事？