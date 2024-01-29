// flatten
// Write a recursive function called flatten which accepts an
// array of arrays and returns a new array with all values flattened.

function flatten(arr, result = []) {
  // add whatever parameters you deem necessary - good luck!
  for (let i in arr) {
    if (typeof arr[i] === "object") {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
