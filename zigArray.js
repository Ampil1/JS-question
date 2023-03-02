// function ZigZagArray(arr,){

// }
// ZigZagArray([4, 3, 7, 8, 6, 2, 1])
/**
 * condition a < b > c < d > e < f
 Input: arr[] = {4, 3, 7, 8, 6, 2, 1} 
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

Input: arr[] = {1, 4, 3, 2}
1 
Output: arr[] = {1, 4, 2, 3}
 */

/*reverse the array 

I/P => [1,2,3,4,5,6];
O/P => [6,5,4,3,2,1]
time complexity O(n), space complexity O(1);
**/
function revArray(){
    let arr=[1,2,3,4,5,6];
    for(let i=0;i<=Math.floor(arr.length/2);i++){

        [arr[arr.length-1-i],arr[i]]=[arr[i],arr[arr.length-1-i]]
    }
    console.log(arr)
    return arr
}
revArray()


/**
 * I/P => [1,2,3,4,5,6];
   O/P => [6,5,4,3,2,1]
 * 
 * time complexity O(n), space complexity O(1);
 */
function rotateofD(){
    let arr= [1,2,3,4,5,6]
}

function objToString(obj, ndeep) {
    if(obj == null){ return String(obj); }
    switch(typeof obj){
      case "string": return '"'+obj+'"';
      case "function": return obj.name || obj.toString();
      case "object":
        var indent = Array(ndeep||1).join('\t'), isArray = Array.isArray(obj);
        return '{['[+isArray] + Object.keys(obj).map(function(key){
             return '\n\t' + indent + key + ': ' + objToString(obj[key], (ndeep||1)+1);
           }).join(',') + '\n' + indent + '}]'[+isArray];
      default: return obj.toString();
    }
  }
  console.log(objToString({ "a" : 2, "b" : {"c" : 2, "d" : 4} }))