function checkAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let objCouter = {};
  for (let item of str1) {
    objCouter[item] = (objCouter[item] || 0) + 1;
  }
  for (let element of str2) {
    if (!objCouter[element]) {
      return false;
    } else {
      objCouter[element] -= 1;
    }
  }
  return true;
}

console.log(checkAnagram("Hello", "ellok"));
// check anagram 
// hello ,elloh