/**
 * WAF to flatten an array without inbuilt function.

flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]) // [0, 1, 2, 3, 4, 5]
 */
/**
 * Steps - 

1. Create a function and pass input array as parameter.

2. Initialise an empty array.

3. Run a for loop through the length of the array.

4. If the current position has an array then call the function and concat the returned array to result.

5. Else push the current directly to result.

6. Return the flattened array.
 */

function flatterArray(arr){
    let result =[];
    for(let i =0;i<arr.length;i++){
    if(Array.isArray(arr[i])) {
        result = result.concat(flatterArray(arr[i]));
    } else {
        result.push(arr[i]);
    }
}
    return result;
}

console.log(flatterArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))