class DiceRoller {
    span: Element;
    constructor(span: Element) {
        this.span = span;
        (<HTMLElement>span).style.cssText = "border: 5px solid black; display: inline-block; height: 50px; line-height:50px;  width: 50px; text-align: center; margin-left: 5px;vertical-align:middle;";
    }
    rolleDice(diceValue: number): boolean {
        (<HTMLElement>this.span).textContent = DiceValues[diceValue];
        return true;
    }
}

class DiceRollerButton {
  button: Element;
  constructor(button: Element) {
    this.button = button;
    (<HTMLElement>this.button).style.cssText = "display: inline-block;";
    this.button.textContent = "Roll the Dice";
    (<HTMLElement>this.button).style.cssText = "margin-left: 10px";
    (<HTMLElement>this.button).style.backgroundColor = '#DCDCDC';
    document.body.appendChild(this.button);
  }

  roll(diceCollection: Array<DiceRoller>) {
    diceCollection.forEach((item) => {
      item.span.textContent = DiceValues[getRandomIntInclusive(1, 12)];
    });
  }
}

enum DiceValues {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve
}
interface DiceTypes {
    span: Element;
}
let Elements: Array<DiceTypes> = [];

let diceCollection: Array<DiceRoller> = [];

for (let index: number = 0; index < 4; index++) {
    Elements.push({
        'span': document.createElement('span'),
    });
}
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Elements.map((elem, index) => {
    let cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);

    diceCollection.push(cube);
});

let diceRollerButton = new DiceRollerButton(document.createElement('button'));

(diceRollerButton.button as HTMLElement).onclick = (event): void => {
  diceRollerButton.roll(diceCollection);
}
