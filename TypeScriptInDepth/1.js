//implicit types
var foo = 123; //valid
//foo = '456'; //error
//explicit types
var good = 123;
var point2D = { x: 0, y: 0 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) {
    //do sth
}
iTakePoint2D(point2D);
iTakePoint2D(point3D);
iTakePoint2D({ x: 0 });
