function countFrequncyinSentence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let newString = str[i];
    if (newString !== " ") {
      if (obj[newString]) obj[newString]++;
      else {
        obj[newString] = 1;
      }
    }
  }
  return obj;
}
let str = "javascript is programming language";
console.log(countFrequncyinSentence(str));
