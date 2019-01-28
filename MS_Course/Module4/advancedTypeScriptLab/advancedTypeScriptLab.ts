class genericClass<T>{
    private val : T;
    setVal(val : T){
        this.val = val;
    }
    getVal() : T{
        return this.val;
    }
}

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();

element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));

let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal()
]

function isHTMLElement(x: any): x is HTMLElement{
    return x.style !== undefined;
}

function convertElement(elem : Element | HTMLElement): HTMLElement{
    if(!isHTMLElement(elem)){
        return <HTMLElement>elem;
    } else {
        return elem;
    }
}

function standardizeElements(elemArray: Array<any>) : Array<HTMLElement>{
    for(let elem of elemArray){
        convertElement(elem)
    }
    return elemArray;
}

let standardElements = standardizeElements(elementArray);


