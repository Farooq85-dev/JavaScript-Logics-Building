// Probelem #07:-
// Create a function that accept an input and calculates the sum of digits from that input.
function calculateSumOfDigits(input) {
  if (input <= 0 && Number.isInteger(input)) {
    throw Error("Number must be greater than 1 and also non-decimal!");
  }

  const numberToStr = input.toString().split("");
  let sum = 0;

  // numberToStr.forEach((num) => (sum += parseInt(num)));
  numberToStr.map((num) => (sum += parseInt(num)));
  return sum;
}

console.log(calculateSumOfDigits(465 + 46));

console.log(Number.isInteger(1.21454));
console.log(Number.isNaN(1654415));
console.log(Number.isSafeInteger(1.15454));
console.log(Number.isSafeInteger(1.15454));
