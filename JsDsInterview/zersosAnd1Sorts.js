let arr = [1, 0, 0, 1, 0, 0];
// o/p=> [0,0,0,0,1,1]

function zerosAnd1sSort(arr) {
  let countZeors = 0;
  let count1s = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZeors++;
    } else if (arr[i] === 1) {
      count1s++;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (j < countZeors) {
      arr[j] = 0;
    } else {
      arr[j] = 1;
    }
  }
  return arr;
}
console.log(zerosAnd1sSort(arr));
