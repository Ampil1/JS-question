function reverseArrayWithoutLoop(arr){
let start=0,end=arr.length-1;
 while(start<=end){
    if(arr[start]<=arr[end]){
       let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
    start++
    end--
 }
return arr;
}
const result =reverseArrayWithoutLoop([1,2,3,5,45]);
console.log(result)