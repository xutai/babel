


var bar = function() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('hi')
            resolve(1)
        }, 1000)
    })
}

var baz = function() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bye')
            resolve(2)
        }, 500)
    })
}


async function foo() {
    console.log('000')
    var m = await bar()
    console.log('111')
    var n = await baz()
    console.log(m, n)
    return m + n
}
foo().then(ret => {
    console.log(ret)
}).catch(err => {
    console.error
})