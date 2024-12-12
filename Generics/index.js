/* TypeScript generics allow you to write reusable and generalized forms of functions, classes, and interfaces.  */
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(123));
// 1.Generic Functions:A function can use generics to maintain type safety across its arguments and return values.
function swap(a, b) {
    return [b, a];
}
var result = swap("TypeScript", 42);
console.log(result);
// 2.Genric Classes:
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var stringBox = new Box("Hello");
console.log(stringBox.getContents());
var numberBox = new Box(123);
console.log(numberBox.getContents());
var pair = { key: "age", value: 25 };
console.log(pair);
// 4.Generic Constraints
function printLength(item) {
    console.log(item.length);
}
printLength("Hello");
printLength([1, 2, 3, 4]);
