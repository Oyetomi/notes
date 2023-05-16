"use strict";
function epsilonEqual(a, b) {
    return Math.abs(a - b) <= Number.EPSILON;
}
console.log(0.1 + 0.1 + 0.1 == 0.3);
