// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized.

function capitalizeWords(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return str;
  return [str[0].toUpperCase()].concat(capitalizeWords(str.slice(1)));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
