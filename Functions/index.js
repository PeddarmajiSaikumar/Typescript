/* Functions:
    TypeScript functions are the building blocks of readable, maintainable, and reusable code.
    Syntax:
        function name(parameter: type, parameter:type,...): returnType {
            // do something
        }
*/
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// Types of Functions in Typescript
// 1.Named Functions
function greet(message) {
    return "Hello,".concat(message);
}
console.log(greet("Saikumar!"));
// 2.Anonymous Functions
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3));
// 3.Arrow Functions
var multiply = function (a, b) { return a * b; };
console.log(multiply(2, 3));
// 4.Optional Parameters
function fullname(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
console.log(fullname("Saikumar"));
console.log(fullname("Sai", "Kumar"));
// 5.Default Parameters
function greetUser(name) {
    if (name === void 0) { name = "Guest"; }
    return "Welcome ".concat(name);
}
console.log(greetUser());
console.log(greetUser("Saikumar"));
function combine(a, b) {
    return a + b;
}
console.log(combine(1, 2));
console.log(combine("Hello ", "World"));
