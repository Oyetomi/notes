"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEnum = void 0;
const makeEnum = (values) => { };
exports.makeEnum = makeEnum;
(0, exports.makeEnum)(["a"]);
(0, exports.makeEnum)(["a", "b", "c"]);
// @ts-expect-error
(0, exports.makeEnum)([]);
