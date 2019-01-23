//Named function
function add(x,y){
    return x + y;
}

//Anonymous function
let myAdd = function(x,y){
    return x + y;
}

//functions can refer to variables outside of the function
//body. When they do so, they are said to capture these variables.
let z = 100;
function addToZ(x,y){
    return x + y + z;
}

function addTwo(x:number,y:number):number{
    return x + y;
}

let myAddTwo = function(x:number,y:number):number{
    return x + y;
}

let myAddThree:(x:number,y:number)=>number = function(x:number,y:number):number{
    return x + y;
}

let myAddFour:(baseValue:number,increment:number)=>number=function(x:number,y:number):number{
    return x + y;
}

function buildName(firstName: string, lastName: string){
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");//Error
let result2 = buildName("Bob","Adams","Sr.");//Error
let result3 = buildName("Bob","Adams");//Valid

//optional
function buildNameTwo(firstName: string, lastName?: string){
    if(lastName){
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
let result4 = buildNameTwo("Bob");//Now it is valid, as lastname is optional
let result5 = buildNameTwo("Bob","Adams","Sr.");//Error
let result6 = buildNameTwo("Bob","Adams"); //Valid

function buildNameThree(firstName: string, lastName = "Smith"){
    return firstName + lastName;
}

let result7 = buildNameThree("Bob");//Valid
let result8 = buildNameThree("Bob","Adams","Sr.");//Error. Expect 1-2 parameters.
let result9 = buildNameThree("Bob","Adams"); 

let result10 = buildNameThree(undefined);//Valid

function buildNameFour(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameFour("Joseph", "Samuel", "Lucas", "MacKinzie");

//let buildNameFun be assigned to the function of buildNameFour
let buildNameFun: (fname: string, ...rest: string[]) => string = buildNameFour;
//rest parameters: ...