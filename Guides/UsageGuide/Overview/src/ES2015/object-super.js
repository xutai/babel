let obj = {
    say () {
        return "Hello"
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

let obj2 = {
    say () {
        return super.say() + "World!"
    }
}

Object.setPrototypeOf(obj2, obj)

console.log( obj.say(), obj2.say() )