/* Similar to Object literal
Instead of using ":"(colon) we should use "="(equal to)
This allows us to define set of named constants
Improves readability, prevents magic numbers/string and group related values together
enum type : numeric enum, string enum, heterogenius enum
Extraction of data is using .(dot) operator
*/
//Example 1 - String ENUM
var TestResults;
(function (TestResults) {
    TestResults["Pass"] = "Passed";
    TestResults["Fail"] = "Failed";
    TestResults["Skip"] = "Skipped";
})(TestResults || (TestResults = {}));
function logtestResults(result) {
    console.log("Test result : ".concat(result));
}
logtestResults(TestResults.Pass);
logtestResults(TestResults.Fail);
logtestResults(TestResults.Skip);
//logtestResults(TestResults.hello); // Below Not allowed as it shows error => Property 'hello' does not exist on type 'typeof TestResults'.
//Example 2- String ENUM
var environment;
(function (environment) {
    environment["qa"] = "https://qa.com";
    environment["prod"] = "https://prod.com";
})(environment || (environment = {}));
function testexecution(env) {
    console.log("Test environment : ".concat(env));
}
testexecution(environment.qa);
testexecution(environment.prod);
//Numeric enum
var BrowserStatus1;
(function (BrowserStatus1) {
    BrowserStatus1[BrowserStatus1["open"] = 0] = "open";
    BrowserStatus1[BrowserStatus1["incognito"] = 1] = "incognito";
    BrowserStatus1[BrowserStatus1["crash"] = 2] = "crash";
    BrowserStatus1[BrowserStatus1["close"] = 3] = "close";
    BrowserStatus1[BrowserStatus1["loading"] = 4] = "loading";
})(BrowserStatus1 || (BrowserStatus1 = {}));
function reportBrowserStatus1(status) {
    console.log("Current status of the browser ".concat(status));
}
reportBrowserStatus1(BrowserStatus1.open);
reportBrowserStatus1(BrowserStatus1.incognito);
reportBrowserStatus1(BrowserStatus1.crash);
reportBrowserStatus1(BrowserStatus1.close);
reportBrowserStatus1(BrowserStatus1.loading);
//Heterogenius enum
var BrowserStatus2;
(function (BrowserStatus2) {
    BrowserStatus2[BrowserStatus2["open2"] = 0] = "open2";
    BrowserStatus2[BrowserStatus2["incognito2"] = 1] = "incognito2";
    BrowserStatus2["crash2"] = "Crashed";
    BrowserStatus2["close2"] = "Closed";
    BrowserStatus2[BrowserStatus2["loading2"] = 1] = "loading2";
})(BrowserStatus2 || (BrowserStatus2 = {}));
function reportBrowserStatus2(status) {
    console.log("Current status of the browser ".concat(status));
}
reportBrowserStatus2(BrowserStatus2.open2);
reportBrowserStatus2(BrowserStatus2.incognito2);
reportBrowserStatus2(BrowserStatus2.crash2);
reportBrowserStatus2(BrowserStatus2.close2);
reportBrowserStatus2(BrowserStatus2.loading2);
