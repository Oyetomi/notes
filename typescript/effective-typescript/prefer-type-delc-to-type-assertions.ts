interface Person {
  name: string;
}

const alice: Person = { name: "Alice" };
const bob = { name: "Bob" } as Person;

// const alice: Person = {};
// const bob = {} as Person;

const people: Person[] = ["alice", "bob", "jan"].map(
  (name): Person => ({ name })
);

console.log(people);
