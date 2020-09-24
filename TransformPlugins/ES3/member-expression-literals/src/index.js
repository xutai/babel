
const babel = require("@babel/core")

babel.transform("code", {
    plugins: ["transform-member-expression-literals"]
})

var obj = {}

obj.foo = "foo"

obj.const = "const"

obj["var"] = "var"


console.log(obj.foo, obj.const, obj["var"], obj.var)