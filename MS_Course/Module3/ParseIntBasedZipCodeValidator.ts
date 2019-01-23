
export class ParseIntBasedZipCodeValidator{
    isAcceptable(s: string){
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

//Export original validator but rename it

export{ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

//Import a single export from a module
import{ZipCodeValidator} from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();

//imports can also be renamed

import{ZipCodeValidator as ZCV} from "./ZipCodeValidator";
let myValidatorTwo = new ZCV();

//Import the entire module into a single variable, and use it to
//access the module exports.
import * as validator from "./ZipCodeValidator";
let myValidatorThree = new validator.ZipCodeValidator();
