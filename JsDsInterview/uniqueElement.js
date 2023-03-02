/*
arr=[1,2,3,2,3,4]
*/
let arr = [1, 2, 3, 2, 3, 4];
console.log(...new Set(arr));
function findUniqElemnt(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  console.log(result.join());
}
findUniqElemnt(arr);
