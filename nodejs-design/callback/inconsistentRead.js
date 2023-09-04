import { readFile } from "fs";

const cache = new Map();

export function consistentReadSync(filename, cb) {
  if (cache.has(filename)) {
    process.nextTick(() => cb(cache.get(filename)));
  } else {
    readFile(filename, "utf8", (err, data) => {
      cache.set(filename, data);
      cb(data);
    });
  }
}
