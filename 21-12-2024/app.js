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

// console.log(isArmStrong(370));

// Problem #17:-
// Create a function that prints from 1 to N.
// replace multiple of 3 with "Fizz";
// replace multiple of 5 with "Buzz";

function replaceFizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("5 aur 3 Wale --->", i, "Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("3 Wale --->", i, "Fizz");
    } else if (i % 5 === 0) {
      console.log("5 Wale --->", i, "Buzz");
    }
  }
}

// console.log(replaceFizzBuzz(15));

// Problem #19:-
// Create a function that prints number pyramids.

function printPyramidPattern(num) {
  for (let j = 1; j <= num; j++) {
    let lineCnt = "";
    //Adding spaces...
    for (let space = 1; space <= num - j; space++) {
      lineCnt += " ";
    }
    // Adding counting...
    for (let count = 1; count <= j; count++) {
      lineCnt += count;
    }
    // Adding reverse Counting...
    for (let reverseCount = j - 1; reverseCount >= j; reverseCount--) {
      lineCnt += reverseCount;
    }
    console.log(lineCnt);
  }
}

// console.log(printPyramidPattern(5));

// Problem 20:-
// Create a function that calculates the how many times that chartacter comes in a string.

function calcCharacters(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;
  }
  return obj;
}
console.log(calcCharacters("Happy Coding!"));
