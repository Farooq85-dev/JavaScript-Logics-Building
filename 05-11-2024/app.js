// Problem #06:-
// Create a function that takes a string and return the reverse of that string.

function reverseString(str) {
  if (typeof str !== "string") return "Please provide string!";
  // return str.split("").reverse().join("");
  const strInArray = [...str];
  return strInArray.reverse().join("");
  //   return typeof str === "string"
  //     ? str.split("").reverse().join("")
  //     : "Please Provide a string!";
}

// console.log(reverseString("Hello")); // Correct
// console.log(reverseString(["World"])); // Incorrect

// function reverseStringForLoop(string) {
//   let result = "";
//   for (let k = string.length - 1; k >= 0; k--) {
//     result = result + string[k];
//   }
//   return result;
// }

// console.log(reverseStringForLoop("World"));

function reverseNumber(n) {
  if (!n) return "Please provide number";
  if (typeof n !== "number") return "Please provide number data type";
  //   return n.toString().split("").reverse().join("");
  const toStr = n.toString();

  let result = "";
  for (let j = toStr.length - 1; j >= 0; j--) {
    result = result + toStr[j];
  }
  return result;
}

console.log(reverseNumber(129338));
