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
const vitest_1 = require("vitest");
const createThenGetUser = (createUser, getUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = yield createUser();
    const user = yield getUser(userId);
    return user;
});
(0, vitest_1.it)("Should create the user, then get them", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createThenGetUser(() => __awaiter(void 0, void 0, void 0, function* () { return "123"; }), (id) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            id,
            firstName: "Matt",
            lastName: "Pocock",
        });
    }));
    (0, vitest_1.expect)(user).toEqual({
        id: "123",
        firstName: "Matt",
        lastName: "Pocock",
    });
}));
