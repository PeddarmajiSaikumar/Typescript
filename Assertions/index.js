/*  Type assertions instruct the TypeScript compiler to treat a value as a specified type.
    In TypeScript, you can use the as keyword or <> operator for type assertions.
*/
// 1.Angle Bracket(<>)
var value = "Saikumar";
var len = value.length;
console.log(len);
// 2.as
var val = "Saikumar";
var leng = value.length;
console.log(leng);
// When to use Assertions
// 1.Working with 'any' type :Example above
// 2.Accessing specific Properties
var someValue = "TypeScript";
if (typeof someValue === "string") {
    var result = someValue.toUpperCase();
    console.log(result);
}
// 3.DOM Manipulation
// let input = document.getElementById("user-input") as HTMLInputElement;
// input.value = "Hello!";
