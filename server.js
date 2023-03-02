var app = require('http');
 var server= app.createServer();
 server.listen(3000, function (){
 console.log(`server is running on port 3000 `)
 })

// hellow how are you,
var str= 'hellow how are you'
function reverString(str){
 
     let rev='';
     for(let i=str.length-1;i>=0;i--){

        rev = rev + str.charAt(i);
     }
      return rev
}
console.log(reverString(str))