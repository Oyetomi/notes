"use strict";
class Unit {
    constructor() { }
}
Unit.value = new Unit();
function greet() {
    console.log("Hello world!");
    return Unit.value;
}
greet();
