/**
 *  const users = [{ id: 1, name: "Alice" }, 
 { id: 2, name: "Bob" }, 
 { id: 3, name: "Charlie" }, ];
 // result should be { 1: "Alice", 2: "Bob", 3: "Charlie" }
 */

 const users = [{ id: 1, name: "Alice" }, 
 { id: 2, name: "Bob" }, 
 { id: 3, name: "Charlie" }, ];

 function mapUserIdsToNames(arr){
    let result={};
    for(let i=0;i<arr.length;i++){
        let user =users[i];
        result[user.id] = user.name
    }
    return result

 }

 console.log(mapUserIdsToNames(users))