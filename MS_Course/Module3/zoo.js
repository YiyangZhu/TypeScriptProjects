/*Namespaces, namespaces are used as a way to organize the code so that you can
keep track of your types and not worry about name collisions with other
objects. Instead of putting lots of different names into the global
namespace, you can wrap up your objects into a namespace. The choice
of what objects go in what namespace is totally up to your
organization preferences. This is your code and your objects, organize it
the way you think is logical. You may choose to move all entities that
are related to each other in some sort either by functionality or
characteristics into one namespace and give it a name that describes
the similarity between them.
If you want the interfaces and classes in your namespace to be visible
outside the namespace, you need to preface their declaration with export
keyword. Variables that are implementation details can e left unexported and
will not be visible to code outside the namespace.

Classes, interfaces and variable names within a namespace has to be
unique. Outside the namespace it is ok to have classes or interfaces or variables
with similar names as entities inside a namespace that is because
the namespace entities are refered to with their namespace so that
gives them their uniqueness.
*/
///<reference path = "ZooAnimals.ts"/>
var Zoo;
(function (Zoo) {
    var Reptile = /** @class */ (function () {
        function Reptile() {
            //note that we need the *export* here to be able to access
            //this class and instantiate objects of the Reptile type
            this.skinType = "scales";
        }
        Reptile.prototype.isMammal = function () {
            return false;
        };
        return Reptile;
    }());
    Zoo.Reptile = Reptile;
})(Zoo || (Zoo = {}));
///<reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feather";
        }
        Bird.prototype.isMammal = function () {
            return false;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
var parrot = new Zoo.Bird();
alert(parrot.isMammal());
