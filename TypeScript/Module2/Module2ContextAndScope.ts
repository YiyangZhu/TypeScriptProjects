/*
this

since TS is a superset of JS, TS developers need to learn how to use this and how to spot when it's not being used correctly.
TS lets you catch incorrect uses of this with a couple of techniques. 

this and arrow functions
In JS, this is a variable that's set when a funciton is called. This makes it a very powerful and flexible feature,
but it comes at the cost of always having to know about the context that a function is executing in. This is confusing,
especially when returning a function or passing a function as an argument.
*/

let deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function(){
        return function(){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit : this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
/*createCardPicker is a function that itself returns a function. If we tried to run the example, we would get an error
instead of the expected alert box. This is because the this being used in the function created by createCardPicker
will be set to window instead of our deck object. That's because we call cardPicker() on its own. A top-level
non-method syntax call like  this will use window for this.
We can fix this by making sure the funciton is bound to the correct this before we return the function to be used 
later. This way, regardless of how it's later used, it will still be able to see the original deck object. To do this,
we change the function expression to use the ECMAScript 6 arrow syntax. Arrow functions capture the this where the
function is created rather than where it is invoked.
*/

let deckTwo = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function(){
        //NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return() => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit],card: pickedCard % 13};
        }
    }
}

let cardPicker2 = deckTwo.createCardPicker();
let pickedCard2 = cardPicker2();
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

/*
Unfortunately, the type of this.suits[pickedSuit] is still any. That's because this comes from the function
expression inside the object literal. To fix this, you can provide an explicit this parameter. this parameters
are fake parameters that come first in the parameter list of a function:
*/
function f(this : void){
    //
}

interface Card{
    suit: string;
    card: number;
}

interface Deck{
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deckThree: Deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    //NOTE: the function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck){
        return() => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit],card: pickedCard % 13};
        }
    }
}
let cardPickerThree = deckThree.createCardPicker();
let pickedCardThree = cardPickerThree();

alert("card: " + pickedCardThree.card + " of " + pickedCardThree.suit);

/*
Now TS knows that createCardPicker expects to be called on a Deck object. That means that this is of type Deck now,
not any, so -- noImplicitThis not cause any errors.
*/


/*
this parameters in callbacks
You can also run into errors with this in callbacks, when you pass functions to a library that will later call them.
Because the library that calls your callback will call it like a normal function, this will beundefined. With some
work you can use this parameters to prevent errors with callbacks too. First, the library author needs to 
annotate the callback type with this:
*/

interface UIElement{
    addClickListener(onclick: (this: void, e: Event) => void) : void;
}

//this: void means that addClickListener expects onclick to be a function that does not require a this type.

class Handler{
    info: string;
    onClickBad(this: Handler, e: Event){
        //used this here, using this callback would crash at runtime
        this.info = e.message;
    }
}

let h = new Handler();
uiElement.addClickListener(h.onClickBad);//Error

//fix the error
class Handler2{
    info: string;
    onClickGood(this: void, e: Event){
        console.log('Clicked!')
    }
}

let h2 = new Handler2();
uiElement.addClickListener(h2.onClickGood);

class Handler3{
    info: string;
    onClickGood = (e: Event) => {this.info = e.message}
}
//works because arrow functions don't capture this, so you can always pass them to something that expect this: void.
//Downside is that one arrow function is created per object of type Handler. Methods, are only created once and attached
//to Handler's prototype. They are shared between all objects of type Handler.