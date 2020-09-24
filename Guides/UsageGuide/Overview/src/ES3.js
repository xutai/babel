
/* ES3 */
// member-expression-literals
var obj = {}
obj.foo = "isValid";
obj.const = "isKeyword";
obj["var"] = "isKeyword";

console.log(obj)

// property-literals
var a
var foo = {
    // changed
    "bar": function () {},
    "1": function() {},

    // not changed
    "default": 1,
    [a]: 2,
    foo: 1
}
console.log(foo)

// reserved-words
var abstract = 1;
var x = abstract + 1;
console.log(x)