/*
[2,2,1,1,1,2,2]
o/p=> 2 becouse repeated element
*/

function repeateElemnt(nums) {
    const count = {};
    const n = nums.length;
    
    for(let i=0; i<n; i++){
        count[nums[i]] = (count[nums[i]] || 0) + 1;
        if(count[nums[i]] > n/2){
            return nums[i];
        }
    }
}
console.log(repeateElemnt([2,2,1,1,1,2,2]))