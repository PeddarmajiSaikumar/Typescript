/* Type guards allow you to implement logic that narrows down a variable’s type based on conditions. */
/* 1.typeof Type Guard The typeof operator is used to check primitive types (string, number, boolean, etc.). */
function printValue(value) {
    if (typeof value === 'number') {
        console.log("Number value is: ".concat(value));
    }
    else if (typeof value === 'string') {
        console.log("String value is: ".concat(value));
    }
    else {
        console.log("Error");
    }
}
printValue(22);
printValue("Hello");
/*2.instanceof Type Guard The instanceof operator is used to check if an object is an instance of a specific class. */
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        console.log("Error");
    }
}
var myDog = new Dog();
var myCat = new Cat();
makeSound(myDog);
makeSound(myCat);
