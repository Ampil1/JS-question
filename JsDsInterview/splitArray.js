/**
 * given the arr[1,2,3,4,5,6,7,8,9] split the by given value
 * s=3 so o/p [[1,2,3],[4,5,6],[7,8,9]]
 * Note will dynamic
 */

function splitArrayByGivenValue(arr, s) {
  let ans = [];
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    subArray.push(arr[i]);
    if (subArray.length == s) {
      ans.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    ans.push(subArray);
  }
  return ans;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let s = 2;

const result = splitArrayByGivenValue(arr, s);
console.log(result);
/**
 * s=2
 * o/p=[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
 * s=3
 * o/p=[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
 */
