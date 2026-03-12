/*Arrays in JavaScript

1. Dynamic in size
Arrays grow and shrink in size as elements are added

2. Hetergenous in nature*
Arrays in JS can store different satatypes like number, string, boolean
*/


//1. push()-> add element to the end of the array


let letters1 =["a","b","c","d","e"]
letters1.push("f","g","h")
console.log("1. Push result => ",letters1);


/* O/P : 
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
] */




//2.pop() ->remove only from the end of the array

let letters2 =["a","b","c","d","e","f","g","h"]
letters2.pop();
console.log("2. Pop result => ", letters2);


/* O/P:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */



//3. unshift() -> add one or more elements to the beginning of the array

let letters3 =["a","b","c","d","e","f","g","h"]
letters3.unshift("x","y","z")
console.log("3. Unshift result => ",letters3);


/* O/P:
[
  'x', 'y', 'z', 'a',
  'b', 'c', 'd', 'e',
  'f', 'g'
] */



//4.shift() -> remove only one elment from the first part of the array

let letters4 =["x","y","z","a","b","c","d","e","f","g"]
letters4.shift();
console.log("4. Shift result => ",letters4);


/* O/p:
[
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
]*/



//5. slice() -> extract the part of array without modifying the original array

let arrayVal = ["a","b","c","d","e"] 
const resultslice = arrayVal.slice(1,3);
console.log("5. Slice result => ",resultslice); 

// O/P => [ 'b', 'c' ]



//6. splice()-> add or remove the elements from the array

//SYNTAX => array.splice(startIndex,deleteCount,ele1,ele2)

let arrayVal1 = ["a","b","c","d","e"] //Index =>[0,1,2,3,4]
arrayVal1.splice(1,3,"x","y","z")
console.log("6a. Splice ex1 result => ",arrayVal1);//[ 'a', 'x', 'y', 'z', 'e' ]

let arrayVal2 = ["a","b","c","d","e"]
arrayVal2.splice(2,3,"x","y","z")
console.log("6b. Splice ex1 result => ",arrayVal2);//[ 'a', 'b', 'x', 'y', 'z' ]


//7. concatenation -> join to arrays 

//Method 1: spreadsyntax // modern JS 

let number1 = [1,2,3,4]
let number2 = [5,6,7,8]
let spreadSyntax =[...number1,...number2]
console.log("7a. Concat result using spreadsyntax => ",spreadSyntax);

//Method 2: Using concat()

let number3 = [1,2,3,4]
let number4 = [5,6,7,8]
let concatArray = number3.concat(number4) // Older version of concat
console.log("7b. Concat result using concat method => ",concatArray); 

//8.sort()