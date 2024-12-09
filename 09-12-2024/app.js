// function isLeapYear(year) {
//   return year % 4 === 0 ? true : false;
// }

// console.log(isLeapYear(2024));

// Problem #09:-
// Create a function that takes a number and give only those all numbers in an array that are less than that input numbers on which the input is divideable.

function giveDivideAbleNumbersInArray(input) {
  let divideAbleNumbers = [];
  for (let j = 0; j <= input; j++) {
    if (input % j === 0) {
      divideAbleNumbers.push(j);
    }
  }
  return divideAbleNumbers;
}

console.log(giveDivideAbleNumbersInArray(11));
