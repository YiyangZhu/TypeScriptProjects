///<reference path="ZooAnimals.ts" />

namespace Zoo{
    
    export class Bird implements Animal{
        skinType = "feather";
        isMammal(){
            return false;
        }
    }
}

let parrot = new Zoo.Bird();
alert(parrot.isMammal());

import rep = Zoo.Reptile;
let lizard: rep;
alert(lizard.skinType);