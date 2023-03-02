/**
 * Input: nums = [-4,-1,0,3,10]
  Output: [100]
 */

function sortSqureRoot(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (left <= right) {
    if (Math.abs(arr[left] > Math.abs(arr[right]))) {
      result.unshift(arr[left] ** 2);
      left++;
    } else {
      result.unshift(arr[right] ** 2);
      right--;
    }
    return result;
  }
}

console.log(sortSqureRoot([-4, -1, 0, 3, 10]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.unshift(nums[left] ** 2);
            left++;
        } else {
            result.unshift(nums[right] ** 2);
            right--;
        }
    }
    console.log("kk",sortedSquares)
    return result;
};

console.log("sortedSquares",sortedSquares
)