import { StringValidator } from "./Validation";

export const numberRegexp = /^[0-9]+$/;

export default class ZipCodeValidator implements StringValidator{
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s:string){
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

//Export statements are handy when exports need to be renamed for
//consumers, so the above example can be written as:
class ZipCodeValidatorTwo implements StringValidator{
    isAcceptable(s: string){
        return s.length === 5 && numberRegexp.test(s);
    }
}
export{ZipCodeValidatorTwo};
export{ZipCodeValidatorTwo as mainValidator};
