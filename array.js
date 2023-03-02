function  sort012(arr, N)
{
    //your code here
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    for(let i=0;i<N;i++){
       
        if(arr[i]===0){
           arr0.push(arr[i]) 
        }
    }

    for(let i=0;i<N;i++){
        if(arr[i]===1){
           arr1.push(arr[i])  
        }
    }
    for(let i=0;i<N;i++){
         if(arr[i]===2){
           arr2.push(arr[i])  
        }
        
    }
    return [...arr0,...arr1,...arr2].join(',')
}
console.log(sort012([0,2,1,0,2],5))