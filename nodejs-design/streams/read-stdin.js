// process.stdin
//   .on("readable", () => {
//     let chunk;
//     console.log("New data available");
//     while ((chunk = process.stdin.read()) !== null) {
//       console.log(`${chunk.length} bytes: ${chunk.toString()}`);
//     }
//   })
//   .on("end", () => console.log("End of stream"));

//flowing mode
// process.stdin
//   .on("data", (chunk) => {
//     console.log("New data available");
//     console.log(`Chunk read: ${chunk.length}bytes ${chunk.toString()}`);
//   })
//   .on("end", () => console.log("End of stream"));

async function main() {
  for await (const chunk of process.stdin) {
    console.log("New data available");
    console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
  }
  console.log("End of stream");
}

main();
