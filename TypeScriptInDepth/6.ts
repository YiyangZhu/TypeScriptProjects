//Number

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

interface INumber {
    EPSILON: any
}
declare var Number: INumber;

//javascript's built in numbers:
console.log(.1 + .2); // 0.30000000000000004

console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
//{max: 9007199254740991, min: -9007199254740991}


/*
Safe in this context refers to the fact that the value cannot be the result of a rounding error.
The unsafe values are +1/-1 away from these safe values and any amount of addition / substraction will round the result to those unsafe values.
*/

console.log(Number.MAX_SAFE_INTEGER + 20 === Number.MAX_SAFE_INTEGER + 1); //TRUE!
console.log(Number.MIN_SAFE_INTEGER - 20 === Number.MIN_SAFE_INTEGER - 1);
//TRUE!

//to check the safety, you can use ES6 Number.isSafeInteger:
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

//unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

//because it might have been rounded to it due to overflow
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); //false

//safe
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); //true

//unsafe
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER-1)); //false

//unsafe
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER-10)); //false