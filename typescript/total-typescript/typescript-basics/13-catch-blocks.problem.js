"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const tryCatchDemo = (state) => {
    try {
        if (state === "fail") {
            throw new Error("Failure!");
        }
    }
    catch (e) {
        if (e instanceof Error) {
            return e.message;
        }
    }
};
(0, vitest_1.it)("Should return the message when it fails", () => {
    (0, vitest_1.expect)(tryCatchDemo("fail")).toEqual("Failure!");
});
