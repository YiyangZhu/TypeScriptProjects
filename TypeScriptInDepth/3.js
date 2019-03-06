console.log(undefined == undefined); //true
console.log(null == undefined); //true
console.log(0 == undefined); //false
console.log('' == undefined); //false
console.log(false == undefined); //false
//recommend ==null to check for both undefined or null. 
var someglobal;
if (typeof someglobal !== 'undefined') {
    console.log(someglobal);
}
function foo() {
    console.log(this);
}
foo();
var bar = {
    foo: foo
};
bar.foo();
