/*
Two sum of Zero 
[-5,4,-2,1,2,3,4]
o/p=>[-2,2] because  sum is zero
*/
//ON2
function twoSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  // return 0;
}
console.log(twoSum([-5, -4, -2, 1, 2, 3, 4]));

//O(N)
function twoSum1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(twoSum1([-5, -4, -2, 1, 2, 3, 4]));
