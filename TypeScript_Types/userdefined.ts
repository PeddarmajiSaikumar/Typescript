// User Defined Types
/* Typescript has 6 userdefined types:
        1.Array:Represents a collection of items of a specific type.
        2.Tuple:Represents an array with fixed types and lengths.
        3.Enum:Represents a set of named constants.
        4.Functions:Functions are blocks of reusable code that perform a specific task. 
        5.Class:Classe is a template for creating objects.
        6.Interface:Defines a contract for objects, ensuring the object structure remains consistent.
*/

// 1.Array:
let numbers:number[]=[1,2,3,4,5,6,7,8,9];
let fruits:string[]=["apple","banana","orange","grapes"];
console.log(numbers);
console.log(fruits);

// 2.Tuple
let tuple:[number,string]=[10,"Saikumar"];
console.log(tuple);

// 3.Enum
enum Week{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log(Week);

// 4.Functions
function greet(message:string):string{
    return `Hello ${message}`;
}
console.log(greet("Saikumar"));

// 5.Class
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():string{
        return `Hello,My name is ${this.name} and I'm ${this.age} years old!`;
    }
}
let person=new Person("Saikumar",22);
console.log(person.greet());

// 6.Interface
interface Employee{
    id:number;
    name:string;
    email:string;  
}
let emp:Employee={id:1,name:"saikumar",email:"saikumar123@gmail.com"};
console.log(emp);