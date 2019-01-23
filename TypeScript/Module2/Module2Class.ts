/*
Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this
may feel a bit awkard to programmers more comfortable with an object-oriented approach, where classes inherit
functionality and objects are built from these classes. Starting with ECMAScript2015, also known as ECMAScript6,
JavaScript programmers will be able to build their applications using this object-oriented class-based approach.
In TypeScript, developers are able to use these techniques.
*/

//a simple class-based example:
class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }

    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("World!");
let button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function(){
    alert(greeter.greet());
}
document.body.appendChild(button);

//The above class has three members: a property called greeting, a constructor, and a method greet.
//this. : a member access
//construct an instance of the Greeter class using new. This calls into the constructor we defined earlier.
//creating a new object with the Greeter shape, and running the constructor to initalize it.

/*
Public by default
In TypeScript, each member is public by default. You may still mark a member public explicity.
*/
class Animal{
    public name: string;
    public constructor(theName: string){ this.name = theName;}
    public move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//when a member is marked private, it cannot be accessed from outside of its containing class.
class AnimalTwo{
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}
alert(new AnimalTwo("Cat").name); // Error! Name is private and only accessible within class AnimalTwo.

/*
TypeScript is a structural type system. When we compare two different types, regardless of where they came from,
if the types of all members are compatible, then we say the types themselves are compatible.
However, when comparing types that have private and protected members, we treat these types differently. For
two types to be considered compatible, if one of them has a private member, then the other must have a private 
member that originated in the same declaration. The same applies to protected members.
*/
class AnimalThree{
    private name: string;
    constructor(theName: string){this.name = theName};
}

class Rhino extends AnimalThree{
    constructor(){super("Rhino");}
    public getName(){
        return `Hello, my name is ${this.name}`; // Error! name is private and is only accessible within class "AnimalThree"
    }
}

class Employee{
    private name: string;
    constructor(theName: string){this.name = theName;}
}

let animal = new AnimalThree("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; //Error. Types have separate declarations of a private property 'name'.
/*
Rhino is a subclass of AnimalThree. Employee class looks identical to AnimalThree in terms of shape.AnimalThree 
and Rhino share the private side of their shape from the same declaration of private name: string in Animal,
they are compatible. However, this is not the case for Employee. When we try to assign from an Employee to Animal
we get an error that these types are not compatible. Even though Employee also has a private member called name,
it is not the one we declared in AnimalThree.
*/
//Example of compatible types:
class AnimalFive{
    name:string;
    constructor(n:string){
        this.name = n;
    }
}

class Computer{
    name: string;
    constructor(n:string){
        this.name = n;
    }
}

let animalFive = new AnimalFive("animal five");
let computer = new Computer("computer one");
animalFive = computer; // compatible types -- no errors
computer = animalFive; // compatible types -- no errors

/*
Protected is much like the private modifier with the exception that members declared protected can also be 
access by instances of deriving classes.
*/
class Person{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
}

class EmployeeTwo extends Person{
    private department: string;

    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`; //as name is protected, it can be accessed within derived class. so no errors...
    }
}

let howard = new EmployeeTwo("HOward","Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);//name is protected and only accessible within class "Person" and its subclasses.
/*
Notice that while we can't use name from outside of Person, we can still use it from within an instance method
of Employee because Employee derives from Person.
A constructor may also be marked protected. This means that the class cannot be instantiated outside of its
containing class, but can be extended.
*/
class PersonThree{
    protected name: string;
    protected constructor(theName: string){
        this.name = theName;
    }
}

class EmployeeThree extends Person{
    private department: string;
    constructor (name: string, department: string){
        super(name); // no errors ,as contructor in PersonThree is protected, which means can be accessed in subclasses.
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howardThree = new EmployeeThree("Howard","Sales");
let johnThree = new PersonThree("John"); //constructor in EmployeeThree is protected and only accessible within the class and its subclasses.

/*
use the readonly keyword to make properties readonly. Readonly properties must be initialized at their declaration
or in the constructor.
*/
class Octopus{
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string){
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs.");
dad.name = "Man with the 3-piece suit"; //Error. Name is readonly.

//parameter properties, a further revision of the previous Octopus class using a parameter property
class OctopusTwo{
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string){
    }
}
//We dropped theName altogether and just use the shortened readonly name: string parameter on the constructor
//to create and initialize the name member. Parameter properties are declared by prefixing a constructor parameter
//with an accessibility modifier or readonly, or both. Using private for a parameter property declares and initializes a private member;
// the same is done for public, and readonly.


/*
Accessors
TypeScript supports getters/setters as a way of intercepting accessors to a member of an object. This gives you
a way of having finer-grained control over how a member is accessed on each object.
Convert a simple class to use get and set. First, an example without getters and setters:
 */
class EmployeeSix{
    fullName: string;
}
let employeeSix = new EmployeeSix();
employeeSix.fullName = "Bob Smith";
if(employeeSix.fullName){
    console.log(employeeSix.fullName);
}

/*
While allowing people to randomly set fullName directly is pretty handy, this might get us in trouble if people can change names on a whim.
The following version check to make sure the user has a secret passcode available before being allowed to modify the employee.
Do this by replacing the direct access to fullName with a set that will check the passcode. We had a corresponding get 
to allow the previous example to continue to work seamlessly.
*/
let passcode = "secret passcode";
class EmployeeSeven{
    private _fullName: string;
    get fullName():string{
        return this._fullName;
    }

    set fullName(newName: string){
        if(passcode && passcode == "secret passcode"){
            this._fullName = newName;
        } 
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employeeSeven = new EmployeeSeven();
employeeSeven.fullName = "Bob Smith";
if(employeeSeven.fullName){
    console.log(employeeSeven.fullName);
}

/*
Static Properties
Instance members of the class are those that show up on the object when it's instantiated. We can also
create static members of a class, those that are visible on the class itself rather than on the instances. 
Use static on the origin, as it's a general value for all grids. Each instance accesses this value through prepending
the name of the class. Similarly to prepending this. in front of instance accesses, here we prepend Grid. in front
of static accesses.
*/
class Grid{
    static origin = {x:0,y:0};
    calculateDistanceFromOrigin(point:{x:number,y:number}){
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number){
    }
}

let grid1 = new Grid(1.0);//1x scale
let grid2 = new Grid(5.0);//5x scale

console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}));

/*
Abstract class
are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface,
an abstract class may contain implementation details for its members. The abstract keyword is used to define
abstract classes as well as abstract methods within an abstract class.
*/
abstract class AnimalSeven{
    abstract makeSound():void;
    move():void{
        console.log("roaming the earth...");
    }
}
/*
Methods within an abstract class that are marked as abstract do not contain an implementation and must be 
implemented in derived classes. Abstract methods share a similar syntax to interface methods. Both define the
signature of a method without including a mehtod body. However, abstract methods must include the abstract keyword and
may optionally include access modifiers.
*/
abstract class Department{
    constructor(public name: string){

    }
    printName():void{
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void;
}
class AccountingDepartment extends Department{
    constructor(){super("Accounting and Auditing");}

    printMeeting():void{
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports():void{
        console.log("Generating accounting reports...");
    }
}

let department: Department;//okay to create a reference to an abstract type
department = new Department(); // Error, cannot create an instance of an abstract class!
department = new AccountingDepartment();//no error, create and assign a non-abstract class
department.printName();
department.printMeeting();
department.generateReports();//Error. property of generateReports does not exist in Department class.
// NOTE: same as Java. declaration determines which properties the varaible will hold in it. And initialization/asignment
//determines which implementation it will have within it.


/*
Advanced Techniques
constructor functions: when declare a class in TypeScript, creating multiple declarations at the same time. The first
is the type of the instance of the class.
*/
class GreeterTwo{
    greeting: string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeterTwo: GreeterTwo;
greeterTwo = new Greeter("World");
console.log(greeterTwo.greet());

/*
When we say let greeterTwo: GreeterTwo, we're using Greeter as the type of instances of the class Greeter.
This is almost second nature to programmers from other object-oriented languages.
We're also creating another value that we call the constructor function. This is the function that is called
when we new up instances of the class. To see what this looks like in practice, let's take a look at the Javascript created
by the above example:
*/
let GreeterThree = (function(){
    function GreeterThree(message){
        this.greeting = message;
    }
    GreeterThree.prototype.greet = function(){
        return "Hello, " + this.greeting;
    }
    return GreeterThree;

})();

let greeterThree;
greeterThree = new GreeterThree("world");
console.log(greeterThree.greet());
/*
Let GreeterThree is going to be assigned the constructor function. When we call new and fun this function, we get
an instance of the class. The constructor function also contains all of the static members of the class. Another way
to think of each class is that there is an instance side and a static side.
*/
class GreeterFour{
    static standardGreeting = "Hello, there";
    greeting: string;
    greet(){
        if(this.greeting){
            return "Hello, " + this.greeting;
        } else {
            return GreeterFour.standardGreeting;
        }
    }
}

let greeterFour: GreeterFour;
greeterFour = new GreeterFour();
console.log(greeterFour.greet());

let greeterMaker: typeof GreeterFour = GreeterFour;
greeterMaker.standardGreeting = "Hey there!";
let greeterFive: GreeterFour = new greeterMaker();
console.log(greeterFive.greet());

/*
greeterFour works similarly to before. Instantiate the Greeter class, and use the object.
greeterMaker is the example of using the class directly. Create a new variable called greeterMake. This variable
holds the class itself, or said another way its constructor function. Here we use typeof GreeterFour, that is give 
it the type of the GreeterFour class itself rather than the instance type. Or more precisely, "give me the type of the symbol
called Greeter,"which is the type of the constructor function. This type will contain all of the static members of GreeterFour
along with the constructor that creates instances of the GreeterFour class. Show this by using new on greeterMaker,
creating new instances of Greeter and invoking them as before.
*/
GreeterFour.standardGreeting = "Hi, there!";//Valid
greeterFour.standardGreeting = "Hi, there!";//Error, standardGreeting is a static member of type GreeterFour.
//NOTE: two ways to change static variables: 1. change the original class' static variable values. 2. create
//a new variable whose type is the class(but not new instance), change its static member values.

/*
Using a class as an interface
A class declaration creates two things: a type representing instances of the class and a constructor function.
Because classes creates types, you can use them in the same places you would be able to use interfaces.
*/
class Point{
    x: number;
    y: number;
}

interface Point3d extends Point{
    z:number;
}
let point3d: Point3d = {x:1,y:2,z:3};
