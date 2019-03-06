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
iTakePoint2D(point2D); //exact match okay
iTakePoint2D(point3D); //extra information okay
$('.awesome').show();
//$(123).show(); // error, selector needs to be a string, which is defined in declaration of var $
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
var inc = function (x) { return x + 1; };
