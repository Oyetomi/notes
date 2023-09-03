// exports.info = (message) => {
//   console.log(`info: ${message}`);
// };
//
// exports.verbose = (message) => {
//   console.log(`verbose: ${message}`);
// };

// module.exports.verbose = (message) => {
//   console.log(`info: ${message}`);
// };
//
// class Logger {
//   constructor(name) {
//     this.name = name;
//   }
//
//   log(message) {
//     console.log(`[${this.name}] ${message}`);
//   }
//
//   info(message) {
//     this.log(`info: ${message}`);
//   }
//
//   verbose(message) {
//     this.log(`verbose: ${message}`);
//   }
// }
//
// module.exports = Logger;

class Logger {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }

  log(message) {
    this.count++;
    console.log("[" + this.name + "] " + message);
  }
}

module.exports = new Logger("DEFAULT");
