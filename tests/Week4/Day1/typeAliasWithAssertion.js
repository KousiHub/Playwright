/*TYPE INTERSECTION
This is not converting 1 datatype to other, but it is used to tell the compiler what datatype is to be used ?
Wherever typescript does not know what data type will be passed, we explicitly ask the complier to handle it with a particular datatype
IMPORTANT => USE ANGULAR BRACKET <> or "as" keyword
*/
//EXAMPLE 1: USING<>
var response = "Record from server"; //Getting data from server, which we dont know what type it is, so get it as "any"
var myResponse = response; //After getting, use type assertion and convey to handle it as "string" for my manipulations
console.log(myResponse.length);
//EXAMPLE 2: USING "as" KEYWORD
var sCode = "Success";
var statusCode = sCode;
console.log(statusCode.length);
