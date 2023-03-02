function kthElement(A,B,k){ 
    //code here
    // A.sort((a,b) =>{return a-b});
    // B.sort((a,b) =>{return a-b})
    let finalArray=[...A,...B];
    finalArray.sort((a,b) => { return a-b})
    console.log("finalArray",finalArray)
     return finalArray[k]
}
console.log(kthElement([100, 112, 256, 349, 770],[72, 86, 113, 119, 265, 445, 892]),5)