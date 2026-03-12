/*
Named function
Function expression
Arrow function
*/

//1. Named function

function namedFun(){
    console.log("This is named function");
    
}
namedFun();

//2. Function expression or Anonymous function

let funExp = function (){
    console.log("This is function expression");
    
}
funExp();

//3. Arrow function 
//Here instead of the keyword "function", use "=>", called as "fat arrow"

let funArrow = () => {
        console.log("This is fat arrow function");

}
funArrow();

//4. Single line arrow function
//Here in a sinle line both function name and the purpose of the function is defined

let funSingleArrow = (a,b)=>a+b
console.log(`This is single arrow function`,funSingleArrow(5,4));

//5. Callback function

function playVideo(name,video,y,x){
    console.log("User "+"is watching  "+video);
    x(); // calls saveHistory
    y(); // calls showRelatedVideos
}
    
    function saveHistory(){
        console.log("This video is saved");
    }

    function showRelatedVideos(){
        console.log("Show recommended videos");
    }

playVideo("Hari", "JS Video", saveHistory, showRelatedVideos);
