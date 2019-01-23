let someString : string;
let someNumber : number;
let trueOrFalse : boolean;
let someArray : Array<any>;
let someElement : Element;
let someObject : object; // wrap Json object
let nullThing: null;
let undefinedThing: undefined;
let voidThing : void;

let anyoldthing : any;

let isDone : boolean = false;
let decimal : number = 6;
let hex:number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;

let color : string = "blue";
color = 'red';

let fullName : string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. 
I'll be ${age + 1} years old next month.`;

let sentence2: string = 'Hello, my name is ' + fullName + ".\n\n" + 
"I'll be " + (age + 1) + " years old next month.";

let list : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

let x: [string,number];
x = ['hello',10];
//x = [10,'hello']; is not valid

console.log(x[0].substr(1));
//console.log(x[1].substr(1)); error, as number does not have 'substr'

enum Color {Red, Green, Blue}
let c : Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
let c2 : Color2 = Color2.Green;

enum Color3{Red = 1, Green = 3, Blue = 5}
let c3 : Color3 = Color3.Green;

enum Color4{Red = 1, Green, Blue}
let colorName: string = Color4[2];

alert(colorName);

let notSure : any = 4;
notSure = "maybe a string instead";
notSure = false;

//any type is a powerful way to work with existing JavaScript

let newList : any[] = [1, true, 'free'];
newList[1] = 'yes';

//void is a little like the opposite of any. void means the absence of having any type at all. void type is mainly used 
//as the return type of functions that do not return a value:
function warnUser(): void {
    alert("This is my warning message");
}
warnUser();
//declaring variables of type void is not useful as you can only assign undefined or null to them
let unusable : void = undefined;
let unusable2 : void = null;
//let unusable3 : void = 1; Error!

//both undefined and null actually have their own types named undefined and null respectively. much like void, they are not 
//extremely useful on their own
let u1: undefined = undefined;
let n1 : null = null;
let u2 : null = undefined;
let n2 : null = undefined;

//by default null and undefined are subtypes of all other types. means you can assign null and undefined to sth. like number.
let num1 : number = null;
let string1 : string = undefined;








