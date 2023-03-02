/* Find the common prefix substring from all elements of array */
 let subStringInput = ['ixfiMain','ixfiCoinInfo','ixfiFinance','ixfiLaunchpad','ixfiAcademy']

/* 
subStringOutput = 'ixfi'
*/

function commanSubstring(subStringInput){
    let len = subStringInput.length;
    if(len==2) return "";
    if(len == 1) return a[0];
    /* sort the array of strings */
    subStringInput.sort();
   
        /* find the minimum length from first and last string */
        let end = Math.min(subStringInput[0].length, subStringInput[len-1].length);
   
        /* find the common prefix between the first and
           last string */
        let i = 0;
        while (i < end && subStringInput[0][i] == subStringInput[len-1][i] )
            i++;
   
        let pre = subStringInput[0].substring(0, i);
        return pre

}
console.log(commanSubstring(subStringInput))