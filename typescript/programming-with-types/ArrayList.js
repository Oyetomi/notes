"use strict";
class NumberArrayList {
    constructor() {
        this.numbers = [];
        this.length = 0;
    }
    at(index) {
        if (index >= this.length)
            throw new RangeError();
        return this.numbers[index];
    }
    append(value) {
        let newNumbers = new Array(this.length + 1);
        for (let i = 0; i < this.length; i++) {
            newNumbers[i] = this.numbers[i];
        }
        newNumbers[this.length] = value;
        this.numbers = newNumbers;
        this.length++;
    }
}
