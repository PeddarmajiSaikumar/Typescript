// User Defined Types
/* Typescript has 6 userdefined types:
        1.Array:Represents a collection of items of a specific type.
        2.Tuple:Represents an array with fixed types and lengths.
        3.Enum:Represents a set of named constants.
        4.Functions:Functions are blocks of reusable code that perform a specific task.
        5.Class:Classes are templates for creating objects.
        6.Interface:Defines a contract for objects, ensuring the object structure remains consistent.
*/
// 1.Array:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fruits = ["apple", "banana", "orange", "grapes"];
console.log(numbers);
console.log(fruits);
// 2.Tuple
var tuple = [10, "Saikumar"];
console.log(tuple);
// 3.Enum
var Week;
(function (Week) {
    Week[Week["Sunday"] = 0] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
})(Week || (Week = {}));
console.log(Week);
// 4.Functions
function greet(message) {
    return "Hello ".concat(message);
}
console.log(greet("Saikumar"));
// 5.Class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello,My name is ".concat(this.name, " and I'm ").concat(this.age, " years old!");
    };
    return Person;
}());
var person = new Person("Saikumar", 22);
console.log(person.greet());
var emp = { id: 1, name: "saikumar", email: "saikumar123@gmail.com" };
console.log(emp);
