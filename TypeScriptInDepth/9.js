var Something = /** @class */ (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
var FooBase = /** @class */ (function () {
    function FooBase() {
    }
    return FooBase;
}());
var foo = new FooBase();
foo.x; //okay
foo.y; //Error: property y is private and only accessible within class "FooBase" 
foo.z; //Error: property z is protected and only accessible within class "FooBase" and its subclasses
