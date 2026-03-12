type InputNumber= number
function fibonacci(num:InputNumber){
    
    if (num <= 0) {
        console.log("No negatives or Zero value accepted");
        return;
    }

    console.log("Fibonacci Series:");

    let a = 0, b = 1;

    for (let i = 0; i < num; i++) {
        console.log(a);
        const next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(-55);
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(10);