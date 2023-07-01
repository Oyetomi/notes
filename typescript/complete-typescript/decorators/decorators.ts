// function FirstDecorator(name: string) {
//   return function (constructor: Function) {
//     console.log(`${name} Invoked`);
//     console.log(name);
//   };
// }

//@FirstDecorator("first decorator")
enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  original?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  // descriptor.writable = false;
}

// function AircraftManufacturer(manufacturer: Manufacturers) {
//   return (target: Function) => {
//     if (manufacturer === Manufacturers.airbus) {
//       target.prototype.origin = "United States Of America";
//       target.prototype.manufacturer = Manufacturers.airbus;
//       target.prototype.type = "Jet";
//       target.prototype.airbusMethod = () => {
//         console.log("function performed by airbus method");
//       };
//     } else {
//       target.prototype.origin = "France";
//       target.prototype.manufacturer = Manufacturers.boeing;
//       target.prototype.type = "Helicopter";
//       target.prototype.boeingMethod = () => {
//         console.log("function performed by boeing method");
//       };
//     }
//   };
// }

// function ParameterDecorator(
//   classPrototype: Object,
//   methodname: string,
//   index: number
// ) {
//   console.log(classPrototype);
//   console.log(methodname);
//   console.log(index);
// }

function PropertyDecorator(classPrototype: Object, propertyname: string) {
  console.log(classPrototype);
  console.log(propertyname);
}

function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(classPrototype);
  console.log(accessorName);
  console.log(propertyDescriptor);
}

// @AircraftManufacturer(Manufacturers.airbus)
class AirPlane {
  @PropertyDecorator
  public _aircraftModel: string;
  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
    // console.log("aircraft class instantiated");
  }
  @StaticMethodDecorator
  public static seatCount(): void {
    console.log("150 seats");
  }
  public pilotName(name: string) {
    console.log(name);
  }
  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

// @AircraftManufacturer(Manufacturers.boeing)
// class Helicopter implements AircraftInterface {
//   constructor(public _aircraftModel: string, private pilot: string) {
//     console.log("aircraft class instantiated");
//   }
//   public pilotName() {
//     console.log(this.pilot);
//   }
//   public get aircraftModel() {
//     return this._aircraftModel;
//   }
// }

const airplane: AircraftInterface = new AirPlane("Airbus A380", "John");
// airplane.pilotName = () => console.log("pilot changed");
// airplane.pilotName();
// const helicopter: AircraftInterface = new Helicopter("H380", "Mark");
console.log(airplane);
// console.log(helicopter);

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("method does not exist");
