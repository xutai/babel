

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

function* generator(i) {
    yield i;
    yield i + 10;
}

var foo = generator(10)

for (var i of foo) {
    console.log(i)
}