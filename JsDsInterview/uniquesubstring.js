// write  a program to return unique sub string

function getUniqueSubstrings(str) {
    let substrings = new Set();
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        substrings.add(str.slice(i, j));
      }
    }
  
    return substrings;
  }
  console.log(getUniqueSubstrings())