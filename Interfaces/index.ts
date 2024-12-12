/*Interfaces in TypeScript define the structure of an object by specifying the types of its properties.*/
// 1.Sample Interface
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Saikumar",
  age: 22,
};
console.log(person);

// 2.Opational Properties
interface Employee {
  firstName: string;
  middleName?: string;
  lastName: string;
}
let emp: Employee = {
  firstName: "Sai",
  middleName: "Kumar",
  lastName: "Peddarmaji",
};
function getFullName(emp: Employee) {
  if (emp.middleName) {
    return `${emp.firstName} ${emp.middleName} ${emp.lastName}`;
  } else {
    return `${emp.firstName} ${emp.lastName}`;
  }
}
console.log(getFullName(emp));

// Extending Interfaces
// 1.Extending Single Interface
interface Mailable{
    send(email:string):boolean;
    queue(email:string):boolean;
}
interface FutureMailable extends Mailable{
    later(email:string,after:number):boolean;
}
class Mail implements FutureMailable {
    send(email: string): boolean {
        console.log(`Sent email to ${email}.`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queued email to ${email}.`);
        return true;
    }
    later(email: string, after: number): boolean {
        console.log(`Will send email to ${email} in ${after} ms.`);
        return true;
    }
}
const mailer = new Mail();
mailer.send("example@test.com");
mailer.queue("example@test.com");
mailer.later("example@test.com", 5000);

// 2.Extending Multiple Interfaces
interface A{
  a():void;
}
interface B{
  b():void;
}
interface C extends A,B{
  c():void;
}
class Example implements C{
  c(): void {
    console.log("Methid a implemented from Interface A.");
  }
  a(): void {
    console.log("Methid b implemented from Interface B.");
  }
  b(): void {
    console.log("Methid c implemented from Interface C.");
  }
}
let example=new Example();
example.a();
example.b();
example.c();

// 3.Extending class
class Vehicle{
  private speed:number=0;  // A private property to store the current speed of the vehicle
  // Method to increase the speed of the vehicle by a given amount
  accelerate(amount:number):void{
    this.speed +=amount;
    console.log(`Accelerated to ${this.speed} km/h`);
  }
  // Method to decrease the speed of the vehicle. Reduces the speed by 10 units or stops at 0.
  brake():void{
    this.speed=Math.max(0,this.speed-10);
    console.log(`slowed down to ${this.speed} km/h`);
  }
}
interface AdvancedVehicle extends Vehicle{
  enableCruiseControl(speed:number):void;
}
// A specific class that represents cars, which implements the AdvancedVehicle interface
class Car extends Vehicle implements AdvancedVehicle {
  // Implementation of the method defined in the AdvancedVehicle interface
  enableCruiseControl(speed: number): void {
      console.log(`Cruise control set to ${speed} km/h.`);
  }
}
// Creating an instance of the Car class
const myCar = new Car();
myCar.accelerate(50);
myCar.enableCruiseControl(60); 
myCar.brake(); 