"use strict";
class RegularCustomer {
    giveDiscount() {
        return 10;
    }
}
class PremiumCustomer {
    giveDiscount() {
        return 20;
    }
}
class GoldCustomer {
    giveDiscount() {
        return 30;
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
