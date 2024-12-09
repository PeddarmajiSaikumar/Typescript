var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.class:A class is a blueprint for creating objects. It can include properties (attributes) and methods (functions).
var MedicalRecord = /** @class */ (function () {
    function MedicalRecord(patientName, diagnosis) {
        this.patientName = patientName;
        this.diagnosis = diagnosis;
    }
    MedicalRecord.prototype.displayRecord = function () {
        console.log("".concat(this.patientName, " is suffering with ").concat(this.diagnosis, "."));
    };
    return MedicalRecord;
}());
var record = new MedicalRecord("Saikumar", "Pneumonia");
record.displayRecord();
// 2.Inheritance:Inheritance allows a class to inherit properties and methods from another class. 
// In TypeScript, a class can extend another class using the extends keyword.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name, age, speciality) {
        var _this = _super.call(this, name, age) || this;
        _this.speciality = speciality;
        return _this;
    }
    Doctor.prototype.introduce = function () {
        console.log("Hello I'm Dr ".concat(this.name, ",a ").concat(this.speciality, " specilaist"));
    };
    return Doctor;
}(Person));
var doctor = new Doctor("Saikumar", 22, "Cardilogist");
doctor.introduce();
/* 3.Encapsulation:Encapsulation is the concept of bundling the data (properties) and methods that operate on the data into a single unit,
        i.e., a class. It also restricts direct access to some of the object's components.
        =>Public: Members are accessible from outside the class.
        =>Private: Members are not accessible from outside the class.
        =>Protected: Members are accessible within the class and its subclasses.
*/
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (money) {
        this.balance += money;
        console.log("Deposited money is ".concat(money));
    };
    BankAccount.prototype.getBalanace = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount("Saikumar", 1000);
account.deposit(200);
console.log(account.getBalanace());
/* 4.Polymorphism:Polymorphism means "many forms" and allows objects of different classes to be treated as objects of a common superclass.
     It also allows methods to have the same name but behave differently based on the object calling them.
*/
// Method Overriding
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makesSound = function () {
        console.log("Animal makes Sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makesSound = function () {
        console.log("Dog Barks");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makesSound = function () {
        console.log("Cat says meow");
    };
    return Cat;
}(Animal));
var myAnimal = new Animal();
var myDog = new Dog();
var myCat = new Cat();
myAnimal.makesSound();
myDog.makesSound();
myCat.makesSound();
/* 5.Abstraction: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.
     In TypeScript, abstraction can be achieved through abstract classes and interfaces.
     =>Abstract Class: A class that cannot be instantiated directly.
     It can have both abstract methods (without implementation) and concrete methods (with implementation).
*/
var _Animal = /** @class */ (function () {
    function _Animal() {
    }
    _Animal.prototype.makeSound = function () {
        console.log("Makes Sound");
    };
    return _Animal;
}());
var _Dog = /** @class */ (function (_super) {
    __extends(_Dog, _super);
    function _Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Dog.prototype.sound = function () {
        console.log("Dog Barks..");
    };
    return _Dog;
}(_Animal));
var dog = new _Dog();
dog.sound();
dog.makeSound();
