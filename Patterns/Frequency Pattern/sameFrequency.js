// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.
  let objectN1 = {};
  let objectN2 = {};
  let n1Str = n1 + "";
  let n2Str = n2 + "";
  if (n1Str.length !== n2Str.length) return false;
  for (let i = 0; i < n1Str.length; i++) {
    objectN1[n1Str[i]] = (objectN1[n1Str[i]] || 0) + 1;
    objectN2[n2Str[i]] = (objectN2[n2Str[i]] || 0) + 1;
  }
  for (let number2 in objectN2) {
    if (objectN2[number2] != objectN1[number2]) return false;
  }
  return true;
}
