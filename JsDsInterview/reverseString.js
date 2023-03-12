
/**
 * Write a function to reverse a string without inbuild functions.

const input = "ABCDEFG";
const output = reverseString(input);

console.log(output);

Expected output - GFEDCBA
*/
function reverseString(str) {
    let result='';
    for(let i=str.length-1;i>=0;i--){
        result +=str.charAt(i)
    }
    return result
}
console.log(reverseString("ampil"))