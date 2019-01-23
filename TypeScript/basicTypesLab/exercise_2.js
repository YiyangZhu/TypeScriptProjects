var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var elementSets = [];
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
//Now that we have an array of 4 elementSets we are going to use the map() function to iterate over each of them
//and create our elements.
//create a map() function off of elementSets:
//Use the elem parameter from the function to create an instance of the colorChange class from exercise 1. This
//will set the this.div parameter to the element we are passing in from the array for that instance of that class.
elementSets.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    //assign the width and height to the divs, and the text change color to the button
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    //bind an onclick function to the button to call the changecolor function within the color change class.
    //going to reference the Colors Enum we created earlier using the index parameter from the map callback function.
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    //append those elements to the document.body
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
