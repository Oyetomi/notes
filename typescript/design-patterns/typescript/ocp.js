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
class Discount {
    giveDiscount(customer) {
        return customer.giveDiscount();
    }
}
let premiumCustomer = new PremiumCustomer();
let discount = new Discount();
console.log(discount.giveDiscount(premiumCustomer));
