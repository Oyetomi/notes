// first class functions
/* let square = function (x) {
  return x * x;
};

// lambda expression
const addition = (x) => x + x;

let obj = {
  method: function (x) {
    return x * x;
  },
};

console.log(square(2));

// function in a constructor
let multiplier = new Function("a", "b", "return a * b");
console.log(multiplier(2, 3));

let fruit = ["Coconut", "apples"];
console.log(fruit.sort()); */

// high order functions
/* function applyOperation(a, b, opt) {
  return opt(a, b);
}

let multiplier = (a, b) => a * b;
console.log(applyOperation(2, 3, multiplier)); */

// function returned from another function
/* function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(3)(3)); */

//imperative approach
/* function printPeopleInTheUs(people) {
  for (let i = 0; i < people.length; i++) {
    let thisPerson = people[i];
    if (thisPerson.address.country === "US") {
      console.log(thisPerson);
    }
  }
}
printPeopleInTheUs([p1, p2, p3]);

function printPeople(people, action) {
  for (let i = 0; i < people.length; i++) {
    action(people[i]);
  }
}

let action = function (person) {
    if (person.address.country === "US") {
        console.log(person)
    }
}

printPeople(people, action); */

// function printPeople(people, selector, printer) {
//   people.forEach(function (person) {
//     if (selector(person)) {
//       printer(person);
//     }
//   });
//}

// let inUs = (person) => person.address.country === "US";
// printPeople(people, inUs, console.log);

function negate(func) {
  return function () {
    return !func.apply(null, arguments);
  };
}
function isNull(val) {
  return val === null;
}

const isNotNull = negate(isNull);
console.log(isNotNull(null));
