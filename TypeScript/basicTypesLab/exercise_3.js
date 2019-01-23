var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true;
        }
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
var numericColor = /** @class */ (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    numericColor.Colors = Colors;
    return numericColor;
}(colorChange));
var elementSets = [];
var color;
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
elementSets.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
