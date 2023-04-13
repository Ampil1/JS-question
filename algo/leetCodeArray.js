/**
 *Given nums = [5, 2, 6, 1]
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
 */

function printRightMostElement(arr) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      result.push(count);
    }
    return result;
}

const nums = [5, 2, 6, 1];
console.log(printRightMostElement(nums));
