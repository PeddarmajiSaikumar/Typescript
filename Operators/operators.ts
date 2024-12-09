// 1.Arithmetic Operator:Used to perform basic mathematical operations.
let a:number=10;
let b:number=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(b++);
console.log(++b);


// 2.Relatinal Operators:Used to compare two values.
let num1:number=2;
let num2:number=3;
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1===num2);
console.log(num1!==num2);
console.log(num1>=num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1<num2);

// 3.Logical Operators:Used to combine conditional statements.

let x:boolean=true;
let y:boolean=false;
console.log(x && x);
console.log(x || y);
console.log(!x);
console.log(!y);

// 4.Bitwise Operators:Used for bit-level operations.
let p:number=5;
let q:number=3;
console.log(p & q);
console.log(p | q);
console.log(p ^ q);
console.log(~p);
console.log(p<<q);
console.log(p>>q);

// 5.Assignment Operators:Used to assign values to variables.
let s:number=8;
console.log(s+=1);
console.log(s-=1);
console.log(s*=1);
console.log(s/=1);
console.log(s%=1);

// 6.Ternary/Conditional Operator:A shorthand for if-else conditions.
let number1:number=2;
let number2:number=3;
let result=number1>number2?"Greater":"Lesser";
console.log(result);

// 7.typeof Operator:Used to check the type of a variable.
let firstName:string="saikumar";
let age:number=22;
console.log(typeof(firstName));
console.log(typeof(age));

// 8.spread Operator(...):Used to spread elements of an array or object.
let arr1=[1,2,3,4];
let arr2=[...arr1,5,6,7,8,9];
console.log(arr1);
console.log(arr2);