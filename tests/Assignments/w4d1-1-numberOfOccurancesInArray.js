
const nums = [2,4,5,2,1,2]; 
const k = 2;
let kCount = 0;

for(let i = 0; i <= nums.length-1; i++){
    
    if(nums[i] === k){
        kCount++;        
    }  
}
console.log("Count of K in given array is ",kCount);  