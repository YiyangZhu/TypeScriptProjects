/*
Type Inference
The TypeScript type system enables programmers to express limits on the capabilities of JavaScript objects, and to use
tools that enforce these limits. To minimize the number of annotations needed for tools to become useful, the
TypeScript type system makes extensive use of type inference.
*/
let i = 0;
//This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
//infer from the following function definition that the function f has return type string.
function f(){
    return "hello";
}

function f1(s: string){
    return "hello";
}

f1({});//Error, type of {} is not assignable to type of string. {}:object
f1("hello");// Valid.

//This optional type annotation on the parameter s lets the type checker know that the programmer expects parameter
//s to be of type string. Within the body of function f, tools can assume s is of type string and provide 
//operator type checking and member completion consistent. First call signal an error because f expects a string,
//not an object, as its parameter. For function f, TS compiler will emit the following JS code:
function f3(s){
    return s;
}
//In JS output, all type annotations have been erased. In general, TypeScript erases all type information before emitting JS.

/*
Best common type
when a type inference is made from several expressions, the types of those expressions are used to calculated a
"best common type".
*/
let x = [0,1,null];
/*
To infer the type of x in the example above, we must consider the type of each array element. Here we are given
two choices for the type of the array: number and null. The best common type algorithm considers each candidate type,
and picks the type that is compatible with all the other candidates.
Because the best common type has to be chosen from the provided candidate types, there are some cases where
types share a common structure, but no one type is the super type of all candidate types.
*/
class Rhino{

}
class Elephant{

}
class Snake{

}
class Animal{

}
let zoo = [new Rhino(),new Elephant(),new Snake()];
let zoo2: Animal[] = [new Rhino(),new Elephant(),new Snake()];
//Whe no best common type is found, the resulting inference is the empty object type, {}. Because this type has
//no members, attempting to use any properties of it will cause an error. This allows you to still use the object
//in a type-agnostic manner, while providing type safety in cases where the type of the object can't be implicitly determined.

/*
Contextual Type
occurs when the type of an expression is implied by its location.
 */
window.onmousedown = function(mouseEvent){
    console.log(mouseEvent.button);
}

window.onmousedown = function(mouseEvent: any){
    console.log(mouseEvent.button);
}

function createZoo():Animal[]{
    return [new Rhino(),new Elephant(),new Snake()];
}