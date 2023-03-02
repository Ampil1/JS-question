async function myFunction1() {
 return 1;
}

async function myFunction2() {
  return await myFunction1()+1;
 }
 async function myFunction3() {
  return await myFunction2()+1;
 }

async  function main(){
   return await myFunction3()
 }
 console.log(main())