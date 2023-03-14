function countOccurrences(arr) {
  let obj = {};
  for (const el in arr) {
    obj[arr[el]] = (obj[arr[el]] || 0) + 1;
  }
  let ans = {};
  for (const key in obj) {
    if (obj[key] > 1) {
      ans[key] = obj[key];
    }
  }
  return ans;
}

let arr = [1, 2, 3, 5, 5, 3, 2];
let result = countOccurrences(arr);
console.log(result); // output: {'2': 2, '3': 2, '5': 2 }
