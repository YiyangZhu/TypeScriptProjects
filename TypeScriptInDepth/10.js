var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var foo = new Foo();
var Foo2 = /** @class */ (function () {
    function Foo2(x) {
        this.x = x;
    }
    return Foo2;
}());
//property initializer
var Foo3 = /** @class */ (function () {
    function Foo3() {
        this.members = [];
    }
    Foo3.prototype.add = function (x) {
        this.members.push(x);
    };
    return Foo3;
}());
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.add = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
};
(function () {
    return Point;
})();
