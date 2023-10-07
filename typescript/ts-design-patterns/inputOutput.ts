const stream = process.stdin;
setImmediate(() => stream.push(null));
stream.pipe(process.stdout);
