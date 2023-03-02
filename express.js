// var htt= require('http');
// const server= htt.createServer();

const { all } = require("proxy-addr");
const { empty } = require("statuses");

// server.listen(3300,function(req, res){

//     console.log(`server running on post 3330`);
// })

// // Api structure
// server.get('/All', async function( req, req){
   
//     const allData=  awiat UserModel.find({});
//     if(allData.lenght==0){
//         return{
//         statusCode: 200,
//         Data: "Not such data found"
//         } 
//     }

//     return {
//         statusCode: 200,
//         Data:allData 
//     }

// })


//emp:

// number out count = @pram or query=n
// 
// const AllHigestSally = await empty.find({}).count(n);
const asseidingOrder= AllHigestSally.sor((a,b)=>  a-b)

const AllHigestSally = await empty.updateOne({"ampil":"ampil"},{"age":"age"})


await promise1() 
await promise2()
await promise3()
await promise4()

const allPromise= await  Promise.all([
promise1(),
promise2(),
promise3(),
promise4(),
])
console.log('promise1',allPromise[0]);
console.log("promise2",allPromise[1])
console.log("promise3",allPromise[2])
console.log("promise4",allPromise[2])


// const nums = [1,5,6,2,3,4];
// const num2 = [2,4,6,7]

// const n= nums.length
// function rec(arr1,arr2){
//     let newAra=[]
//    for(let i=0;i<arr1.length;i++){
//        for(let j=0;j<arr2.length;j++){
//            if(arr1[i]!=arr2[j]){
//                console.log("1",1)
//                newAra.push(arr1[i]);
//            }
//        }
//    }
//    return newAra;
// }
// console.log(rec(n))


// function a(){
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { alert(i); }, 1000 + i);
//   }


// }
// console.log(a())