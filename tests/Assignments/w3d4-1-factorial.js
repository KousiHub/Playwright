"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function factorial(num) {
    if (num < 0) {
        console.log("Negative number not accepted for Factorial calculation");
    }
    else {
        var result = 1;
        for (var i = num; i > 1; i--) {
            result *= i;
        }
        console.log("Factorial of a given positive num " + num + " is " + result);
    }
}
factorial(4);
factorial(-5);
factorial(11);
factorial(-105);
