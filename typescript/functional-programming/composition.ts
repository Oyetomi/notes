// type Increment = (x: number) => number;
// type ToString = (x: number) => string;
//
// const increment: Increment = (x) => x + 1;
//
// const toStringg: ToString = (x) => `"${x}"`;
//
// type IncrementThenToString = (x: number) => string;
//
// type Compose = <A, B, C> (f: (x: B) => C, g: (x: A) => B) => (x: A) => C;
//
// const compose: Compose = (f, g) => (x) => f(g(x));
//
// const incrementThenToString: IncrementThenToString = compose(
//     toStringg,
//     increment
// );
// console.log(incrementThenToString(6));
