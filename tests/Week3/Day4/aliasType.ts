//alias name for datatypes
/* Login scenario filling the username with emailis or mob number */
//THIS IS UNION TYPE
type userInput = string | number | boolean// userInput is the new customized/ alias name of the 2 datatypes combined together
let username : userInput = "support@testleaf.com"
username = 8908098789
username = true


//alias name for values
type supportedBrowser = "chrome" | "firefox" | "msedge" 
function invokeBrowsers(browserName:supportedBrowser){ // browserName is a local variable to fetch the argument value msedge into the function block
    console.log(browserName);
}
invokeBrowsers("chrome")

