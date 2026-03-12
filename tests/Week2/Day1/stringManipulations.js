/*
1. String declaration => "", '', ``
2. Object literal

*/

//String literal => Memory efficient => most used
let comName = "Testleaf"; //address in memory is 101
let firmName = 'Testleaf'; //address in memory is same 101, since both var points to same value 

//Object literal => Not memory efficient => rarely used
let comNameObj = new String(`Testleaf`); //address in memory is 101
let firmNameObj = new String("Testleaf"); //address in memory is 102, stores in diff memory

//Escape sequence => \, \n, \t

//1. \=> used when '(apostophe) is used in between string
let testEsc1 = 'It\'s a regression test';
console.log(testEsc1);

//2. \".."\=> also used when "(double quoted) is used in between string
let testEsc2 = "This is \"double quote\"";
console.log(testEsc2);

//3. \t=> space
let testEsc3 = 'It is \tregression test';
console.log(testEsc3);

//STRING MANIPULATIONS

//Concatenation

let a = "Create a new lead";
let b = "TC123";
let result1 = a.concat(b);
console.log(result1);

//Using operator +
let result2 = a+ " " +b+ " => Test case passed";
console.log(result2);

//Convert into string and then concat
let result3 = b.toString().concat(a);
console.log(result3);

//Template Literal => `${}`

function funName(x){
    let output = `There are ${x} testcases`;
    console.log(output);
    
}
funName(123);

//process is the keyword to read the object from the terminal
//so, now if I want to pass something in terminal and that to be considerd in output, use as below
//using progress.argv[2] => takes the value in 2nd position => 
// node is in [0] position, filename is in [1], number to be used is in [2] position
//now while executing, in terminal i will use "node .\stringManipulations.js 1001"
// so output will be "There are 1001 testcases"

function funName(x){
    let output = `There are ${x} testcases`;
    console.log(output);
    
}
let valFromTerminal = process.argv[2];
funName(valFromTerminal);

//Length => count of the characters including space, if multiple words are used
// => count starts from 1,2..

let word = "Playwright";
console.log(`Length of the Course is ${word.length}`);

//charAt => character at the specified index => positions from 0,1,2..
console.log(`Character at 3rd position is ${word.charAt(3)}`);

//indexOf => index of the specified character (1st match) => positions from 0,1,2..
console.log(`Index of w is ${word.indexOf('w')}`);

//SLICE => Print characters from start index and before the mentioned end index

let course = "GenAICourse";
let outputPostiveSlice = course.slice(2,5);//2=n,3=A, 4=I
console.log(outputPostiveSlice);
    
//Negative index starts from -1,-2,-3 .. And -1 will be alloted for the last character
//here e= -1, s= -2...
let outputNegativeSlice = course.slice(2,-5);//2=n,3=A, 4=I
console.log(outputNegativeSlice);

//Start index must always be greater than end index, otherwise o/p will be "Blank"
let outputForLessStartIndex = course.slice(5,2);
console.log(outputForLessStartIndex);

//SUBSTRING => Here the start index can also be lesser. 
// It will swap the indexes internally and it gives the output

let outputSubStrForLessStartIndex2 = course.substring(5,2);
console.log(outputSubStrForLessStartIndex2);

// SUBSTRING - normal
let outputSubStr = course.substring(3,6);
console.log(outputSubStr);

// SUBSTRING - Negative => Ignores negative num
let outputSubStrForNegativeEndIndex = course.substring(3,-6); 
//Here end index ignored, prints from 0 to 2
console.log(outputSubStrForNegativeEndIndex);

let outputSubStrForNegativeStartIndex = course.substring(-3,6); 
//Here start index ignored, prints from 0 to 5
console.log(outputSubStrForNegativeStartIndex);

//Interview prep question 1
let product = 'Order ID: #12345-Confirmed';
let prodStatus = product.split('#'); // 2 arrays=> [Order ID:] [12345-Confirmed]
let ans = prodStatus[1].split("-");
console.log(ans[0]);// 2 arrays=> [12345] [Confirmed]

//Interview prep question 2
let sentence = "Automations testing is incredibly important";
let words = sentence.split(' ')
let longestWord = '';
for(let  i = 0; i <= words.length-1; i++){
    if(words[i].length > longestWord.length){
        longestWord = words[i];
    }
} 
console.log(longestWord); 

//Interview prep question 3
let word1 = "programming";
let letter = word1.split('');
let withoutDuplicateLetter = [];
let duplicateLetter = []; 

for(let i = 0; i <= word1.length; i++){
    if(!withoutDuplicateLetter.includes(letter[i])){
        withoutDuplicateLetter.push(letter[i]);
    } 
    else{
        duplicateLetter.push(letter[i]);
    }       
}
console.log("Final word without duplicates is", withoutDuplicateLetter.join(''));
console.log("Duplicate letter(s)", duplicateLetter.join(','));