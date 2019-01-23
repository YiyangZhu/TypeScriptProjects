"use strict";
exports.__esModule = true;
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ["Hello", "98052", "101"];
//use function validate
strings.forEach(function (s) {
    alert("\"" + s + "\" " + (StaticZipCodeValidator_1["default"](s) ? " matches" : " does not match"));
});
