"use strict";
const divideTwo = x => 2 / x;
console.log(divideTwo(8));
console.log(divideTwo(0));
// @ts-ignore
const increment = x => x + 1;
const compose = (f, g) => (x) => f(g(x));
const composed = compose(increment, divideTwo);
console.log(composed(8));
console.log(composed(0));
const some = (x) => ({ _tag: "Some", value: x });
const none = ({ _tag: "None" });
const isNone = (x) => x._tag === "None";
const divideTwo2 = x => x === 0 ? none : some(2 / x);
const composed2 = compose((x) => isNone(x) ? none : some(increment(x.value)), divideTwo2);
console.log(composed2(8));
