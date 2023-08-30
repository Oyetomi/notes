"use strict";
function normal_sum(a, b) {
    return a + b;
}
const sum = (a) => (b) => a + b;
console.log(sum(1)(2));
const increment = sum(1);
console.log(increment(7));
const decrement = sum(-1);
console.log(decrement(40));
const curry2 = f => a => b => f(a, b);
const sum2 = curry2(normal_sum);
console.log(sum2(1)(2));
