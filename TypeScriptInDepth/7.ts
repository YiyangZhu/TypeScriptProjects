interface NumberConstructor {
    /**
      * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
      * that is representable as a Number value, which is approximately:
      * 2.2204460492503130808472633361816 x 10‍−‍16.
      */
    EPSILON: number;

    /**
      * Returns true if passed value is finite.
      * Unlike the global isFininte, Number.isFinite doesn't forcibly convert the parameter to a
      * number. Only finite values of the type number, result in true.
      * @param number A numeric value.
      */
    isFinite(number: number): boolean;

    /**
      * Returns true if the value passed is an integer, false otherwise.
      * @param number A numeric value.
      */
    isInteger(number: number): boolean;

      * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
      * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
      * to a number. Only values of the type number, that are also NaN, result in true.
      * @param number A numeric value.
      */
    isNaN(number: number): boolean;

    /**
      * Returns true if the value passed is a safe integer.
      * @param number A numeric value.
      */
    isSafeInteger(number: number): boolean;

    /**
      * The value of the largest integer n such that n and n + 1 are both exactly representable as
      * a Number value.
      * The value of Number.MIN_SAFE_INTEGER is 9007199254740991 2^53 − 1.
      */
    MAX_SAFE_INTEGER: number;

    /**
      * The value of the smallest integer n such that n and n − 1 are both exactly representable as
      * a Number value.
      * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
      */

      MIN_SAFE_INTEGER: number;

    /**
      * Converts a string to a floating-point number.
      * @param string A string that contains a floating-point number.
      */
    parseFloat(string: string): number;

    /**
      * Converts A string to an integer.
      * @param s A string to convert into a number.
      * @param radix A value between 2 and 36 that specifies the base of the number in numString.
      * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
      * All other strings are considered decimal.
      */
    parseInt(string: string, radix?: number): number;
}

declare var Number: NumberConstructor ;




import {Big} from 'big.js';

export const foo = new Big('111.11111111111111111111');
export const bar = foo.plus(new Big('0.000000000000000000001'));

//to get a number:
const x: number = Number(bar.toString());

console.log(Math.sqrt(-1)); //NaN

//Don't do this
console.log(NaN === NaN); // false!!

//do this
console.log(Number.isNaN(NaN)); //true


//Infinity
console.log(Number.MAX_VALUE); //1.797e+308
console.log(-Number.MAX_VALUE); //-1.797e+308

// values outside the range where precision isn't changed are clamped to these limits
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE); // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!

//range之外的值若改变精度，则解析成特殊值：Infinity和-Infinity
console.log(Number.MAX_VALUE + 10 ** 1000); //Infinity
console.log(-Number.MAX_VALUE - 10 ** 1000); //-Infinity

//infinity values also show up with arithmetic that requires it
console.log(1 / 0);
console.log(-1 / 0);

//can use infinity values manually or using static members of the Number class 
console.log(Number.POSITIVE_INFINITY === Infinity); //true
console.log(Number.NEGATIVE_INFINITY === -Infinity); //true

console.log(Infinity > 1); // true
console.log(-Infinity < -1); // true

//infinitesimal 无穷小
//the smallest non-zero value representable in Number is available as static Number.MIN_VALUE

console.log(Number.MIN_VALUE); //5e-324

//values smaller than MIN_VALUE ("underflow values") are converted to 0.
console.log(Number.MIN_VALUE / 10); //0