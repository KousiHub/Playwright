function logData(data: unknown) {


    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }else{
        console.log("Datatype other than string");        
    }
}
logData("Welcome to log details from Database");
//logData(123);
