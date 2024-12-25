// Problem #21:-
// Create a program that checks the strign input is in correct alphabetical order.

// Such as
// "acgr": true
// "asda": false
// console.log("a".charCodeAt(0));


// function isCorrectAlphabeticalOrder(str) {
//     str = str.replaceAll(" ", "")
//     str = str.toLowerCase("")
//     for (let i = 0; i < str.length - 1; i++) {
//         console.log(str[i], str[i + 1]);
//         if (str[i] > str[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

// console.log("b".charCodeAt(0));
// console.log("a".charCodeAt(0));

// console.log(isCorrectAlphabeticalOrder("aAbcdefghij"));

// Problem 22:-
// Create a function that actually checksif a number is anagram or not.

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        console.log("Length is not same!");
    }

    let str1Chars = {}

    for (let i = 0; i < str1.length; i++) {
        if (!str1Chars[str1[i]]) {
            str1Chars[str1[i]] = 0
        }
        str1Chars[str1[i]]++
    }

    let str2Chars = {}

    for (let j = 0; j < str2.length; j++) {
        if (!str2Chars[str2[j]]) {
            str2Chars[str2[j]] = 0
        }
        str2Chars[str2[j]]++
    }

    console.log(str1Chars, str2Chars);

    for (let key in str1Chars) {
        if (str1Chars[key] !== str2Chars[key]) {
            return false
        }
    }

    return true
}

// console.log(isAnagram("str", "rst")); // true
// console.log(isAnagram("strr", "rst")); // false


// Problem 24:-
// Create a function that validate password in a strong way.
function isPasswordStrong(password) {

    if (typeof password !== "string") {
        return console.log("Password must be string!")
    };

    password = password.trim()

    if (password.length < 8) {
        return console.log("Password must be 8 characters long!")
    }

    const smallLetters = "abcdefjhigklmnopqrstuvwxyz";
    const capitalLetters = smallLetters.toUpperCase();
    const specialChars = "!@";

    let isSmallLettersExists = false;
    let isCapitalLetterExists = false;
    let isSpecialLettersExists = false;

    for (const chars of password) {
        if (smallLetters.includes(chars)) {
            isSmallLettersExists = true
        }
        else if (capitalLetters.includes(chars)) {
            isCapitalLetterExists = true
        } else if (specialChars.includes(chars)) {
            isSpecialLettersExists = true
        }
    }
    console.log("Small letters exists:-", isSmallLettersExists);
    console.log("Capital letters exists:-", isCapitalLetterExists);
    console.log("Special Characters letters exists:-", isSpecialLettersExists);

}

console.log(isPasswordStrong("ASDFGSEWEEEa!"));


// console.log("a".includes("a"));
