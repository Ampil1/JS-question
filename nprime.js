let start=2;
let end = 20;
function nPrime(S,E){
while(S<=E){
    let isPrime= true;
    for(let i=2;i<S;i++){
        if(S%i==0){
            isPrime= false;
            break;
        }
    }
    if(isPrime){
        console.log(`prime number:${S}`)
    }
    // console.log(S);
    S++
   }
}
nPrime(start,end)