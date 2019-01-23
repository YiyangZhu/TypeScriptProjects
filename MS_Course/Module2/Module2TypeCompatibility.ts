/*
Type compatibility in TypeScript is based on structural subtyping. Structural typing is a way of relating types based 
solely on their members. This is in contrast with nominal typing. 
*/
interface Named{
    name: string;
}

class Person{
    name: string;
}

let p: Named;
p = new Person(); //Valid, because of structural typing
/*
In nominally-typed languages like C# or Java, the equivalent code would be an error because the Person class
does not explicitly describe itself as being an implementator of the Named interface.
TypeScript's structural type system was designed based on how JavaScript code is typically written. Because JavaScript
widely uses anonymous objects like function expressions and object literals, it's much more natural to represent the
kinds of relationships found in JavaScript libraries with a structural type system instead of a nominal one.
TypeScript's type system allows certain operations that can't be known at compile-time to be safe. When a type system has this property,
it is said not be "sound". The places where TypeScript allows unsound behavior were carefully considered, and throughout this document we'll 
explain where these happen and the motivating scenarios behind them.
*/

let x: Named;
let y = {name: "Alice",location: "Seattle"};// y's type is anonymous class, which has counterpart in C#.
x = y; //Valid, as name : string is the same structure in Named class.

//To check whether y can be assigned to x, the compiler checks each property of x to find a corresponding compatible
//property in y. Y must have a member called name that is a string.
//The same rule for assignment is used when checking function call arguments:
function greet(n: Named){
    alert("Hello, " + n.name);
}
greet(y);//Valid too.
//Y has an extra location property, but this does not create an error. Only members of the target type(Named in this case),
//are considered when checking for compatibility.
//This comparison process recursively, exploring the type of each member and sub-member.

//Comparing two functions
/*
While comparing primitive types and object types is relatively straightforward, the question of what kinds of
functions should be considered compatible is a bit more involved.
*/
let x1 = (a: number) => 0;
let y1 = (b: number,s: string) => 0;
y1 = x1; //valid
x1 = y1;//Error. Type (b: number,s: string) => number is not assignable to type (a: number) => 0
/*
To check if x is assignable to y, we first look at the parameter list. Each parameter in x must have a corresponding
parameter in y with a compatible type. The names of the parameters are not considered, only their types. In this case, every parameter
of x has corresponding compatible parameter in y, so the assignment is allowed.
The second assignment is an error, because y has a required second parameter that x does not have, so the assignment 
is disallowed.
discard：丢弃
You may be wondering why we allow 'discarding' parameters like in the example y = x. The reason for this assignment
to be allowed is that ignoring extra function parameters is actually quite common in JavaScript. For example,
Array#forEach provides three parameters to the callback function: the array element, its index, and the containing
array. It's very useful to provide a callback回调，给它的东西还要传出来 that only uses the first parameter.
*/
let items = [1,2,3];
items.forEach((item,index,array)=>console.log(item));
items.forEach(item => console.log(item));

let x2 = () => ({name: "Alice"});
let y2 = () => ({name: "Alice", location: "Seattle"});
x2 = y2;//y2 has the redundant location: string property, which will be discarded by x;
y2 = x2;//Error. x2 lack the location:string property.
//the source function's return type should be a subtype of the target type's return type.

//Enums: Enums are compatible with numbers, and numbers are compatible with enums. Enum values from 
//different enum types are considered incompatible.
enum Status{Ready, Waiting};
enum Color{Red,Blue,Green};

let status1 = Status.Ready;
status1 = Color.Green;//Error, different enum type values are incompatible.
status1 = 0; //Valid, because enums and nubmers are compatible.

//Classes
//when comparing two objects of a class type, only members of the instance are compared. Static members and 
//constructors do not affect compatibility.
class Animal{
    static color: string;
    feet: number;
    constructor(name: string, numFeet: number){}
}

class Size{
    private static area: number;
    feet:number;
    constructor(numFeet: number){}
}
let a : Animal;
let s : Size;

a = s; // static members and constructor do not affect compatibility;
s = a; // static members and constructor do not affect compatibility;

/*
private and protected members in classes
private and protected members in a class affect their compatibility. When an instance of a class is checked for
compatibility, if the target type contains a private member, then the source type must also contain a private member
that originated from the same class. Likewise, the same applies for an instance with a protected member. This allows
a class to be assignment compatible with its super class, but not with classes from a different inheritance hierarchy which otherwise 
have the same shape.
*/

class Youngkey{
    size: number;
}

class Key{
    private size: number;
}

let y100: Youngkey;
let k100: Key;
y100 = k100;//member is private
k100 = y100;