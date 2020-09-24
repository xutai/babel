

// function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*


function* wala() {
    yield 11;
    yield 12
}
console.log(wala().next().value)
console.log(wala().next().value)
var newWala = wala()
console.log(newWala.next().value)
console.log(newWala.next().value)

function* haha() {
    var i = 0
    yield i
    yield i + 10
}
console.log(haha().next().value)
console.log(haha().next().value)

function* soso() {
    var i = 0
    console.log("i: ", i)
    while (i < i+1) {
        console.log("i: ", i)
        yield i++
    }
}
console.log(soso().next().value)
console.log(soso().next().value)
var sosofn = soso()
console.log(sosofn.next().value)
console.log(sosofn.next().value)




var say = function(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('say')
            resolve(9999)
        }, 1000)
    })
}


async function* agf() {
    console.log('a1')
    var sayVal = await say();
    console.log("sayVal:", sayVal)
    console.log('a2')
    yield 9998;
    console.log('a3')
    yield 9997;
}

//console.log(agf())

var fn = agf()
// console.log(fn)
console.log(fn.next().then(val => { console.log(val) }  ))
console.log(fn.next().then(val => { console.log(val) }  ))
console.log(fn.next().then(val => { console.log(val) }  ))
