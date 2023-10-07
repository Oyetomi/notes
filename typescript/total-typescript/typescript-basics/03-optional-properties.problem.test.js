"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const vitest_1 = require("vitest");
const getName = (params) => {
    if (params.last) {
        return `${params.first} ${params.last}`;
    }
    return params.first;
};
exports.getName = getName;
(0, vitest_1.it)("Should work with just the first name", () => {
    const name = (0, exports.getName)({
        first: "Matt",
    });
    (0, vitest_1.expect)(name).toEqual("Matt");
});
(0, vitest_1.it)("Should work with the first and last name", () => {
    const name = (0, exports.getName)({
        first: "Matt",
        last: "Pocock",
    });
    (0, vitest_1.expect)(name).toEqual("Matt Pocock");
});
