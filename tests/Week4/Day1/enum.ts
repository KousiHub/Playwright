
/* Similar to Object literal
Instead of using ":"(colon) we should use "="(equal to)
This allows us to define set of named constants
Improves readability, prevents magic numbers/string and group related values together
enum type : numeric enum, string enum, heterogenius enum 
Extraction of data is using .(dot) operator
*/

//Example 1 - String ENUM

enum TestResults {
    Pass="Passed",
    Fail="Failed",
    Skip="Skipped"
}
function logtestResults(result:TestResults){
console.log(`Test result : ${result}`);
}
logtestResults(TestResults.Pass);
logtestResults(TestResults.Fail);
logtestResults(TestResults.Skip);
//logtestResults(TestResults.hello); // Below Not allowed as it shows error => Property 'hello' does not exist on type 'typeof TestResults'.



//Example 2- String ENUM

enum environment {
    qa="https://qa.com",
    prod="https://prod.com",
}


function testexecution(env:environment){
    console.log(`Test environment : ${env}`);
}
testexecution(environment.qa);
testexecution(environment.prod);


//Numeric enum

enum BrowserStatus1 {
   open,
   incognito,
   crash,
   close,
   loading
}


function reportBrowserStatus1(status:BrowserStatus1){
    console.log(`Current status of the browser ${status}`);
}
reportBrowserStatus1(BrowserStatus1.open);
reportBrowserStatus1(BrowserStatus1.incognito);
reportBrowserStatus1(BrowserStatus1.crash);
reportBrowserStatus1(BrowserStatus1.close);
reportBrowserStatus1(BrowserStatus1.loading);


//Heterogenius enum

enum BrowserStatus2 {
   open2,
   incognito2,
   crash2="Crashed",
   close2="Closed",
   loading2=1
}


function reportBrowserStatus2(status:BrowserStatus2){
    console.log(`Current status of the browser ${status}`);
}
reportBrowserStatus2(BrowserStatus2.open2);
reportBrowserStatus2(BrowserStatus2.incognito2);
reportBrowserStatus2(BrowserStatus2.crash2);
reportBrowserStatus2(BrowserStatus2.close2);
reportBrowserStatus2(BrowserStatus2.loading2);

