//Instead of having 3 different data like below

let fName = "Kousi";
let lName = "Prats";
let mobile = 9898767654;

//We have a single data of collection called Object literal

let user1 = { //User is the object
    fName : "Kousi",
    lName : "Prats",
    mobile : 9898767654
}
//We access them like below
console.log(user1.fName);
console.log(user1.lName);
console.log(user1.mobile);

//Explicit Inference in Object
let user2: {
firstName: String,
lastName: String,
mobile: number
} = {
firstName: "Pratab",
lastName: "Kannan",
mobile: 1234567890
}

console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.mobile);

//WHEN WE HAVE SPECIAL CHARACTERS IN KEY => WE SHOULD USE THAT AS STRING

let user3: {
firstName: String,
lastName: String,
"#mobile": number
} = {
firstName: "Pratab",
lastName: "Kannan",
"#mobile": 1234567890
}

console.log(user3.firstName);
console.log(user3.lastName);
console.log(user3["#mobile"]);// Square bracket notation
