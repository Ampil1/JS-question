function a(){
    let input=[1,"Turing",{x:2},[3,4],{y:5}];
    for(let i=0;i<input.length;i++){
        if(input[i]=="Turing") input.splice(i,1)
        else console.log(input[i])
    }
}
a()

function binarysearch(arr, k) {
    // code here
    let l=0;
    let r=arr.length-1
    let mid = Math.floor((r+l)/2)
    while(l<=r){
        if(arr[mid]==k)return mid;
        else if(arr[mid]>k){
            r=mid-1;
        }
        else{
          l=mid+1;  
        }
    } 
    return -1
}
console.log(binarysearch([1 ,2 ,3 ,4, 5],3))