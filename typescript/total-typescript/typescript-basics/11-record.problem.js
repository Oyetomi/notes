"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const createCache = () => {
    const cache = {};
    const add = (id, value) => {
        cache[id] = value;
    };
    const remove = (id) => {
        delete cache[id];
    };
    return {
        cache,
        add,
        remove,
    };
};
(0, vitest_1.it)("Should add values to the cache", () => {
    const cache = createCache();
    cache.add("123", "Matt");
    (0, vitest_1.expect)(cache.cache["123"]).toEqual("Matt");
});
(0, vitest_1.it)("Should remove values from the cache", () => {
    const cache = createCache();
    cache.add("123", "Matt");
    cache.remove("123");
    (0, vitest_1.expect)(cache.cache["123"]).toEqual(undefined);
});
