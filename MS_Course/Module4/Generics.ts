/*
In languages like C# and Java, one of the main tools in the toolbox for
creating reusable components is generics, that is, being able to create a 
component that can work over a variety of types rather than a single one.
*/
function identity(arg: number): number{
    return arg;
}

function identityTwo(arg: any): any
{
    return arg;
}

function identityThree<T>(arg:T):T{
    return arg;
}

let output = identityThree<string>("myString");

//use type argument inference
let outputTwo = identityThree("myString");

//example with Error
function loggingIdentity<T>(arg:T): T {
    console.log(arg.length);//error: property of length does not exist in T
    return arg;
}

//fix the error -- way 1
function loggingIdentityThree<T>(arg: T[]) : T[]{
    console.log(arg.length);
    return arg;
}

//fix the error -- way 2
function loggingIdentityTwo<T>(arg: Array<T>):Array<T>{
    console.log(arg.length);
    return arg;
}

//Generic Types
function identityFour<T>(arg: T): T{
    return arg;
}

let myIdentityThree: <T>(arg: T) => T = identityFour;

let myIdentityFour: <U>(arg: U) => U = identityFour;

interface GenericIdentityFn{
    <T>(arg: T): T;
}

function identityFive<T>(arg: T): T{
    return arg;
}

let myIdentityFive: GenericIdentityFn = identityFive;

//make the type parameter visible to all the other members of the interface
interface GenericIdentityFnTwo<T>{
    (arg: T): T;
}

function identitySix<T>(arg: T): T{
    return arg;
}

let myIdentitySix: GenericIdentityFnTwo<number> = identity;

//Generic classes
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){return x + y};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x,y){return x + y};

alert(stringNumeric.add(stringNumeric.zeroValue,"test"));

//Generic makes functions, classes versatile and reusable.
//Generic classes are only generic over their INSTANCE side rather than their 
//static side, so when working with classes, static members cannot use the class's
//type parameter.
