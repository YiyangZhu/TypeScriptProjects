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
//iTakePoint2D({x: 0}); //error: missing information 'y'

//conclusion: extra information is okay, unsufficient parameter information is not allowed, introducing error

//$('.awesome').show(); //Error: cannot find name '$'

/*
declare var $: any;
$('.awesome').show(); //okay!
*/

declare var $: {
	(selector: string): any;
};
$('.awesome').show();
//$(123).show(); // error, selector needs to be a string, which is defined in declaration of var $

class Point{
	constructor(public x: number, public y: number){
	}

	add(point: Point){
	return new Point(this.x + point.x,this.y + point.y);
	}
}

var p1 = new Point(0,10);
var p2 = new Point(10,20);
var p3 = p1.add(p2);

var inc = x => x + 1;