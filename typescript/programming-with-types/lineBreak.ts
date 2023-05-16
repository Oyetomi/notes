// @ts-ignore
import GraphemeSplitter = require("grapheme-splitter");
const splitter = new GraphemeSplitter();
function lineBreak(text: string, lineLength: number): string[] {
  let graphemes: string[] = splitter.splitGraphemes(text);
  let lines: string[] = [];
  for (let i = 0; i < graphemes.length; i += lineLength) {
    lines.push(graphemes.slice(i, i + lineLength).join(""));
  }
  return lines;
}
