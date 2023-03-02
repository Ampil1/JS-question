/*
i/p='aabcdd'
o/p={a:2,b:1,c:1,d:2}
*/

function repeatedElement(str){
    let obj={};
    for(let element in str){
        obj[str[element]] = (obj[str[element]] || 0) + 1;
    }
    console.log(obj)
}
repeatedElement('aabcdd')