//Now I am using type QA, which will have both admin and employee data and it is mandatory we use them all. Otherwise error
//I am creating QAProfile variable which will explicitly inference the type QA
var QAProfile = {
    adminName: "Testleaf",
    priviledges: ['server'],
    name: "Ravi",
    empId: 1001,
    date: "09-03-2026"
};
console.log(QAProfile.adminName);
console.log(QAProfile.priviledges);
console.log(QAProfile.name);
console.log(QAProfile.empId);
console.log(QAProfile.date);
