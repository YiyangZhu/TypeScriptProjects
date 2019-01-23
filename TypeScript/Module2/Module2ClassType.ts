/*
implementing an interface
*/

interface ClockInterface{
    currentTime: Date;
}

class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){

    }
}

interface ClockInterfaceTwo{
    currentTime:Date;
    setTime(d: Date);
}

class ClockTwo implements ClockInterfaceTwo{
    currentTime : Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h : number, m : number){

    }
}

//difference between the Static and Instance side of classes
interface ClockConstructor{
    new(hour: number, minute: number)
}

class ClockThree implements ClockConstructor{ // incorrectly implements interface
    currentTime: Date;
    constructor(h:number, m:number){}
}
//this is because when a class implements an interface, only the instance side of the class is checked. Since the 
//constructor sits in the static side, it is not included in this check.
//need to work with the static side of the class directly. define two interfaces: ClockConstructor for the constructor
// and ClockInterface for the instance methods.
interface ClockConstructor{
    new(hour:number, minute: number): ClockInterfaceThree
}

interface ClockInterfaceThree{
    tick();
}

function createClock(ctor:ClockConstructor, hour: number, minute:number):ClockInterfaceThree{
    return new ctor(hour,minute);
}

class DigitalClock implements ClockInterfaceThree{
    constructor(h: number, m:number){}
    tick(){
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterfaceThree{
    constructor(h:number, m: number){}
    tick(){
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock,12,17);
let analog = createClock(AnalogClock,7,32);


