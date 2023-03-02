var long1= 0;

var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let newArray;
function longestString(arr){
  for (let i=0; i<arr.length; i++){
      if (arr[i].length > long1){
        console.log("arraY",arr[i],arr[i].length)
        long1= arr[i].length;
        newArray=arr[i]
      }

  }
  return {array:newArray,length:long1};
}
console.log(longestString(plorp))