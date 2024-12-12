/* Type guards allow you to implement logic that narrows down a variable’s type based on conditions. */
/* 1.typeof Type Guard The typeof operator is used to check primitive types (string, number, boolean, etc.). */
function printValue(value:number|string){
    if(typeof value==='number'){
        console.log(`Number value is: ${value}`);
    }else if(typeof value==='string'){
        console.log(`String value is: ${value}`);
    }else{
        console.log("Error");
    }
}
printValue(22);
printValue("Hello");

/*2.instanceof Type Guard The instanceof operator is used to check if an object is an instance of a specific class. */
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else if(animal instanceof Cat) {
        animal.meow();
    }else{
        console.log("Error");
    }
}
const myDog = new Dog();
const myCat = new Cat();
makeSound(myDog); 
makeSound(myCat); 