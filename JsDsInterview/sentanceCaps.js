/**
 * WAF to capitalize a sentence without inbuilt functions in Javascript.
 * I/P - "a small sentence"
O/P - "A Small Sentence"
 */

/**
 * Steps - 

1. Create a function and pass input string as parameter.

2. Initialize a result variable with the first chararter as uppercase of the input string.

3. Run a for loop starting from the first position till end of string.

4. Check for space on the previous position.

5. If space is found then transform the character to uppercase and add to result string.

6. Else add the character as it is.

7. Return the result which is capitalized.
 */

function sentanceCaps(str) {
    let result = str[0].toUpperCase();
    for(let i=1; i<str.length; i++){
        //check for space on previous position
        if(str[i-1] === " "){
          result += str[i].toUpperCase(); 
        } else{
          result += str[i];
        }
      }
    
      return result;
}

console.log(sentanceCaps('a small sentence'))