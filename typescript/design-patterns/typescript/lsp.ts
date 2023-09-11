class Bird {
  fly(): void {
    console.log("The bird is flying");
  }
}

class FlightlessBird extends Bird {
  fly() {
    console.log("A flightless bird");
  }
}

class Penguin extends FlightlessBird {}

const penguin: Penguin = new Penguin();
penguin.fly();

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number) {
    console.log("paid with credit card");
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number) {
    console.log("paid with debit card");
  }
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number) {
    console.log("paid with paypal");
  }
}

function executePayment(processor: PaymentProcessor, amount: number) {
  processor.processPayment(amount);
}

let creditCardProcessor = new CreditCardProcessor();
executePayment(creditCardProcessor, 300);
