class colorChange{
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor(color: string): boolean{
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

interface ElementSet{
    'div': Element,
    'button': Element
}

enum Colors{
    Green,
    Red,
    Blue,
    Orange
}

let elementSets: Array<ElementSet> = [];

for(let index: number = 0; index < 4; index++){
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

let squareSizeNum: number = 100;
let squareSize = `${squareSizeNum}px`;

//Now that we have an array of 4 elementSets we are going to use the map() function to iterate over each of them
//and create our elements.
//create a map() function off of elementSets:
//Use the elem parameter from the function to create an instance of the colorChange class from exercise 1. This
//will set the this.div parameter to the element we are passing in from the array for that instance of that class.
elementSets.map((elem,index)=>{
    let colorChangeClass = new colorChange(elem.div);
    //assign the width and height to the divs, and the text change color to the button
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
    //bind an onclick function to the button to call the changecolor function within the color change class.
    //going to reference the Colors Enum we created earlier using the index parameter from the map callback function.
    (elem.button as HTMLElement).onclick = (event) =>{
        colorChangeClass.changeColor(Colors[index]);
    }
    //append those elements to the document.body
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})


