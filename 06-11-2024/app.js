// Problem #07:-
// Create a function to calculate the factorial of given input and return it.

// function createFactorial(input) {
//   if (!input) return "Please provide any number";
//   if (typeof input !== "number") return "Please provide valid number type.";
//   if (input < 0) return "Number must be between 0 to any.";
//   let result = 1;
//   for (let j = 1; j <= input; j++) {
//     result *= j;
//   }
//   return result;
// }

// function recursiveFunction(n) {
//   // Base Condition
//   if (n === 0) {
//     console.log("Hello From Base Condition!");
//     return;
//   }
//   console.log("Hello From Recursive Call!");
//   recursiveFunction(n - 1);
// }

// recursiveFunction(3);

function factorialViaRecursiveFn(input) {
  if (input === 0 || input === 1) return 1;
  return input * factorialViaRecursiveFn(input - 1);
}
console.log(factorialViaRecursiveFn(5));

// console.log(createFactorial(0)); // Correct
// console.log(createFactorial(6.225)); // Correct

// Problem #08:-
// Create a function and use for loop to calculate the square of given input and return it.

// function createSquare(input) {
//   if (typeof input === "number") {
//     let result;
//     for (let k = 1; k <= input; k++) {
//       result = input * k;
//     }
//     return result;
//   } else {
//     return "Please provide a valid number!";
//   }
// }

// console.log(createSquare(100));

// Problem #09:-
// Print counting from 100 to 1 via for loop.

// for (let k = 100; k >= 1; k--) {
//   console.log(k);
// }

// Problem #10:-
// Print counting from 1 to 100 via for loop.

// for (let k = 1; k <= 100; k++) {
//   console.log(k);
// }
