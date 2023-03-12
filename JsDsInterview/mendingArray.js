/**
 * WAF to rearrange an array in order – largest, smallest, 2nd largest, 2nd smallest...
I/P - [5, 8, 1, 4, 2, 9, 3, 7, 6]
O/P - [1, 9, 2, 8, 3, 7, 4, 6, 5]
 */
/**
 * Steps - 

1. Create a function and pass input array as parameter.

2. Sort the array in ascending order.

3. Initialise an empty array, start index to the zero, end index to the end position of array and an flag to boolean true. 

4. Run a for loop through the length of the array.

5. If flag is truthy, put the number from the end of array in the result array else from the beginning of the array.

6. Decrease the end index or increase the start index, and revert the flag.

7. Return the resulted array.
 */

function rearrangeArray(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let startIndex = 0,
    endIndex = arr.length - 1;
  let flag = true;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag) {
      result[i] = arr[endIndex--];
    } else {
      result[i] = arr[startIndex++];
    }

    flag = !flag;
  }

  return result;
}
console.log(rearrangeArray([5, 8, 1, 4, 2, 9, 3, 7, 6]));
