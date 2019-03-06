"use strict";
//console.log(5=="5"); //error in ts
//console.log(5==="5"); // error in ts
exports.__esModule = true;
//structural equality
console.log({ a: 123 } == { a: 123 });
console.log({ a: 123 } === { a: 123 });
var deepEqual = require("deep-equal");
console.log(deepEqual({ a: 123 }, { a: 123 }));
var foo = {};
var bar = foo;
foo.baz = 123;
console.log(bar.baz); //mutations are across all references
var foo1 = {};
var bar1 = foo1;
var baz = {};
console.log(foo === bar);
console.log(foo === baz);
