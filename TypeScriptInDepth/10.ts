class Foo{}
var foo = new Foo();

class Foo2{
	x: number;
	constructor(x: number){
		this.x = x;
	}
}

//property initializer
class Foo3{
	members = [];
	add(x){
		this.members.push(x);
	}
}

function Point(x, y){
	this.x = x;
	this.y = y;
}

Point.prototype.add = function(point){
	return new Point(this.x + point.x, this.y + point.y);
};

(function(){
	return Point;
})();