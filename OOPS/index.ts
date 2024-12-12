// 1.class:A class is a blueprint for creating objects. It can include properties (attributes) and methods (functions).
class MedicalRecord{
    patientName:string;
    diagnosis:string;
    constructor(patientName:string,diagnosis:string){
        this.patientName=patientName;
        this.diagnosis=diagnosis;
    }
    displayRecord(){
        console.log(`${this.patientName} is suffering with ${this.diagnosis}.`);
    }
}
let record=new MedicalRecord("Saikumar","Pneumonia");
record.displayRecord();

/* 2.Inheritance:Inheritance allows a class to inherit properties and methods from another class. 
        In TypeScript, a class can extend another class using the extends keyword.
*/
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
class Doctor extends Person{
    speciality:string;
    constructor(name:string,age:number,speciality:string){
        super(name,age);
        this.speciality=speciality;
    }
    introduce(){
        console.log(`Hello I'm Dr ${this.name},a ${this.speciality} specilaist`);
    }
}
let doctor=new Doctor("Saikumar",22,"Cardilogist");
doctor.introduce();

/* 3.Encapsulation:Encapsulation is the concept of bundling the data (properties) and methods that operate on the data into a single unit, 
        i.e., a class. It also restricts direct access to some of the object's components.
        =>Public: Members are accessible from outside the class.
        =>Private: Members are not accessible from outside the class.
        =>Protected: Members are accessible within the class and its subclasses.
*/
class BankAccount{
    public accountHolder:string;
    private balance:number;
    constructor(accountHolder:string,balance:number){
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(money:number):void{
        this.balance +=money;
        console.log(`Deposited money is ${money}`);
    }
    getBalanace():number{
        return this.balance;
    }
}
let account=new BankAccount("Saikumar",1000);
account.deposit(200);
console.log(account.getBalanace());

/* 4.Polymorphism:Polymorphism means "many forms" and allows objects of different classes to be treated as objects of a common superclass.
     It also allows methods to have the same name but behave differently based on the object calling them.
*/
// Method Overriding
class Animal{
    makesSound(){
        console.log("Animal makes Sound");
    }
}
class Dog extends Animal{
    sound: any;
    makesSound(){
        console.log("Dog Barks");
    }
}
class Cat extends Animal{
    makesSound(){
        console.log("Cat says meow");
    }
}
let myAnimal:Animal=new Animal();
let myDog:Dog=new Dog();
let myCat:Cat=new Cat();
myAnimal.makesSound();
myDog.makesSound();
myCat.makesSound();

/* 5.Abstraction: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.
     In TypeScript, abstraction can be achieved through abstract classes and interfaces.
     =>Abstract Class: A class that cannot be instantiated directly.
     It can have both abstract methods (without implementation) and concrete methods (with implementation).
*/
abstract class _Animal {
    abstract sound():void;
    makeSound(){
        console.log("Makes Sound");
    }
}
class _Dog extends _Animal {
    sound(): void {
        console.log("Dog Barks..");
    }
}
let dog=new _Dog();
dog.sound();
dog.makeSound();