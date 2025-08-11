// function unique(arr) {
//   return [...new Set(arr)];
// }

// console.log(unique([1, 2, 2, 3, 4, 4, 5]));

// function unique(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(unique([1, 2, 2, 3, 4, 4, 5]));

// function charFrequency(str) {
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     if (result[str[i]]) {
//       result[str[i]] += 1;
//     } else {
//       result[str[i]] = 1;
//     }
//   }

//   return result;
// }

// console.log(charFrequency("hello"));

// function isPalindrome(str) {
//   const clearStr = str.toLowerCase().replace(/\s/g, "");

//   const reversed = clearStr.split("").reverse().join("");

//   return clearStr === reversed;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Race car")); // true
// console.log(isPalindrome("hello")); // false

// function testHoisting() {
//   console.log(a);
//   var a = 10;

//   console.log(b);
//   let b = 20;

//   console.log(c);
//   const c = 30;
// }

// console.log(testHoisting()); // ReferenceError: Cannot access 'b' before initialization

// console.log(sayHi());

// var sayHi = function () {
//   console.log("Привет от переменной!");
// };

// function sayHi() {
//   console.log("Привет от функции!");
// }

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const sorted1 = str1.toLowerCase().split("").sort().join("").trim();
//   const sorted2 = str2.toLowerCase().split("").sort().join("").trim();

//   return sorted1 === sorted2;
// }

// console.log(isAnagram("listen", "silent")); // true ✅
// console.log(isAnagram("hello", "world")); // false ❌

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// function removeDuplicates2(arr) {
//   return arr.filter((item, i) => {
//     return arr.indexOf(item) === i;
//   });
// }

// function groupBy(arr, key) {
//   const result = {};

//   arr.forEach((element) => {
//     const groupKey = element[key];

//     if (!result[groupKey]) {
//       result[groupKey] = [];
//     }

//     result[groupKey].push(element);
//   });

//   return result;
// }

// const data = [
//   { category: "fruit", name: "apple" },
//   { category: "vegetable", name: "carrot" },
//   { category: "fruit", name: "banana" },
//   { category: "vegetable", name: "celery" },
// ];

// console.log(groupBy(data, "category"));

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"

// function hasUniqueChars(str) {
//   return (new Set(str).size = str.length);
// }

// console.log(hasUniqueChars("abcde")); // true ✅
// console.log(hasUniqueChars("hello")); // false ❌

// function hasUniqueChars2(str) {
//   const seen = {};

//   for (let char of str) {
//     if (seen[char]) {
//       return false;
//     }
//     seen[char] = true;
//   }

//   return true;
// }

// console.log(hasUniqueChars("abcde")); // true ✅
// console.log(hasUniqueChars("hello")); // false ❌

const numbers = [4, 7, 1, 9, 12, 5, 3];

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [4, 12]

const doubled = evens.map((num) => num * 2);
console.log(doubled); // [8, 24]

const sorted = doubled.sort((a, b) => a - b);
console.log(sorted); // [8, 24]

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .sort((a, b) => a - b);

console.log(result); // [8, 24]
