///<reference path="namespace_extended.ts"/>

namespace someNamespace{
    export let someVariable = "string";
    export function someFunction (){

    }

    export class someClass{

    }

    export namespace internalNamespace{
        export let internalVariable = "string";
    }

}

someNamespace.someFunction();

let localVariable = someNamespace.someVariable;

let instanceOfClass = someNamespace.someClass;

someNamespace.internalNamespace.internalVariable;

import internalSpace = someNamespace.internalNamespace;

internalSpace.internalVariable;

