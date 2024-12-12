/*
    An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.
    To combine types, you use the & operator as follows:
    type typeAB = typeA & typeB; 
    Note:
        Note that the union type uses the | operator that defines a variable that can hold a value of either typeA or typeB
        let varName = typeA | typeB;
*/
// 1.Intersection of Two interfaces.
interface BusinessPartner{
    name:string;
    credit:number;
}
interface Identity{
    id:number;
    name:string;
}
interface contact{
    email:string;
    phone:string;
}
type Employee=Identity&contact;
let e:Employee={
    id:100,
    name:"Saikumar",
    email:"sai123@gmail.com",
    phone:"+91 79816 68856"
};
type Customer=BusinessPartner&contact;
let c:Customer={
    name:"Saikumar",
    credit:1000000,
    email:"sai123@gmail.com",
    phone:"+91 79816 68856"
}
console.log(e);
console.log(e);

// 2.Intersection of One class and Interface
class Student{
    id:number;
    name:string;
    constructor(id:number,name:string){
    }
}
interface Skills{
    skills:string[];
}
type skilledPerson=Student&Skills;
let person:skilledPerson={
    id:21,
    name:"saikumar",
    skills:["TypeScript","Angular"]
}
console.log(person);