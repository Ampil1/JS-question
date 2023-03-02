let p = 9;
function checkPrime(p,s,e){
   let start=2
   let end =10
    while(start<end){
    let flag=0;
    if(p==1) return `given ${p} is not prime number`
    for(let i=2;i<start/2;i++){
        if(p%i==0){
        console.log(p)
         flag=1;
         continue;
        }
    }
    start++
    if(flag == 0) return `${start}`;
}
}
console.log(checkPrime(p,1,10))