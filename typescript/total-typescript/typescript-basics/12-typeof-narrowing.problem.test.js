"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const coerceAmount = (amount) => {
    if (typeof amount === "object") {
        return amount.amount;
    }
    return amount;
};
(0, vitest_1.it)("Should return the amount when passed an object", () => {
    (0, vitest_1.expect)(coerceAmount({ amount: 20 })).toEqual(20);
});
(0, vitest_1.it)("Should return the amount when passed a number", () => {
    (0, vitest_1.expect)(coerceAmount(20)).toEqual(20);
});
