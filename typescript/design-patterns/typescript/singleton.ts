class Singleton {
  private static instance: Singleton;

  private constructor() {}

  private static _value: number;

  get value(): number {
    return Singleton._value;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  public static getInstance(): Singleton {
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
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const time = new Date();
    console.log(`[${time.toLocaleString()}] - ${message}`);
  }
}

let logger1 = Logger.getInstance();
let logger2 = Logger.getInstance();
logger1.log("This is the first message");
logger2.log("This is the second message");
