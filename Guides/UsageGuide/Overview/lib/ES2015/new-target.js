"use strict";

function Foo() {
  console.log(this instanceof Foo ? this.constructor : void 0);
}

Foo();
new Foo();