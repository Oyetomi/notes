"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const GraphemeSplitter = require("grapheme-splitter");
const splitter = new GraphemeSplitter();
function lineBreak(text, lineLength) {
    let graphemes = splitter.splitGraphemes(text);
    let lines = [];
    for (let i = 0; i < graphemes.length; i += lineLength) {
        lines.push(graphemes.slice(i, i + lineLength).join(""));
    }
    return lines;
}
