1; //Given a string, reverse each word in the sentence . Input : "Welcome to IBM" , Output: "emocleW ot MBI" Solution:

function reverseSentence(str) {
  let words = str.split(" ");
  
  // Map over the array and reverse each word using a callback function
  let reversedWords = words.map(function (word) {
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a string
  let reversedString = reversedWords.join(" ");
  return reversedString;
  return result;
}
console.log(reverseSentence("Welcome to IBM"));
