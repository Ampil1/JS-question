/**
 * i/p=>'()'
 * o/p=> true
 * i.p=>'(((])))'
 * o/p= false
 */

function checkBlancedString(str) {
  let open = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let close = {
    ")": true,
    "}": true,
    "]": true,
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (close[char]) {
      if (open[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(checkBlancedString("[()]{}{[()()]()}"));//true
console.log(checkBlancedString("[(])"));//false
