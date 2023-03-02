// function countUnique(arr) {
//     // Create an empty object to store unique elements
//     let unique = {};
  
//     // Iterate through each element in the array
//     for (let i = 0; i < arr.length; i++) {
//       // Add the element as a property of the object
//       unique[arr[i]] = true;
//     }
  
//     // Return the count of unique elements as the number of object properties
//     return Object.keys(unique).length;
//   }
  
//   // Example usage
//   let array = [1, 2, 3, 4, 5, 1, 2, 3];
//   let count = countUnique(array);
//   console.log(count);  // Output: 5
  

  //sortedArray

  function countUnique(arr) {
    let count = 0;
  
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is different from the previous one, increment the count
      if (i === 0 || arr[i] !== arr[i-1]) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  let array1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  let count1 = countUnique(array1);
  console.log(count1);  // Output: 4
  