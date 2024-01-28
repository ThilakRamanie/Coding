// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr1) {
  if (arr1.length === 0) return 1;
  return arr1[0] * productOfArray(arr1.slice(1));
}
