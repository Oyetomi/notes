"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
const vitest_1 = require("vitest");
const zod_1 = require("zod");
const numSchema = zod_1.z.number();
const toString = (num) => {
    const parse = numSchema.parse(num);
    return String(parse);
};
exports.toString = toString;
// TESTS
(0, vitest_1.it)("Should throw a runtime error when called with not a number", () => {
    (0, vitest_1.expect)(() => (0, exports.toString)("123")).toThrowError("Expected number, received string");
});
(0, vitest_1.it)("Should return a string when called with a number", () => {
    (0, vitest_1.expect)((0, exports.toString)(1)).toBeTypeOf("string");
});
