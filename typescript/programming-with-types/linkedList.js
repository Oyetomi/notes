"use strict";
class NumberListNode {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}
class NumberLinkedNode {
    constructor() {
        this.tail = { value: 0, next: undefined };
        this.head = this.tail;
    }
    at(index) {
        let result = this.head.next;
        while (index > 0 && result != undefined) {
            result = result.next;
            index--;
        }
        if (result == undefined)
            throw new RangeError();
        return result.value;
    }
    append(value) {
        this.tail.next = { value: value, next: undefined };
        this.tail = this.tail.next;
    }
}
