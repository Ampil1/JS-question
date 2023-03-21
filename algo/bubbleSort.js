function bubbleSort(arr) {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let myArray = [4, 2, 1, 3, 5];
const result = bubbleSort(myArray);//[1,2,3,4,5]
console.log(result)
