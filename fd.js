// import { fs} from 'fs';
// import { userInfo } from 'os';

// fs. readFile('c:/ampil/sd.pdf');
// fs.readSyncfile('cd.pdf');

// //user collection
// //userName, email,
// // user grp collection
// //userName, email
//  {
//    { user1:xxx
//     grp1:xxx
//    },
//    { user2:xxx
//     grp2:xxx
//    }
// }

// function  getAllUserAndGrpdetail(userName){
//      const userD = UserInfo.find({});
//     const allUserId = userD.filter(id=>id.userName);
//      const  userg = Usergrp.find({$in:{userName:userName}});
//      return {userD,userg}
// }
let arr = [2, 3, 4, 5];
let x = 4;
let flag = 0;
let index;
function SearchArray(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      flag = 1;
      index = i;
      break;
    }
  }
  if (flag == 1) return index;
  else retrun - 1;
}
console.log(SearchArray(arr, x));
