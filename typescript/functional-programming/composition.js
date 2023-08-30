"use strict";
// // my solution lol
// const compose = (toString: number, increment: number) =>
//   (toString += increment).toString();
//
// console.log(compose(2, 3));
const increment = (x) => x + 1;
const toStringg = (x) => `"${x}"`;
const compose = (f, g) => (x) => f(g(x));
const incrementThenToString = compose(toStringg, increment);
console.log(incrementThenToString(6));
