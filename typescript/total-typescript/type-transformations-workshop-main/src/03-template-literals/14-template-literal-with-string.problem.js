"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToRoute = void 0;
const goToRoute = (route) => { };
exports.goToRoute = goToRoute;
// Should succeed:
(0, exports.goToRoute)("/users");
(0, exports.goToRoute)("/");
(0, exports.goToRoute)("/admin/users");
// Should error:
// @ts-expect-error
(0, exports.goToRoute)("users/1");
// @ts-expect-error
(0, exports.goToRoute)("http://facebook.com");
