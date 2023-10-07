"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {
    id: 1,
    firstName: "Abiodun",
    lastName: "Oyetomi",
    isAdmin: true,
};
const getUserId = (user) => {
    return user.id;
};
(0, vitest_1.it)("Should get the user id", () => {
    (0, vitest_1.expect)(getUserId(defaultUser)).toEqual(1);
});
