// Problem #13:-
// Create a function to calculate avg of given numbers

function calcAvg(input) {
  let sum = 0;

  for (let i = 0; i <= input.length - 1; i++) {
    sum += input[i];
  }

  return sum / input.length;
}

console.log(calcAvg([12, 52, 8, 5]));

// Problem #14:-
// Create a function to check prime number.

function isPrime(input) {
  let result = true;
  for (let j = 2; j < input; j++) {
    if (input % j === 0) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPrime(12));
