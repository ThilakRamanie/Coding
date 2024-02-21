//inbuilt sorting by javascript, we ask it to sort in descending order

const sortInc = (a, b) => b - a;

const arr = [1, 2, 3, 4, 54, 6, 12, 34, 11, 3, 98, 46, 34];

arr.sort(sortInc);

console.log(arr);

// bubble sort

const bubbleSort = (arr) => {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
  }
  return arr;
};

const arr1 = [1, 22, 3, 12, 4, 76, 23, 89, 23, 555, 22, 5, 6, 2];

bubbleSort(arr1);
