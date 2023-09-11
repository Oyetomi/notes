"use strict";
class RegularCustomer {
    giveDiscount() {
        return 10;
    }
    addLoyaltyPoints(amountSpent) {
        return amountSpent;
    }
}
class PremiumCustomer {
    giveDiscount() {
        return 20;
    }
    addLoyaltyPoints(amountSpent) {
        return amountSpent * 2;
    }
}
class GoldCustomer {
    giveDiscount() {
        return 30;
    }
    addLoyaltyPoints(amountSpent) {
        return amountSpent * 3;
    }
}
class Discount {
    giveDiscount(customer) {
        return customer.giveDiscount();
    }
}
let goldCustomer = new GoldCustomer();
let discount = new Discount();
console.log(discount.giveDiscount(goldCustomer));
