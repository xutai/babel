


// match
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

// flags - u
// Unicode; treat pattern as a sequence of Unicode code points (see also Binary strings)

// (x)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var string = "foo💩bar";
var match = string.match(/foo(.)bar/u)

// still have no clue about (.), the only thing i konow is (x|y)

console.log(match)


var shit = `
(单位/1m人) </br>
日均生产： 💩 10t </br>
月总产出： 💩  300t   </br>
年总产出： 💩  3600t   </br>

`
document.getElementById('app').innerHTML = shit