//Number
//javascript's built in numbers:
console.log(.1 + .2); // 0.30000000000000004
console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER });
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
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); //false
//unsafe
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 10)); //false
