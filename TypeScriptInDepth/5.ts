function outerFunction(arg){
	var variableInOuterFunction = arg;
	return function(){
	console.log(variableInOuterFunction);
	}
}

var innerFunction = outerFunction("hello closure!"); //returns a function

innerFunction(); //logs hello closure!


function createCounter(){
	let val = 0;
	return {
	increment(){val++},
	getVal(){return val}
	}
}

let counter = createCounter(); //val = 0
counter.increment(); //val = 1
console.log(counter.getVal()); //val = 1
counter.increment(); //val = 2
console.log(counter.getVal()); //val = 2

//pseudo code to explain the concept
server.on(function handler(req, res){
	loadData(req.id).then(function(data){
	//the 'res' has been closed over and is available
	res.send(data);
	})
});