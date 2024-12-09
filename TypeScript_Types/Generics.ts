/*
    Generics: Generics in TypeScript provide a way to create reusable, 
    flexible components that work with a variety of data types while 
    maintaining type safety.
*/

function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<String>("Hello"));
console.log(identity<number>(2));