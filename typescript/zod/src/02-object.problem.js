"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStarWarsPersonName = void 0;
const vitest_1 = require("vitest");
const zod_1 = require("zod");
const PersonResult = zod_1.z.object({
    name: zod_1.z.string(),
});
//                   ^ 🕵️‍♂️
const fetchStarWarsPersonName = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://www.totaltypescript.com/swapi/people/" + id + ".json").then((res) => res.json());
    const parsedData = PersonResult.parse(data);
    return parsedData.name;
});
exports.fetchStarWarsPersonName = fetchStarWarsPersonName;
// TESTS
(0, vitest_1.it)("Should return the name", () => __awaiter(void 0, void 0, void 0, function* () {
    (0, vitest_1.expect)(yield (0, exports.fetchStarWarsPersonName)("1")).toEqual("Luke Skywalker");
    (0, vitest_1.expect)(yield (0, exports.fetchStarWarsPersonName)("2")).toEqual("C-3PO");
}));
