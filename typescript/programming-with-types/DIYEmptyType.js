"use strict";
class Empty {
    constructor() { }
}
function raiseError(message) {
    console.error(`Error "${message}" raised at ${new Date()}`);
    throw new Error(message);
}
