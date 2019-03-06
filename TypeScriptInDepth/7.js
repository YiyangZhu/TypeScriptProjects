"use strict";
exports.__esModule = true;
var big_js_1 = require("big.js");
exports.foo = new big_js_1.Big('111.11111111111111111111');
exports.bar = exports.foo.plus(new big_js_1.Big('0.000000000000000000001'));
//to get a number:
var x = Number(exports.bar.toString());
console.log(Math.sqrt(-1)); //NaN
//Don't do this
console.log(NaN === NaN); // false!!
//do this
console.log(Number.isNaN(NaN)); //true
