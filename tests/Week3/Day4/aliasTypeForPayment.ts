//alias name for values
type PaymentMethod = "UPI" | "CreditCard" | "PayPal" 
function makePayment(method:PaymentMethod){ 
    console.log(method);
}
makePayment("UPI");
makePayment("CreditCard");