/* Functions:
    TypeScript functions are the building blocks of readable, maintainable, and reusable code.
    Syntax:
        function name(parameter: type, parameter:type,...): returnType {
            // do something
        }
*/

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(2,3));


// Types of Functions in Typescript
// 1.Named Functions
    function greet(message:string):string{
        return `Hello,${message}`;
    }
    console.log(greet("Saikumar!"));

// 2.Anonymous Functions
     const sum=function(a:number,b:number):number{
         return a+b;
     };
     console.log(sum(2,3));

// 3.Arrow Functions
    const multiply=(a:number,b:number):number=>a*b;
    console.log(multiply(2,3));

// 4.Optional Parameters
     function fullname(firstName:string,lastName?:string){
        return lastName?`${firstName} ${lastName}`:firstName;
     }
     console.log(fullname("Saikumar"));
     console.log(fullname("Sai","Kumar"));

// 5.Default Parameters
     function greetUser(name:string="Guest"):string{
         return `Welcome ${name}`;
     }
     console.log(greetUser());
     console.log(greetUser("Saikumar"));

// 6.Function Overloading
     function combine(a:string,b:string):string;
     function combine(a:number,b:number):number;
     function combine(a:any,b:any):any{
         return a+b;
     }
     console.log(combine(1,2));
     console.log(combine("Hello ","World"));