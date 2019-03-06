//implicit types
var foo = 123; //valid
//foo = '456'; //error

//explicit types
var good: number = 123;
//var node: number = '123';//error

interface Point2D{
	x: number;
	y: number;
}

interface Point3D{
	x: number;
	y: number;
	z: number;
}

var point2D: Point2D = {x: 0, y: 0}
var point3D: Point3D = {x: 0, y: 10, z: 20}

function iTakePoint2D(point: Point2D){
	//do sth
}

iTakePoint2D(point2D); //exact match okay
iTakePoint2D(point3D); //extra information okay
iTakePoint2D({x: 0}); //error: missing information 'y'