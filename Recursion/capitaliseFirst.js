// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

function capitalizeFirst(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return str;
  const word = str[0][0].toUpperCase() + str[0].substring(1);
  return [word].concat(capitalizeFirst(str.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
