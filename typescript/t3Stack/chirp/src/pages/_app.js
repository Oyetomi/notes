"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("~/utils/api");
require("~/styles/globals.css");
const nextjs_1 = require("@clerk/nextjs");
const MyApp = ({ Component, pageProps }) => {
    return (<nextjs_1.ClerkProvider {...pageProps}>
      <Component {...pageProps}/>
    </nextjs_1.ClerkProvider>);
};
exports.default = api_1.api.withTRPC(MyApp);
