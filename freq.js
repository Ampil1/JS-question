// let arr = [1, 2, 3, 1, 3, 4, 4, 2, 3, 4, 5, 6];
let arr= "aabbbcccsddd"
function freq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  
  return obj ;
}
console.log(freq(arr));
//
function freq1(arr) {
  let obj = {};
  for (let num in arr) {
    if (obj[arr[num]]) {
        obj[arr[num]]++;
    } else {
        obj[arr[num]] = 1;
    }
  }
  return obj;
}
console.log(freq1(arr))
