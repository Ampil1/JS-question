/**
 * WAF to find a character with maximum occurrence.

I/P - abccccd
O/P - c

I/P - apple1231111
O/P - 1
 */

function maxChar(str) {
  let obj = {};
  let result = "";
  let max = 0;
  for (let el in str) {
    obj[str[el]] = (obj[str[el]] || 0) + 1;
  }

  for (let element in obj) {
    if (obj[element] > max) {
      max = obj[element];
      result = element;
    }
  }
  return {result,length:max};
}

console.log(maxChar("apple1231111"));
