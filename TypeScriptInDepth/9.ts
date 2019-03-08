class Something{
	static instances = 0;
	constructor(){
	Something.instances++;
	}
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);



class FooBase{
	public x: number;
	private y: number;
	protected z: number;
}

var foo = new FooBase();
foo.x;//okay
foo.y;//Error: property y is private and only accessible within class "FooBase" 
foo.z;//Error: property z is protected and only accessible within class "FooBase" and its subclasses



