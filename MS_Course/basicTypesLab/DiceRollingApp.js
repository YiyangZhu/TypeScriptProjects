var DiceRoller = /** @class */ (function () {
    function DiceRoller(span) {
        this.span = span;
        span.style.cssText = "border: 5px solid black; display: inline-block; height: 50px; line-height:50px;  width: 50px; text-align: center; margin-left: 5px;vertical-align:middle;";
    }
    DiceRoller.prototype.rolleDice = function (diceValue) {
        this.span.textContent = DiceValues[diceValue];
        return true;
    };
    return DiceRoller;
}());
var DiceRollerButton = /** @class */ (function () {
    function DiceRollerButton(button) {
        this.button = button;
        this.button.style.cssText = "display: inline-block;";
        this.button.textContent = "Roll the Dice";
        this.button.style.cssText = "margin-left: 10px";
        this.button.style.backgroundColor = '#DCDCDC';
        document.body.appendChild(this.button);
    }
    DiceRollerButton.prototype.roll = function (diceCollection) {
        diceCollection.forEach(function (item) {
            item.span.textContent = DiceValues[getRandomIntInclusive(1, 12)];
        });
    };
    return DiceRollerButton;
}());
var DiceValues;
(function (DiceValues) {
    DiceValues[DiceValues["One"] = 1] = "One";
    DiceValues[DiceValues["Two"] = 2] = "Two";
    DiceValues[DiceValues["Three"] = 3] = "Three";
    DiceValues[DiceValues["Four"] = 4] = "Four";
    DiceValues[DiceValues["Five"] = 5] = "Five";
    DiceValues[DiceValues["Six"] = 6] = "Six";
    DiceValues[DiceValues["Seven"] = 7] = "Seven";
    DiceValues[DiceValues["Eight"] = 8] = "Eight";
    DiceValues[DiceValues["Nine"] = 9] = "Nine";
    DiceValues[DiceValues["Ten"] = 10] = "Ten";
    DiceValues[DiceValues["Eleven"] = 11] = "Eleven";
    DiceValues[DiceValues["Twelve"] = 12] = "Twelve";
})(DiceValues || (DiceValues = {}));
var Elements = [];
var diceCollection = [];
for (var index = 0; index < 4; index++) {
    Elements.push({
        'span': document.createElement('span')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Elements.map(function (elem, index) {
    var cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);
    diceCollection.push(cube);
});
var diceRollerButton = new DiceRollerButton(document.createElement('button'));
diceRollerButton.button.onclick = function (event) {
    diceRollerButton.roll(diceCollection);
};
