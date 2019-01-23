//interfaces
//class types
//function
//indexable
//classes

//Explicitly implementing an interface is an option in TypeScript and not a requirement.
//if an instance of an object satisfies the shape of an interface, the object can be assigned to any variable
//defined as that interface type. Equally, that object can also be passed as an argument to a function that
//requires the interface type as a parameter.


//first interface example

function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj = {size:10, label:"Size 10 Object"};
printLabel(myObj);

//The type-checker checks the call to printLabel. The printLabel function has a single parameter that requires
//that the object passed in has a property called label of type string. Notice that object actually has more
//properties than this, but the compiler only checks that at least the ones required are present and match the 
//types required. There are some cases where TypeScript isn't as lenient.

//write the example again, this time using an interface to describe the requirement of having the label property
//that is a string:
interface LabelledValue{
    label:string;
}

function printLabel2(labelledObj:LabelledValue){
    console.log(labelledObj.label)
}

let myObj2 = {size : 10, label: "size 10 object"};
printLabel2(myObj);

//the interface LabelledValue is a name we can now use to describe the requirement in the previous example.
//It still represents having a single property called label that is of type string. Notice we did not have to
//explicitly say that the object we pass to printLabel implements this interface like we might have in other languages
//.It is only the shape that matters. If the object we pass to the function meets the requirements listed, then
//it is allowed.
//The type-checker does not require that these properties come in any sort of order, only that the properties
//the interface requires are present and have the required type.


/* Optional Properties
Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all.
These optional properties are popular when creating patterns like "option bags" where you pass an object to a 
function that only has a couple of properties filled in.
*/

interface SquareConfig{
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig):{color:string; area: number}{
    let newSquare = {color:"white",area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black"});

/* Interfaces with optional properties are written similar to other interfaces, with each optional property 
denoted by a ? at the end of the property name in the declaration.
The advantage of optional properties is that you can describe these possibly available properties while still also
preventing use of properties that are not part of the interface. i.e. had we mistyped the name of the color property in createSquare,
we would get an error message letting us know:
*/

function createSquareTwo(config: SquareConfig):{color:string; area: number}{
    let newSquare = {color:"white",area:100};
    if(config.color){
        newSquare.color = config.clor;//Error: property 'clor' does not exist on type 'SquareConfig'.[2551]
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare2 = createSquareTwo({color:"Black"});


//Readonly properties
/* Some properties should only be modifiable when an object is first created. Specify this by putting readonly
before the name of the property:
*/

interface Point{
    readonly x: number;
    readonly y: number;
}

//construct a Point by assigning an object literal. After the assignment, x and by cannot be changed.
let p1: Point = {x : 10, y : 20};
p1.x = 5; //Error! cannot assign 5 to x because it is a read-only property. 

//ReadonlyArray<T> type is the same as Array<T> with all mutating methods removed. make sure do not change readonly arrays after creation:
let a : number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
ro[0] = 2; // Error
ro.push(5); // Error
ro.length = 100; // Error
//assigning the ReadonlyArray to a normal array is illegal.
a = ro;
//override it with a type assertion:
//way 1 :
a = <number[]> ro;
//way 2 :
a = ro as number[];

//readonly variables are set values during run time, so they can have different values while executing different programs.
//constant: are declared and initialized at compile time.
//Variables use const whereas properties use readonly.


/*
Express property checks
*/
let mySquareThree = createSquare({colour:"red",width:100});//Error: colour is not a known property
//use type assertion - way 1
let mySquareFour = createSquare({colour:"red",width:100} as SquareConfig);
//use type assertion - way 2
let mySquareFive = createSquare(<SquareConfig>{colour:"red",width:100});

/* a better approach
add a string index signature if you are sure the object can have some extra properties that are used in some
special way:
*/
interface SquareConfig{
    color?: string;
    width?: number;
    [propName: string] : any;
}

//one final way: assign the object to another variables.
let squareOptions = {colour: "red",width:100};
let mySquareSix = createSquare(squareOptions);

