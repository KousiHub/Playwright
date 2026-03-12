
/*
Basics to get split a string into array of words and get length of array and length of each string
var s = "Hello World" 
var output = s.split(` `);
console.log("Output = "+output);
var words = output.length;
console.log("Number of words = "+words);
var len = output[1].length;
console.log("Length of the last word = "+len);
*/

//Q1
var s = "Hello World"//"   fly me   to   the moon  ";//"Hello World";
var sArray = s.split(" ");
var output = "";
for(var i = 0; i < sArray.length; i++){
    if(i == sArray.length -1){
        console.log("Length of the last word in the given string is "+sArray[i].length);
}
}

//Q2
let s2 = "   fly me   to   the moon  ";
const s2Array = s.trim().split("/\s+/");
let length = s.trim().split(/\s+/).pop().length;
console.log("Length of the last word in a given string is =>",length);


//Q3
function isAnagram(str1,str2){
    const formattedStr1 = formatToRemoveSpaceAndSort(str1);    
    const formattedStr2 = formatToRemoveSpaceAndSort(str2);
    if (formattedStr1 === formattedStr2){
        console.log("Given strings are ANAGRAMS");
    }
    else{
        console.log("Given strings are NOT ANAGRAMS");
    }
}
function formatToRemoveSpaceAndSort(str){
    return str.replace(/\s+g/,'').toLowerCase().split('').sort().join('');
}
isAnagram("Kousalya","World@123");
isAnagram("silent","listen");