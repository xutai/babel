function Foo() {
    console.log(new.target)
}

Foo()
new Foo()