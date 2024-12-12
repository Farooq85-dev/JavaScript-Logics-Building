// Problem #07:-
// Create a function that accept two inputs and print table till second input.

// function createTable(input, range) {
//   for (let i = 1; i <= range; i++) {
//     console.log(input * i);
//   }
// }

// createTable(2, 10);

// Problem #08:-
// Create a function that accept an array of only numbers and print maximum number amoing all of them.
const findMax = (input) => {
  if (!Array.isArray(input) || input.length === 0) {
    return "We need a non-empty array!";
  }

  // Ensure all elements are numbers
  if (!input.every((item) => typeof item === "number")) {
    return "All array values must be numbers!";
  }

  // Initialize maxNum with the first value
  let maxNum = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > maxNum) {
      maxNum = input[i];
    }
  }

  return maxNum;
};

// Example Usage:
console.log(findMax([10, 20, 30])); // 30
// console.log(findMax([])); // "We need a non-empty array!"
// console.log(findMax([10, "a", 20])); // "All array values must be numbers!"

function finMaxViaMaxMethod(input) {
  return Math.max(...input);
}
console.log(finMaxViaMaxMethod([1, 56, 48, 4, 54, 84]));
