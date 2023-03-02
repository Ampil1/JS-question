//
var erxp='[()]{}{[()()]()}'

function checkstack(erxp){
    let stack=[];
    for(let i=0;i<erxp.length;i++){

        let x=erxp[i];
       if(x=="["|| x=="("|| x=="{") {
           stack.push(x);
           
       }
       if(stack.length==0) return  "invalid";
       for(let j=0;j<stack.length;i++){
           if(j== "[" || )
       }
    }

}