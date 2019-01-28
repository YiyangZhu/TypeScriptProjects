let someArray = [1,"string",false];

for(let entry of someArray){
    console.log(entry);
}

let list = [4,5,6];
for(let i of list){
    console.log(i);
}

let numbers = [1,2,3];
for(let num of numbers){
    console.log(num);
}

var numbersTwo = [1,2,3];
for(var _i = 0; _i < numbers.length; _i++){
    var num = numbers[_i];
    console.log(num);
}