/**
 * WAF that determines whether the second array is a subsequence of the first one, given two non-empty arrays of integers.

I/P - 
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, 6, -1, 10]

O/P - 
true


I/P - 
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, -1, 6, 10]

O/P - 
false
 */

/**
 * Steps - 

1. Create a function and pass input array and sequence as parameter.

2. Initialize a index to 0.

3. Run a for loop through the length of the array.

4. Check for equality between integer from array at the current iteration and sequence at the index.

5. If matches, increase the index else, continue.

6. If the sequence is valid subsequence of array then index will be equal to the length of the sequence.

7. Check for equality and return the output.
 */

function checkSubArray(array, sequence) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence[index] === array[i]) {
      index++;
    }
  }

  return sequence.length === index;
}

console.log(checkSubArray([5, 1, 22, 25, 6, -1, 8, 10], [1, -1, 6, 10]));//false
console.log(checkSubArray([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));//true
