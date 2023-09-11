"use strict";
class Bird {
    fly() {
        console.log("The bird is flying");
    }
}
class FlightlessBird extends Bird {
    fly() {
        console.log("A flightless bird");
    }
}
class Penguin extends FlightlessBird {
}
const penguin = new Penguin();
penguin.fly();
class PaymentProcessor {
}
class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log("paid with credit card");
    }
}
class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log("paid with debit card");
    }
}
class PaypalProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log("paid with paypal");
    }
}
function executePayment(processor, amount) {
    processor.processPayment(amount);
}
let creditCardProcessor = new CreditCardProcessor();
executePayment(creditCardProcessor, 300);
