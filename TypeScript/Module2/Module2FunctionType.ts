/*
Function Types
interfaces are capable of describing the wide range of shapes the JS objects can take.
interfaces are also capable of desribing function types, using a call signature.
*/
interface SearchFunc{
    (source: string, subString: string) : boolean;
}

let mySearch: SearchFunc;
mySearch = function(source:string, subString: string){
    let result = source.search(subString);
    return result > -1;
}

//for function types to correctly type-check, the names of the parameters do not need to match
let mySearchTwo: SearchFunc;
mySearchTwo = function(src:string,sub:string){
    let result = src.search(sub);
    return result > -1;
}


/*
Indexable Types
*/
interface StringArray{
    [index:number]: string;
}

let myArray:StringArray;
myArray = ["Bob","Fred"];

let myStr: string = myArray[0];
// two types of supported index signatures: string and number
class Animal{
    name: string;
}

class Dog extends Animal{
    breed: string;
}

interface NotOkay{
    [x:number]: Animal; //Error! //the returned type from a number index is not a subtype of the returned type of the string indexer.
    [x:string]: Dog;
}
//Javascript treats numbers like string, for example, 100 is treated as '100'
//right interface:
interface ThisIsOkay{
    [x:number] : Dog;
    [x:string] : Animal;
}

interface NumberDictionary{
    [index: string]: number;
    length: number;
    name: string;//error: the type of name is not a subtype of the indexer
    name2: number;//no error
}

//make index signatures readonly

interface ReadonlyStringArray{
    readonly [index: number]: string;
}

let myArrayTwo: ReadonlyStringArray = ['Alice','Bob'];
myArrayTwo[2] = "Mallory";  //Error! cannot change readonly variable values;