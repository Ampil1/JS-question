/**
 * 
 *i/p="asdsaa"
 o/p=[a,s]
 */
function duplicates(str) {
  let obj = {};
  let result = [];
  let unique =[];
  for (let char in str) {
    obj[str[char]] = (obj[str[char]] || 0) + 1;
  }
  for (let [key, value] of Object.entries(obj)) {
    if (value > 1) {
      result.push(key);
    }
    else{
        unique.push(key)
    }
  }
  console.log("unique",unique)
  return result;
}
const ans = duplicates("asdsaa");

console.log("ANS", ans);
