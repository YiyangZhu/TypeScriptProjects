"use strict";
exports.__esModule = true;
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    ZipCodeValidator.numberRegexp = /^[0-9]+$/;
    return ZipCodeValidator;
}());
exports["default"] = ZipCodeValidator;
//Export statements are handy when exports need to be renamed for
//consumers, so the above example can be written as:
var ZipCodeValidatorTwo = /** @class */ (function () {
    function ZipCodeValidatorTwo() {
    }
    ZipCodeValidatorTwo.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidatorTwo;
}());
exports.ZipCodeValidatorTwo = ZipCodeValidatorTwo;
exports.mainValidator = ZipCodeValidatorTwo;
