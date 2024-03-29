"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const trpc_1 = require("../trpc");
exports.postsRouter = (0, trpc_1.createTRPCRouter)({
    getAll: trpc_1.publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
});
