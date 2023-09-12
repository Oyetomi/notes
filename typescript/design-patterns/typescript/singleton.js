"use strict";
class Singleton {
    constructor() { }
    get value() {
        return Singleton._value;
    }
    set value(value) {
        Singleton._value = value;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance2.value);
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const time = new Date();
        console.log(`[${time.toLocaleString()}] - ${message}`);
    }
}
let logger1 = Logger.getInstance();
let logger2 = Logger.getInstance();
logger1.log("This is the first message");
logger2.log("This is the second message");
class Application {
    constructor(logger) {
        this.logger = logger;
    }
    run() {
        this.logger.log("Application is running");
        this.logger.log("Application is shutting down");
    }
}
const logger = Logger.getInstance();
const newApplication = new Application(logger);
newApplication.run();
