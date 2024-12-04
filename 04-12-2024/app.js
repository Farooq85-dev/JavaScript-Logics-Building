// Problem #01:-
// Create a program that prints "Hello World!" in the console.

// console.log("Hello World!");

// Problem #02:-
// Create a function that takes two params a and b and return their sum.

// function add(a, b) {
//   return typeof a === "number" && typeof b === "number"
//     ? a + b
//     : "Invlaid Number Type";
// }

// console.log(add(2, 2)); // Correct
// console.log(add(63216848, 4984564)); // Correct
// console.log(add(-1, -2)); // Correct
// console.log(add(-1, +2)); // Correct
// console.log(add(-1, 0)); // Correct
// console.log(add(2.255, 0.541511)); // Correct
// console.log(add("dad", 2)); // Incorrect
// console.log(add(2, "2")); // Incorrect

// Problem #03:-
// Create a function that calculates the area of rectangle.

// function calculateArea(length, width) {
//   return typeof length === "number" &&
//     typeof width === "number" &&
//     length >= 1 &&
//     width >= 1
//     ? length * width
//     : "Invalid number type or length or width is less than or equal to zero.";
// }

// console.log(calculateArea(2, 3)); // Correct
// console.log(calculateArea(0.22, 3.00054984)); // Correct
// console.log(calculateArea(-1, 3)); // Incorrect
// console.log(calculateArea(1, -1)); // Incorrect
// console.log(calculateArea(1, "-1")); // Incorrect
// console.log(calculateArea("1", "")); // Incorrect

// Problem #04:-
// Create a function that check if a number is odd or even.

// function isOddOrEven(a) {
//   return typeof a === "number" && a % 2 === 0
//     ? "This is Even number."
//     : "This is Odd number.";
// }

// function isOddOrEven(a) {
//   if (typeof a === "number") {
//     switch (a % 2) {
//       case 0:
//         return "Even Number";
//       default:
//         return "Odd Number";
//     }
//   } else {
//     return "Please give valid number";
//   }
// }

// console.log(isOddOrEven(2)); // Correct
// console.log(isOddOrEven(0.2)); // Correct
// console.log(isOddOrEven(-0.2)); // Correct
// console.log(isOddOrEven(10000)); // Correct
// console.log(isOddOrEven(10000)); // Incorrect

// Problem #05:-
// Create a functoion that takes three number and return the smallest

// function isSmallest(a, b, c) {
//   if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
//     return Math.min(a, b, c);
//   } else {
//     return "Invalid Number";
//   }
// }

// console.log(isSmallest(3, 3, 3)); //Correct

const numbers = [3, 3, 3];
function findSmallestNumber([a, b, c]) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  } else {
    return a;
  }
}

console.log(findSmallestNumber(numbers));

// const marks = [1, 5841, 481, -5, -0, -1, 85];
// console.log(Math.min(...marks));
