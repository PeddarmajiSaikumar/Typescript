// Built-in Types
/*
    TypeScript has 5 built in types:
        1.Number:Represents both integers and floating-point numbers.
        2.String:Represents text data.
        3.Boolean:Represents true or false values.
        4.Void:Used for functions that do not return a value.
        5.Null or Undefined:Used to represent null or undefined values.
*/
// 1.Number
var age = 22;
var price = 99.92;
console.log(age);
console.log(price);
// 2.String
var firstName = "Saikumar";
console.log("Hello ".concat(firstName));
// 3.Boolean
var isVerified = true;
console.log("The answer for the above is ".concat(isVerified, "."));
// 4.Void
function logMessage(message) {
    console.log(message);
}
// 5.Null or Undefined
var x = null;
var y = undefined;
console.log(x);
console.log(y);
/*
  any:TypeScript also has a special type, any, that you can use
  whenever you don’t want a particular value to cause typechecking
  errors.
*/
var namee = "saikumar";
console.log(namee);
