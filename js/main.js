function unique(arr) {
  return [...new Set(arr)];
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));

function unique(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));

function charFrequency(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }

  return result;
}

console.log(charFrequency("hello"));

function isPalindrome(str) {
  const clearStr = str.toLowerCase().replace(/\s/g, "");

  const reversed = clearStr.split("").reverse().join("");

  return clearStr === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("hello")); // false
