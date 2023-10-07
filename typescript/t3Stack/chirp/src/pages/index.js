"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextjs_1 = require("@clerk/nextjs");
const api_1 = require("~/utils/api");
const Home = () => {
    const hello = api_1.api.example.hello.useQuery({ text: "from tRPC" });
    const user = (0, nextjs_1.useUser)();
    return (<>
      {!user.isSignedIn && <nextjs_1.SignInButton />}
      {!!user.isSignedIn && <nextjs_1.SignOutButton />}
    </>);
};
exports.default = Home;
