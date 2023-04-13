// Reverse a string
function reverseStr(str){
    let res="";
    for(let i=str.length-1;i>=0;i--){
        res +=str.charAt(i)
    }
    return res
}

console.log(reverseStr("ampil"));

function findMaxElement(arr){
    let max=arr[0];
    if(arr.length==0) return "invalid input";
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(findMaxElement([0,1,3,-1,-2]))
//check primeNumber
function checkNumberIsprime(number){
    let flag=true;
    // while()
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            flag=false
        }
    }
    if(flag)return "given number is prime";
    return "given number is not prime"
}
console.log(checkNumberIsprime(8))
// //bubble sort
function bubbleSort(arr) {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <=len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let myArray = [1,3,4,2,0];
const result = bubbleSort(myArray);
console.log(result)

// Find the nth Fibonacci number
function fibonacci(n){
    let a=0;
    let b=1;
    let c=0;
    let result=[a,b];
    // console.log(a,b)
    while(c<n){
        c=a+b;
        a=b;
        b=c
        result.push(c)
    }
    console.log(result.toString())
}
fibonacci(5)
// Find the factorial of a number
function factorial(n){
    let sum=1;
    for(let i=1;i<=n;i++){
        sum *=i 
    }
    console.log(sum)
}
factorial(5)
function rec(n){
    if(n<0) return 0
    else if(n===0) return 1
    else{
        return n * rec(n-1)
    }
}
console.log(rec(5))
// // Implement a binary tree and perform basic operations such as insertion, deletion, and traversal
function binary(arr ,target){
    let left=0;
    let right =arr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }
        else if(arr[mid]<target){
            left = left +1; 
        }
        else{
            right = right-1
        }
    }
}
console.log(binary([1,2,3,4,5,6],6))
/*
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.*/

function sort(arr){
    let countzero=0
    let count1s=0;
    let cout2s=0;
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="0"){
            countzero++
        }
        else if(arr[i]=="1"){
          count1s++  
        }
        else if(arr[i]=="2"){
           cout2s ++
        }
    }
 //   console.log("nnn",countzero,count1s,cout2s)
    for(let i=0;i<countzero;i++){
        res.push(0);
    }
     for(let i=0;i<count1s;i++){
        res.push(1);
    }
    for(let i=0;i<cout2s;i++){
        res.push(2);
    }
    return res;
 }
 console.log(sort([0,2,1,2,0]))