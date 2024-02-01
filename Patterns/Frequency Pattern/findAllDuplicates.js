// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)

function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  let objectArr = {};
  let resultArr = [];
  for (let no of arr) {
    objectArr[no] = (objectArr[no] || 0) + 1;
  }
  for (let obj in objectArr) {
    if (objectArr[obj] > 1) {
      resultArr.push(+obj);
    }
  }
  return resultArr;
}
