let someString = "this is a string";
let someNumber = 1;

let arrayOfNumbers = [0,1,null];

let undeclaredType: any = "this is a string";

let lengthOfString: number = (undeclaredType as string).length;
let lengthOfString2: number = (<string> undeclaredType).length;

//interface
interface squareDescriptor{
    "name":string,
    "size":number
}

//create method accepting interface
let squareFn : Function = (square : squareDescriptor) => {
    return square.name;
}

let square = {
    "name": "a square"
}

let executeFn = squareFn(square);

class squareClass implements squareDescriptor{
    name: string = "a name"
    size: number = 10
}

let square2 : squareDescriptor;
let falseSquare = {
    "size": "a string",
    "name": 20
}

square2 = falseSquare;