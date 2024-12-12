/*  Type assertions instruct the TypeScript compiler to treat a value as a specified type. 
    In TypeScript, you can use the as keyword or <> operator for type assertions. 
*/
// 1.Angle Bracket(<>)
let value:any="Saikumar";
let len:number=(<string>value).length;
console.log(len);

// 2.as
let val:any="Saikumar";
let leng:number=(value  as string).length;
console.log(leng);


// When to use Assertions
// 1.Working with 'any' type :Example above
// 2.Accessing specific Properties
let someValue: unknown = "TypeScript";
if (typeof someValue === "string") {
    let result = (someValue as string).toUpperCase();
    console.log(result); 
}
// 3.DOM Manipulation
// let input = document.getElementById("user-input") as HTMLInputElement;
// input.value = "Hello!";