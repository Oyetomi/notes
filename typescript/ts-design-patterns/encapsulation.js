"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_name;
class User {
    constructor(name) {
        _User_name.set(this, void 0);
        this.name = name;
    }
    greet() {
        console.log(`User: ${__classPrivateFieldGet(this, _User_name, "f")}`);
    }
}
_User_name = new WeakMap();
const theo = new User("Theo");
console.log(theo.);
