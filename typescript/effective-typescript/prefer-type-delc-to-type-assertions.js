"use strict";
const alice = { name: "Alice" };
const bob = { name: "Bob" };
// const alice: Person = {};
// const bob = {} as Person;
const people = ["alice", "bob", "jan"].map((name) => ({ name }));
console.log(people);
