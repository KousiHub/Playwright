/*TYPE INTERSECTION
This is not converting 1 datatype to other, but it is used to tell the compiler what datatype is to be used ?
Wherever typescript does not know what data type will be passed, we explicitly ask the complier to handle it with a particular datatype
IMPORTANT => USE ANGULAR BRACKET <> or "as" keyword
*/

//EXAMPLE 1: USING<>
let response: any = "Record from server"; //Getting data from server, which we dont know what type it is, so get it as "any"
let myResponse = <string> response; //After getting, use type assertion and convey to handle it as "string" for my manipulations
console.log(myResponse.length);

//EXAMPLE 2: USING "as" KEYWORD
let sCode: any = "Success";
let statusCode = sCode as string;
console.log(statusCode.length);
