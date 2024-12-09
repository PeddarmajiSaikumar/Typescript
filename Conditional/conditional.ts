// 1.If-Statement

let num: number = 30;
if (num > 25) {
  console.log(`${num} is greater than 25`);
}

// 2.If-else Statement

let age: number = 18;
if (age >= 18) {
  console.log("You are eligible to Vote");
} else {
  console.log("You are not eligible to Vote");
}

// 3.else-if ladder

let marks: number = 88;
if (marks >= 91) {
  console.log("A-grade");
} else if (marks >= 81) {
  console.log("B-grade");
} else if (marks >= 71) {
  console.log("C-grade");
} else if (marks >= 61) {
  console.log("D-grade");
} else if (marks >= 51) {
  console.log("E-grade");
} else {
  console.log("Fail");
}

// 4.Switch statement

let weekDay: number = 3;
switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day!");
}