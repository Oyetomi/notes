"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mul_1 = __importDefault(require("./mul"));
// @ts-ignore
test("multpliies 2 and 3 to give 6", () => {
    // @ts-ignore
    expect((0, mul_1.default)(2, 3)).toBe(6);
});
