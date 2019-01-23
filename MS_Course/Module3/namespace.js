var someNamespace;
(function (someNamespace) {
    someNamespace.otherVariable = "other string";
    function otherFunction() {
    }
    someNamespace.otherFunction = otherFunction;
})(someNamespace || (someNamespace = {}));
///<reference path="namespace_extended.ts"/>
var someNamespace;
(function (someNamespace) {
    someNamespace.someVariable = "string";
    function someFunction() {
    }
    someNamespace.someFunction = someFunction;
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    someNamespace.someClass = someClass;
    var internalNamespace;
    (function (internalNamespace) {
        internalNamespace.internalVariable = "string";
    })(internalNamespace = someNamespace.internalNamespace || (someNamespace.internalNamespace = {}));
})(someNamespace || (someNamespace = {}));
someNamespace.someFunction();
var localVariable = someNamespace.someVariable;
var instanceOfClass = someNamespace.someClass;
someNamespace.internalNamespace.internalVariable;
var internalSpace = someNamespace.internalNamespace;
internalSpace.internalVariable;
