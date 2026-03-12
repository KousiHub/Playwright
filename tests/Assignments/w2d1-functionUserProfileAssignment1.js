//1. Function declaration

function userProfile(name){
    console.log("Hello",name,"!");    

}
userProfile("Kousalya");
userProfile("World@123");

//2. Arrow function

let double = (num) => {
    return num*2;
    
}
console.log("Double of the number passed is "+ double(100));
console.log("Double of the number passed is "+ double(10.5));

//3. Anonymous function

let functionWithSetTimeOut = function(message){
    console.log(message);
}
setTimeout(functionWithSetTimeOut("This message is delayed by 2 seconds"),2000);
/*setTimeout(() => {
// code to execute
}, time_in_milliseconds);*/