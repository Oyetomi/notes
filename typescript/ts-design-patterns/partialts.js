"use strict";
var PRIORITY;
(function (PRIORITY) {
    PRIORITY[PRIORITY["DEFAULT"] = 0] = "DEFAULT";
    PRIORITY[PRIORITY["LOW"] = 1] = "LOW";
    PRIORITY[PRIORITY["HIGH"] = 2] = "HIGH";
})(PRIORITY || (PRIORITY = {}));
class TodoItem {
    constructor(todoItemProps = {}) {
        this.title = "Default item title";
        this.priority = PRIORITY.DEFAULT;
        Object.assign(this, todoItemProps);
    }
}
const item = new TodoItem({ description: "Some description" });
console.debug(item.description);
console.debug(item.title);
