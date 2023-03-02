function factorial(num){
    if(num === 1){
        return num;
    }
    return factorial(num-1) 
}

console.log(factorial(4));
