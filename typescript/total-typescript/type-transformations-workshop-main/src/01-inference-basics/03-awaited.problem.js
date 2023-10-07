"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = () => {
    return Promise.resolve({
        id: "123",
        name: "John",
        email: "john@example.com",
    });
};
