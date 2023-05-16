"use strict";
class Currency {
    constructor(dollars, cents) {
        if (!Number.isSafeInteger(dollars)) {
            throw new Error("Cannot safely represent dollar amount");
        }
        if (!Number.isSafeInteger(cents)) {
            throw new Error("Cannot safely represent cents amount");
        }
        this.dollars = dollars;
        this.cents = cents;
    }
    getDollars() {
        return this.dollars;
    }
    getCents() {
        return this.cents;
    }
}
function add(currency1, currency2) {
    return new Currency(currency1.getDollars() + currency2.getDollars(), currency1.getCents() + currency2.getCents());
}
