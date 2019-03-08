class Foo{}
var foo = new Foo();

class Foo{
	x: number;
	constructor(x: number){
		this.x = x;
	}
}

class Noodle{
	constructor(public x: number){

	}
}

class Bag{
	members = [];
	add(x){
		this.members.push(x);
	}
}