function secondMax(maxInput){
    let max=-Infinity;
    let min= -Infinity;
     for(let i=0;i<maxInput.length;i++){
       if(max<maxInput[i]){
          min=max;
          max= maxInput[i]
       
        }
        else if (maxInput[i]!=max && maxInput[i]>min ){
                    min = maxInput[i];
        }
     
    }
    return min
    }
    console.log(secondMax([1,9,12,5,7,52,54,42,47,63,51]))