/*
To create an overloaded method
TS gives you the ability to do something that JS does not - create overloaded methods. And overloaded method is a method that
has the same name as another, but because it provides a different call signature is treated as a different function.
When you have a derived method of a class this gives you the special opportunity to create an overloaded mehtod within the subclass.
In this task, we are going to create an overloaded method for changeColor in our numericColor class, and modify the existing
changeColor method in the colorChange class to be compatible with the overloaded method. The end result will be that
you can call changeColor with a different parameter and the subclass' version of the method will return the value. We wiil
then use the subclass' version of changeColor to have our squares turn a random color whenever the change color button is pressed.
*/
class colorChange{
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor (color: number|string) : boolean{
        if(typeof(color) === "number"){
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

enum Colors{
    Green,
    Red,
    Blue,
    Orange
}

class numericColor extends colorChange{
    static Colors = Colors;
    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }

    changeColor (color: number) : boolean{
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

interface ElementSet{
    'div': Element,
    'button': Element
}

let elementSets: Array<ElementSet> = [];

let color: string;
let squareSizeNum: number = 100;
let squareSize = `${squareSizeNum}px`;

for(let index: number = 0; index < 4; index++){
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

let getRandomIntInclusive: Function = (min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

elementSets.map((elem,index)=>{
    let colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(getRandomIntInclusive(0,3));
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})
