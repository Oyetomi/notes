"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange) => {
    window.addEventListener("focus", () => {
        onFocusChange(true);
    });
    window.addEventListener("blur", () => {
        onFocusChange(false);
    });
};
addListener((isFocused) => {
    console.log({ isFocused });
});
