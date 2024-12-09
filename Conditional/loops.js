// // 1.for loop:The for loop is used to iterate over a block of code a specified number of times.
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// // 2.while loop:The while loop executes a block of code as long as the specified condition evaluates to true.
// let i: number = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// /*  3.do-while loop:The do...while loop is similar to the while loop, 
//         but it guarantees that the block of code will execute at least once before the condition is tested.
// */
// let k:number=0;
// do{
//     console.log(k);
//     k++;
// }while(k<=5)
// // 4.for...of loop:The for...of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.).
// let arr=[10,20,30,40,50];
// for(let val of arr){
//     console.log(val);
// }
// // 5.for...in loop:The for...in loop is used to iterate over the keys (indices) of an object or array.
// let person={name:"John",age:22,city:"Boston"};
// for(let key in person){
//     console.log(key,person[key]);
// }
// // 6.break statement:The break statement is used to exit a loop prematurely, even if the loop's condition hasn't been met.
// for(let i=0;i<5;i++){
//     if(i==2){
//         break;
//     }else{
//         console.log(i);
//     }
// }
// 7.continue:The continue statement is used to skip the current iteration and continue with the next iteration of the loop.
for (var i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    else {
        console.log(i);
    }
}
