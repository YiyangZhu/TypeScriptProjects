import validate from "./StaticZipCodeValidator";

let strings = ["Hello","98052","101"];

//use function validate
strings.forEach(s => {
    alert(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
})