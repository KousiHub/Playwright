
/*
Referred that For of is preferred than for each because 
it supports break/continue, await in Loops, faster than for each

for...of works directly with iterables and respects TypeScript’s type inference. 
forEach is limited to arrays (or array-like objects) and may require extra type assertions.
*/

let courses = ["Playwright","Selenium","Manual"]

//1. for of loop
console.log("Using FOR-OF loop");
for(let tempVal of courses){
    console.log(tempVal);    
}


//for each loop
console.log("Using FOREACH loop");
courses.forEach((tempVal)=>{
    console.log(tempVal);
})