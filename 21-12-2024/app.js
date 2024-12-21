// Problem #14:-
// Create a function that count the number of words in a sentnce.

function calcWords(sentence) {
  sentence = sentence.trim();
  const splitSentence = sentence.split(" ").length;
  return splitSentence;
}

// console.log(calcWords("  Coding Practice in Programming using Javascript."));

// Problem #15:-
// Create a function that calculates temperature from celsius to fahrenheit?

function celsiusToFarhenheit(celsuis) {
  return Math.round((celsuis * 9) / 5 + 32);
}

// console.log(celsiusToFarhenheit(27));

// Problem #16:-
// Create a function that converts farhenheit into celsius.

function farhenheitToCelsius(farhenheit) {
  return Math.round((farhenheit - 32) * (5 / 9));
}

// console.log(farhenheitToCelsius(81));

// C * 9/5 + 32
// (F - 32) * (5 / 9)

// Problem #16:-
// Create a function that checks if a number is armstrong.

function isArmStrong(num) {
  const toStr = num.toString().split("");
  const lengthStr = toStr.length;

  let result = 0;
  for (let i = 0; i <= lengthStr - 1; i++) {
    result += Math.pow(Number(toStr[i]), lengthStr);
  }
  return result === num;
}

console.log(isArmStrong(370));
