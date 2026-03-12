let arr = [2,4,3,5,7,8,9];
let target = 10;
for(let i = 0; i < arr.length; i++){
  for(j = i+1; j < arr.length; j++){
    if(arr[i]+arr[j] === target){
      console.log(`${arr[i]},${arr[j]}`)
    }
  }
}