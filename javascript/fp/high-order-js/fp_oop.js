"use strict";

class Address {
  constructor(country, state = null, city = null, zip = null, street = null) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }

  get street() {
    return this._street;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get zip() {
    return this._zip;
  }

  get country() {
    return this._country;
  }

  set country(country) {
    this._country = country;
    return this;
  }
}

class Person {
  constructor(ssn, firstname, lastname, birthYear = null, address = null) {
    this._ssn = ssn;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthYear = birthYear;
    this._address = address;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    this._firstname = firstname;
    return this;
  }

  get lastname() {
    return this._lastname;
  }

  get birthYear() {
    return this._birthYear;
  }

  get address() {
    return this._address;
  }

  set address(addr) {
    this._address = addr;
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }
  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }
  peopleInTheSameCountry(friends) {
    const result = [];
    for (let idx in friends) {
      let friend = friends[idx];
      if (this.address.country === friend._address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(
    ssn,
    firstname,
    lastname,
    school,
    birthYear = null,
    address = null
  ) {
    super(ssn, firstname, lastname, birthYear, address);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    let closeFriends = super.peopleInTheSameCountry(friends);
    let result = [];
    for (let idx in closeFriends) {
      let friend = closeFriends[idx];
      if (friend.school === this.school) {
        result.push(friend);
      }
    }
    return result;
  }
}

const curry = new Student("Haskell", "Curry", "111-11-1111", "Penn State");
curry.address = new Address("US");
const turing = new Student("Alan", "Turing", "222-22-2222", "Princeton");
turing.address = new Address("England");
const church = new Student("Alonzo", "Church", "333-33-3333", "Princeton");
church.address = new Address("US");
const kleene = new Student("Stephen", "Kleene", "444-44-4444", "Princeton");
kleene.address = new Address("US");

// const result = church.studentsInSameCountryAndSchool([curry, turing, kleene]);
// console.log(result);

//functional approach
const selector = (country, school) => (student) =>
  student.address.country === country && student.school === school;

const findStudentBy = (friends, selector) => friends.filter(selector);

const result = findStudentBy(
  [curry, turing, church, kleene],
  selector("US", "Princeton")
);

console.log(result);

function zipCode(code, location) {
  let _code = code;
  let _location = location || " ";
  return {
    code: function () {
      return code;
    },
    location: function () {
      return _location;
    },
    fromString: function (str) {
      let parts = str.split("-");
      return zipCode(parts[0], parts[1]);
    },
    toString: function () {
      return _code + "-" + _location;
    },
  };
}

const princetonZip = zipCode("08544", "3345");
console.log(princetonZip.toString());

function coordinate(lat, long) {
  let _lat = lat;
  let _long = long;
  return {
    latitude: function () {
      return _lat;
    },
    longitude: function () {
      return _long;
    },
    translate: function (dx, dy) {
      return coordinate(_lat + dx, _long + dy);
    },
    toString: function () {
      return "(" + _lat + "," + _long + ")";
    },
  };
}

const greenwich = coordinate(51.4778, 0.0015);
console.log(greenwich.translate(10, 10).toString());

// deep freeze an object
let isObject = (val) => val && typeof val === "object";
function deepFreeze(obj) {
  if (isObject(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => deepFreeze(obj[name]));
    Object.freeze(obj);
  }
  return obj;
}

let person = new Person("Haskell", "Curry", "444-44-4444");
// person = deepFreeze(person);
person.address = new Address(
  "US",
  "NJ",
  "Princeton",
  zipCode("08544", "1234"),
  "Alexander St."
);
person.address._country = "France";
console.log(person.address.country);
