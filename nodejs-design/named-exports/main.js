const Logger = require("./logger");
// logger.info("This is an informative message");
// logger.verbose("This is an verbose message");
// const dbLogger = new Logger("DB");
// dbLogger.info("this is an informative message");

Logger.log("this is an informative message");
const customLogger = new Logger.constructor("CUSTOM");
customLogger.log("this is an informational message");
