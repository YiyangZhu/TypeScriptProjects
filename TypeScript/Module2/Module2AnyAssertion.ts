//typescript adds optional static types to JavaScript. Types are used to place static constraints on program
//entities such as functions, variables, and properties so that compilers and development tools can offer better
//verification and assistance during software development. 

//back to JavaScript world
let x;
x = 3;
x = "hi";

//Type assertions are a way to tell the compiler "trust me, I know what I'm doing." A type assertion is like a
//type cast in other languages, but performs no special checking or restructuring of data. It has no runtime
//impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any
//special checks that you need.
//Type assertions have two forms. On is the angle-bracket syntax <> :
let someValue : any = "this is a string";
let strLength : number = (<string> someValue).length;
let anotherValue : any = "another string.";
let strLength2 : number = (<string> anotherValue).length;
let thirdValue : any = "third string";
let strLength3 : number = (<string>thirdValue).length;

//the other is the as-syntax:
let someValue2: any = "this is a string";
let strLength0 : number = (someValue2 as string).length;
let otherValue2 : any = "second string";
let strlength22 : number = (otherValue2 as string).length;
let thirdValue2 : any = "third string";
let strLenght3 : number = (thirdValue2 as string).length;

//when using TypeScript with JSX, only as-style assertions are allowed!