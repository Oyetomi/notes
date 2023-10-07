"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbers = void 0;
const vitest_1 = require("vitest");
const addTwoNumbers = (params) => {
    return params.first + params.second;
};
exports.addTwoNumbers = addTwoNumbers;
(0, vitest_1.it)("Should add the two numbers together", () => {
    (0, vitest_1.expect)((0, exports.addTwoNumbers)({
        first: 2,
        second: 4,
    })).toEqual(6);
    (0, vitest_1.expect)((0, exports.addTwoNumbers)({
        first: 10,
        second: 20,
    })).toEqual(30);
});
