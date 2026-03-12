import { log } from "node:console";
import { loadavg } from "node:os";

type InputNumber = number
function factorial(num: InputNumber){
    if(num < 0){
        console.log("Negative number not accepted for Factorial calculation");
        
    }
    else{
        let result = 1;
        for(let i = num; i > 1; i--){
            result *= i;
        }
        console.log("Factorial of a given positive num "+num+ " is "+result);
        
    }
}
factorial(4);
factorial(-5);
factorial(11);
factorial(-105);