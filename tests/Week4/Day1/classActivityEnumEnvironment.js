//String ENUM
var Environment;
(function (Environment) {
    Environment["local"] = "https://local.com";
    Environment["development"] = "https://dev.com";
    Environment["staging"] = "https://stage.com";
    Environment["production"] = "https://prod.com";
})(Environment || (Environment = {}));
function runTests(status) {
    console.log("Current status of the browser using STRING ENUM ".concat(status));
}
runTests(Environment.local);
runTests(Environment.development);
runTests(Environment.staging);
runTests(Environment.production);
//Numberic ENUM
var Environment2;
(function (Environment2) {
    Environment2[Environment2["local2"] = 0] = "local2";
    Environment2[Environment2["development2"] = 1] = "development2";
    Environment2[Environment2["staging2"] = 2] = "staging2";
    Environment2[Environment2["production2"] = 3] = "production2";
})(Environment2 || (Environment2 = {}));
function runTests2(status2) {
    console.log("Current status of the browser using NUMERIC ENUM ".concat(status2));
}
runTests2(Environment2.local2);
runTests2(Environment2.development2);
runTests2(Environment2.staging2);
runTests2(Environment2.production2);
//Hetero ENUM
var Environment3;
(function (Environment3) {
    Environment3[Environment3["local3"] = 0] = "local3";
    Environment3["development3"] = "For Dev team only";
    Environment3[Environment3["staging3"] = 1] = "staging3";
    Environment3[Environment3["production3"] = 2] = "production3";
})(Environment3 || (Environment3 = {}));
function runTests3(status3) {
    console.log("Current status of the browser using HETEROGENOUS ENUM ".concat(status3));
}
runTests3(Environment3.local3);
runTests3(Environment3.development3);
runTests3(Environment3.staging3);
runTests3(Environment3.production3);
