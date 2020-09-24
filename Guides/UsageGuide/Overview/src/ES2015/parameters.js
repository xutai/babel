


function test(x = "hello", { a, b }, ...args) {
    console.log(x, a, b, args)
}


test( "world", { a: 1, b: 2}, c = 3, d = 4)