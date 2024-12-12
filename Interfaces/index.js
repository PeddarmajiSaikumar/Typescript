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
var person = {
    name: "Saikumar",
    age: 22,
};
console.log(person);
var emp = {
    firstName: "Sai",
    middleName: "Kumar",
    lastName: "Peddarmaji",
};
function getFullName(emp) {
    if (emp.middleName) {
        return "".concat(emp.firstName, " ").concat(emp.middleName, " ").concat(emp.lastName);
    }
    else {
        return "".concat(emp.firstName, " ").concat(emp.lastName);
    }
}
console.log(getFullName(emp));
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.send = function (email) {
        console.log("Sent email to ".concat(email, "."));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queued email to ".concat(email, "."));
        return true;
    };
    Mail.prototype.later = function (email, after) {
        console.log("Will send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    return Mail;
}());
var mailer = new Mail();
mailer.send("example@test.com");
mailer.queue("example@test.com");
mailer.later("example@test.com", 5000);
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.c = function () {
        console.log("Methid a implemented from Interface A.");
    };
    Example.prototype.a = function () {
        console.log("Methid b implemented from Interface B.");
    };
    Example.prototype.b = function () {
        console.log("Methid c implemented from Interface C.");
    };
    return Example;
}());
var example = new Example();
example.a();
example.b();
example.c();
// 3.Extending class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0; // A private property to store the current speed of the vehicle
    }
    // Method to increase the speed of the vehicle by a given amount
    Vehicle.prototype.accelerate = function (amount) {
        this.speed += amount;
        console.log("Accelerated to ".concat(this.speed, " km/h"));
    };
    // Method to decrease the speed of the vehicle. Reduces the speed by 10 units or stops at 0.
    Vehicle.prototype.brake = function () {
        this.speed = Math.max(0, this.speed - 10);
        console.log("slowed down to ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
// A specific class that represents cars, which implements the AdvancedVehicle interface
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementation of the method defined in the AdvancedVehicle interface
    Car.prototype.enableCruiseControl = function (speed) {
        console.log("Cruise control set to ".concat(speed, " km/h."));
    };
    return Car;
}(Vehicle));
// Creating an instance of the Car class
var myCar = new Car();
myCar.accelerate(50);
myCar.enableCruiseControl(60);
myCar.brake();
