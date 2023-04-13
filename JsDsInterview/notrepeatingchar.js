function firstNonRepeatingChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);
  for (let [key, value] of Object.entries(obj)) {
    //   console.log("key",key,"value",value)
    if (value <= 1) {
      return key;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("aabbcdee")); // Output: 'c'
