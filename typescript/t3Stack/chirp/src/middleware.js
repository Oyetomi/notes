"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const nextjs_1 = require("@clerk/nextjs");
exports.default = (0, nextjs_1.authMiddleware)();
exports.config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
