//Another way of building up classes from reusable components is to build them
//by combining or mixing simpler partial classes.

//Disposable Mixin
class Disposable{
    isDisposed: boolean;
    dispose(){
        this.isDisposed = true;
    }
}

//Activatable Mixin
class Activatable{
    isActive: boolean;
    activate(){
        this.isActive = true;
    }
    deactivate(){
        this.isActive = false;
    }
}

//create class that will handle the combination of the two mixins
class SmartObject implements Disposable, Activatable{ //multiple inheritance
    isDisposed: boolean = false;
    dispose: () => void;
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor =>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>{
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    })
}