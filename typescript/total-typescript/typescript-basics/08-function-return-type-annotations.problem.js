"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = () => {
    return {
        id: 2,
        firstName: "abiodun",
        lastName: "oyetomi",
        role: "admin",
        posts: [
            {
                id: 2,
                title: "rocket",
            },
        ],
    };
};
(0, vitest_1.it)("Should return a valid user", () => {
    const user = makeUser();
    (0, vitest_1.expect)(user.id).toBeTypeOf("number");
    (0, vitest_1.expect)(user.firstName).toBeTypeOf("string");
    (0, vitest_1.expect)(user.lastName).toBeTypeOf("string");
    (0, vitest_1.expect)(user.role).to.be.oneOf(["super-admin", "admin", "user"]);
    (0, vitest_1.expect)(user.posts[0].id).toBeTypeOf("number");
    (0, vitest_1.expect)(user.posts[0].title).toBeTypeOf("string");
});
