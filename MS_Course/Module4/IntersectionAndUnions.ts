//Union Types
function padLeft(value: string, padding: any){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value; //join
    }
    if(typeof padding === "string"){
        return padding + value; //string concatenation
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4);//returns "     Hello world"

padLeft("Hello world", true); //passes at compile time, fails at runtime.

//use a union type for the padding parameter
function padLeftTwo(value: string, padding: string | number){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string"){
        return padding + value;
    }
    throw new Error (`Expected string or number, got '${padding}'.`);
}

//if without error, a good implementation for indent
let indentedString = padLeftTwo("Hello world", true); //error during compilation

//a union type describes a value that can be one of several types. We use the vertical bar
//| to separate each type, so number | string | boolean is the type of a value that can
//be a number, a string, or a boolean.
//IMPORTANT: If we have a value that has a union type, we can only access members that are common to all types in the union

interface Bird{
    fly();
    layEggs();
}

interface Fish{
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird{
    return;
}

let pet = getSmallPet();
pet.layEggs();//Okay
pet.swim();//Error
pet.fly();//Error
