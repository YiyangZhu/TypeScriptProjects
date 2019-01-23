/*
Function Overloading
Overloads
JS is inherently a very dynamic language. It's common for a single JS function to return different types
of objects based on the shape of the arguments passed in.
*/
let suits = ["hearts","spades","clubs","diamonds"];

/*
function pickCard(x): any{
    if (typeof x == "object"){
        let pickedCard = Math.floor(Math.random() * x.length);//若x 是一个array，随机挑其中一个element
        return pickedCard;//return a number
    }
    else if(typeof x == "number"){ // return an object
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};//若x是一个数字，则默认x小于52，花色是x除13后的整数，数字是x余13的数字。
    }
}

let myDeck = [{suit:"diamonds",card:2},{suit:"spades",card:10},{suit:"hearts",card:4}];
let pickedCard1 = myDeck[pickCard(myDeck)];//此时x为object，即array
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15); //此时x是一个数字，进入else中进行判断
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
*/

//the pickCard function will return two different things based on what the user has passed in. If the users passes
//in an object that represents the deck, the function will pick the card. If the user picks the card, we tell
//them which card they've picked. 
/*
How to describe the if-else function part to the type system:
To supply multiple function types for the same funciton as a list of overloads. This list is what the compiler
will use to resolve function calls. Let's create a list of overloads that describe what our pickCard accepts and what it returns.
*/
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x:number):{suit:string;card:number;};

function pickCard(x): any{
    if (typeof x == "object"){
        let pickedCard = Math.floor(Math.random() * x.length);//若x 是一个array，随机挑其中一个element
        return pickedCard;//return a number
    }
    else if(typeof x == "number"){ // return an object
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};//若x是一个数字，则默认x小于52，花色是x除13后的整数，数字是x余13的数字。
    }
}

let myDeck = [{suit:"diamonds",card:2},{suit:"spades",card:10},{suit:"hearts",card:4}];
let pickedCard1 = myDeck[pickCard(myDeck)];//此时x为object，即array
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15); //此时x是一个数字，进入else中进行判断
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/*
In order for the compiler to pick the correct typecheck, it follows a similar process to the underlying JS.
It looks at the overload list, and proceeding with the first overload attempts to call the function with the 
provided parameters. If it finds a match, it picks this overload as the correct overload. For this reason, its 
customary to order overloads from most specific to least specific.
Note that the function pickCard(x): any piece is not part of the overload list, so it only has two overloads: one
that takes an object and one that takes a number. Calling pickCard with any other parameter types would cause an error.
*/
