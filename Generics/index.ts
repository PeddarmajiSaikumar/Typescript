/* TypeScript generics allow you to write reusable and generalized forms of functions, classes, and interfaces.  */
function identity<T>(value: T): T {
    return value;
}
console.log(identity<string>("Hello")); 
console.log(identity<number>(123));     

// 1.Generic Functions:A function can use generics to maintain type safety across its arguments and return values.
function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}
const result = swap<string, number>("TypeScript", 42);
console.log(result); 


// 2.Genric Classes:
class Box<T> {
    private contents: T;
    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContents()); 
const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); 

// 3.Generic Interfaces
interface Pair<T, U> {
    key: T;
    value: U;
}
const pair: Pair<string, number> = { key: "age", value: 25 };
console.log(pair); 

// 4.Generic Constraints
function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}
printLength("Hello");          
printLength([1, 2, 3, 4]);     