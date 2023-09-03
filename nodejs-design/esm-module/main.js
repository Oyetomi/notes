import * as loggerModule from "./Logger.js";
import MyLogger, { info, log } from "./Logger.js";

log("Hello world!");
console.log(loggerModule);

const logger = new MyLogger("info");
logger.log("haha");
