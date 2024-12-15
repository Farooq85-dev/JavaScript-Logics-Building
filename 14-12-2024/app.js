// Problem #10:-
// Create a function that takes base and exponent and return the raising number to a specified power.

function calculateExponent(base, exponent) {
  let result = 1;
  // 1 ---> 1 x 2 ===> 2
  // 2 ----> 2 x 2 ===> 4
  // 4 ----> 4  x 2 ===> 8
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}
console.log(calculateExponent(2, 3));
console.log(calculateExponent(5, 4));