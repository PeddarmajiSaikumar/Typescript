var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1.Arithmetic Operator:Used to perform basic mathematical operations.
var a = 10;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(++a);
console.log(b++);
console.log(++b);
// 2.Relatinal Operators:Used to compare two values.
var num1 = 2;
var num2 = 3;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 < num2);
// 3.Logical Operators:Used to combine conditional statements.
var x = true;
var y = false;
console.log(x && x);
console.log(x || y);
console.log(!x);
console.log(!y);
// 4.Bitwise Operators:Used for bit-level operations.
var p = 5;
var q = 3;
console.log(p & q);
console.log(p | q);
console.log(p ^ q);
console.log(~p);
console.log(p << q);
console.log(p >> q);
// 5.Assignment Operators:Used to assign values to variables.
var s = 8;
console.log(s += 1);
console.log(s -= 1);
console.log(s *= 1);
console.log(s /= 1);
console.log(s %= 1);
// 6.Ternary/Conditional Operator:A shorthand for if-else conditions.
var number1 = 2;
var number2 = 3;
var result = number1 > number2 ? "Greater" : "Lesser";
console.log(result);
// 7.typeof Operator:Used to check the type of a variable.
var firstName = "saikumar";
var age = 22;
console.log(typeof (firstName));
console.log(typeof (age));
// 8.spread Operator(...):Used to spread elements of an array or object.
var arr1 = [1, 2, 3, 4];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [5, 6, 7, 8, 9], false);
console.log(arr1);
console.log(arr2);
