// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

//My solution:
function countUniqueValues(arr1){
    if(arr1.length===0) return 0;
      let left = 0;
      let right = arr1.length-1;
      let count =1;
      while(left < right) {
          if(arr1[left]===arr1[right]) {
              return count;
          }
          if(arr1[left]!==arr1[left+1]) {
              left++;
              count++;
          } else {
              left++;
          }
          if(arr1[right]!==arr1[right-1]) {
              right--;
              count++;
          } else {
              right--;
          }
      }
      return count;
  }

  // one liner
  return new Set(numbers).size;