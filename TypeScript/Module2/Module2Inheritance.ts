class Animal{
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal{
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal{
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters = 45){
        console.log("Riding");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

//Interfaces extending classes: learned in last section
class Control{
    private state: any;
}

interface SelectableControl extends Control{
    select():void;
}

class Button extends Control{
    select(){}
}

class TextBox extends Control{
    select(){}
}

class ImageTwo{
    select(){}
}

class LocationTwp{
    select(){}
}

/*SelectableControl contains all of the members of Control, including the private state property. Since state is
a private member it is only possible for desendants of Control to implement SelectableControl. This is because
only descendants of Control will have a state private member that originates in the same declaration, which is a 
requirement for private members to be compatible.
Whithin the Control class it is possible to access the state private member through an instance of SelectableControl.
Effectively, a SelectableControl acts like a Control that is known to have a select method. The Button and TextBox classes
are subtypes of SelectableControl(because they both inherit from Control), but the ImageTwo and LocationTwo classes are not.
Inheritance in TypeScript is similar to inheritance in Java and C#.
*/

//demo
class someClass{
    someNumber: number = 6;
    someElement: Element;
    
    constructor(param1:Element){

    }

    someMethod = () => {
        this.someNumber = 5;
    }

    get GetMethod(){
        return this.someNumber;
    }
}

let thisElement = document.createElement('div');
let instanceOfSomeClass = new someClass(thisElement);
instanceOfSomeClass.someNumber; //Error if the someNumber is private.
let valueOfMethod = instanceOfSomeClass.someMethod();

let instance2 = new someClass(thisElement);
//instance2 and instanceOfSomeClass have different states.
//protected: only accessible by it and derived classes.
//if readonly: after initialized, cannot be changed.

class ExtendedClass extends someClass{
    constructor(param1: Element){
        super(param1);
    }
    someOtherMethod = () => {
        this.someNumber;
    }
}

let newInstance = new ExtendedClass(thisElement);
