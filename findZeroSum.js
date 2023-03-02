let arr = [-5, -2, 1, 2, 6, 8];
function findzerosum(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
  return 0;
}
console.log(findzerosum(arr));

//Liner solution
function linnearSolution(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(linnearSolution(arr));
