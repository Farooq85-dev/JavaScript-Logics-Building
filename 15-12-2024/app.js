// Problem #11:-
// Create a function that takes string and return the length of vowels and consonent in that string.

// function calculateVowelsAndConsonants(str) {
//   str = str.toLowerCase();
//   str = str.replaceAll(" ", "");
//   const vowles = "aeiou";
//   const consonants = "bcdfghjklmnpqrstvwxyz";
//   let howMuchVowels = 0;
//   let howMuchConsonants = 0;
//   let extra = 0;

//   for (let i = 0; i <= str.length - 1; i++) {
//     if (vowles.includes(str[i])) {
//       howMuchVowels++;
//     } else if (consonants.includes(str[i])) {
//       howMuchConsonants++;
//     } else {
//       extra++;
//     }
//   }
//   return { howMuchConsonants, howMuchVowels, extra };
// }

// console.log(calculateVowelsAndConsonants("Farooq Khan Zada 2323424"));

const str = "aeiou";
console.log("aeiou".includes(...str));
