"use strict";
const one = "one";
const two = false;
const three = 3;
const four = null;
const five = 5;
const six = 6;
const seven = Symbol("seven");
let eight;
var Keys;
(function (Keys) {
    Keys[Keys["Up"] = 0] = "Up";
    Keys[Keys["Down"] = 1] = "Down";
    Keys[Keys["Left"] = 2] = "Left";
    Keys[Keys["Right"] = 3] = "Right";
})(Keys || (Keys = {}));
let up = Keys.Up;
let truth = 0 /* Bool.True */;
const arr = [1, 2, 3];
const tup = [1];
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const user = new User("Theo");
console.log(user.getName());
class BaseApiClient {
}
class UsersClient extends BaseApiClient {
    fetch(req) {
        return Promise.resolve([]);
    }
}
const client = new UsersClient();
client.fetch({ url: "/users" });
const appConfig = {
    paths: {
        base: "/",
    },
};
let e = {
    name: "Theo",
    age: 20,
};
