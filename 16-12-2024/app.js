// Problem #12:-
// Create a func that accept a number and return its factors and non factors.

function findFactors(input) {
  const factors = [];
  const notFactors = [];
  for (let i = 0; i <= input; i++) {
    if (input % i === 0) {
      factors.push(i);
    } else {
      notFactors.push(i);
    }
  }
  return { factors, notFactors };
}

console.log(findFactors(12));
  