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
let age: number = 22;
let price: number = 99.92;
console.log(age);
console.log(price);

// 2.String
let firstName: string = "Saikumar";
console.log(`Hello ${firstName}`);

// 3.Boolean
let isVerified: boolean = true;
console.log(`The answer for the above is ${isVerified}.`);

// 4.Void
function logMessage(message: string): void {
  console.log(message);
}

// 5.Null or Undefined
let x: number = null;
let y: string = undefined;
console.log(x);
console.log(y);

/* 
  any:TypeScript also has a special type, any, that you can use
  whenever you don’t want a particular value to cause typechecking 
  errors. 
*/

let namee="saikumar";
console.log(namee);