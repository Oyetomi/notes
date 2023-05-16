"use strict";
function getTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
}
let total = getTotal([
    { name: "Cherry bubblegum", price: 0.1 },
    { name: "Mint bubblegum", price: 0.1 },
    { name: "Strawberry bubblegum", price: 0.1 },
]);
console.log(total);
function addError(a, b, min, max) {
    if (b >= 0) {
        return a > max - b;
    }
    else {
        return a <= min - b;
    }
}
