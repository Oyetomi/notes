function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 1000);
}

console.log("before");
additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
console.log("after");
