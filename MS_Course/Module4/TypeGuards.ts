/*
Union types are useful for modeling situations when values can overlap
in the types they can take on. What happens when we need to know specifically whether
we have a Fish? JS to differentiate between two possible values is to check
for the presence of a member. You can only access members that are guaranteed to
be in all the constiuents of a union type.
*/
interface Fish{
    layEggs();
    swim();

}

interface Bird{
    layEggs();
    fly();
}

function getSmallPet(): Fish|Bird{
    return;
}

let pet = getSmallPet();

//Each of these property accesses will cause an error
if(pet.swim){ //error, as swim is not the common function for union type of fish and bird
    pet.swim();
}

else if(pet.fly){
    pet.fly();
}

//use type assertion to fix the error -- way 1
if((<Fish>pet).swim){
    (<Fish>pet).swim();
}

else if ((<Bird>pet).fly){
    (<Bird>pet).fly();
}

//TS has type guard (think of guard in swift, different story). -- way 2
/*
A type guard is some expression that performs a runtime check that guarantees the type
in some scope. To define a type guard, define a function whose return type is a type predicate
*/

function isFish(pet: Fish|Bird): pet is Fish{ //return type is a type predicate
    return (<Fish>pet).swim != undefined;
}

if(isFish(pet)){
    pet.swim();
}
else {
    pet.fly();
}

function isNumber(x: any): x is number{
    return typeof x === "number";
}

function isString(x: any): x is string{
    return typeof x === "string";
}


//typescript recognize it as a type guard on its own, regarding figuring out if a type is a primitive
function padLeft(value: string, padding: string | number){
    if(isNumber(padding)){
        return Array(padding + 1).join(" ") + value;
    }
    if(isString(padding)){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

//type of v === "typename", type of v !== "typename", 
//typename must be "number","string","boolean", or "symbol"

//instanceof type guards
//is a way of narrowing types using their constructor function. 
interface Padder{
    getPaddingString(): string 
}

class SpaceRepeatingPadder implements Padder{
    constructor(private numSpaces: number){    }//narrow types to number
    getPaddingString(){
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder{
    constructor(private value: string){ } // narrow types to string
    getPaddingString(){
        return this.value;
    }
}

function getRandomPadder(){
    return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4): //这个用法非常精妙
    new StringPadder("  ");
}

let padder: Padder = getRandomPadder();

if(padder instanceof SpaceRepeatingPadder){ //narrow padder's type to SpaceRepeatingPadder
    padder;
}
if(padder instanceof StringPadder){ //narrow padder's type to StringPadder;
    padder;
}

/*
The right side of the instanceof needs to be a constructor function,
and TypeScript will narrow down to:
1. the type of the function's prototype property if its type is not any //not understand what prototype property is, will probe into 
2. the union of types returned by that type's construct signatures
*/