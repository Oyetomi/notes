declare const UnitType: unique symbol;

class Unit {
  // @ts-ignore
  [UnitType]: void;
  static readonly value: Unit = new Unit();
  private constructor() {}
}

function greet(): Unit {
  console.log("Hello world!");
  return Unit.value;
}

greet();
