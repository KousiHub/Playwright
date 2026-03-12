
//String ENUM

enum Environment {
   local = "https://local.com",
   development = "https://dev.com",
   staging = "https://stage.com",
   production = "https://prod.com"
}

function runTests(status:Environment){
    console.log(`Current status of the browser using STRING ENUM ${status}`);
}
runTests(Environment.local);
runTests(Environment.development);
runTests(Environment.staging);
runTests(Environment.production);


//Numberic ENUM

enum Environment2 {
   local2,
   development2,
   staging2,
   production2
}

function runTests2(status2:Environment2){
    console.log(`Current status of the browser using NUMERIC ENUM ${status2}`);
}
runTests2(Environment2.local2);
runTests2(Environment2.development2);
runTests2(Environment2.staging2);
runTests2(Environment2.production2);


//Hetero ENUM

enum Environment3 {
   local3,
   development3 = "For Dev team only",
   staging3 = 1,
   production3
}

function runTests3(status3:Environment3){
    console.log(`Current status of the browser using HETEROGENOUS ENUM ${status3}`);
}
runTests3(Environment3.local3);
runTests3(Environment3.development3);
runTests3(Environment3.staging3);
runTests3(Environment3.production3);
