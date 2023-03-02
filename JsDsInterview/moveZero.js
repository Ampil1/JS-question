/**
 * Input: nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]
 */
function moveZero(arr) {
  let countZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      countZero++;
    } else {
      arr[i - countZero] = arr[i];
    }
  }
  for (let i = arr.length - countZero; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZero([0, 1, 0, 3, 12]));
