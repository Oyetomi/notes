import { createServer } from "http";
import { basename, join } from "path";
import { createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { createDecipheriv, randomBytes } from "crypto";

const secret = randomBytes(24);
console.log(`Generated secret: ${secret.toString("hex")}`);

const server = createServer((req, res) => {
  const filename = basename(req.headers["x-filename"]);
  const iv = Buffer.from(req.headers["x-initialization-vector"], "hex");
  const destFilename = join("received_files", filename);
  console.log(`File request received: ${filename}`);
  req
    .pipe(createGunzip())
    .pipe(createDecipheriv("aes192", secret, iv))
    .pipe(createWriteStream(destFilename))
    .on("finish", () => {
      res.writeHead(201, { "content-Type": "text/plain" });
      res.end("OK/n");
      console.log(`File saved: ${destFilename}`);
    });
});
server.listen(3000, () => console.log(`listening on http://localhost:3000`));
