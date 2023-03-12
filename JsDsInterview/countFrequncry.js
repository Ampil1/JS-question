/**
 * input=>"aabbafff"
 * o/p=>"a3b2f3"
 */



/**
 * 
 * @param {*} str 
 * @returns 
 */

function printHello(str){
    let obj={};
    let result='';
    for(let i=0;i<str.length;i++){
        obj[str[i]] = (obj[str[i]]||0)+1;
    }
    for(let key in obj){
        result += key + obj[key]
    }
    return result
}
console.log(printHello("aabbafff"))