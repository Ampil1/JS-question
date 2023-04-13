/*
Input: S = "abab"
Output: ba
Explanation:
In 1st operation: The first repeating 
character is a. After Removing the first 
character, S = "bab". After Reversing the 
string, S = "bab".
In 2nd operation: The first repeating 
character is b. After Removing the first 
character, S = "ab". After Reversing the 
string, S = "ba".
Now the string S does not contain any 
repeating character.
*/

function removerReaptingCharector(str){
    let obj={}
    let n=str.length-1;
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])==1){
            str.slice(2,n)
        }
    }
    return str
}
const result = removerReaptingCharector('abab')
console.log("result",result)