declare const EmptyType: unique symbol;

class Empty {
  // @ts-ignore
  [EmptyType]: void;
  private constructor() {}
}

function raiseError(message: string): Empty {
  console.error(`Error "${message}" raised at ${new Date()}`);
  throw new Error(message);
}
