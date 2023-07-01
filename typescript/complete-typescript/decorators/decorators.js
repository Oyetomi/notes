"use strict";
// function FirstDecorator(name: string) {
//   return function (constructor: Function) {
//     console.log(`${name} Invoked`);
//     console.log(name);
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//@FirstDecorator("first decorator")
var Manufacturers;
(function (Manufacturers) {
    Manufacturers["boeing"] = "boeing";
    Manufacturers["airbus"] = "airbus";
})(Manufacturers || (Manufacturers = {}));
function StaticMethodDecorator(constructor, methodName, descriptor) {
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
function PropertyDecorator(classPrototype, propertyname) {
    console.log(classPrototype);
    console.log(propertyname);
}
function AccessorDecorator(classPrototype, accessorName, propertyDescriptor) {
    console.log(classPrototype);
    console.log(accessorName);
    console.log(propertyDescriptor);
}
// @AircraftManufacturer(Manufacturers.airbus)
class AirPlane {
    constructor(aircraftModel) {
        this._aircraftModel = aircraftModel;
        // console.log("aircraft class instantiated");
    }
    static seatCount() {
        console.log("150 seats");
    }
    pilotName(name) {
        console.log(name);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
}
__decorate([
    PropertyDecorator,
    __metadata("design:type", String)
], AirPlane.prototype, "_aircraftModel", void 0);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AirPlane.prototype, "aircraftModel", null);
__decorate([
    StaticMethodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AirPlane, "seatCount", null);
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
const airplane = new AirPlane("Airbus A380", "John");
// airplane.pilotName = () => console.log("pilot changed");
// airplane.pilotName();
// const helicopter: AircraftInterface = new Helicopter("H380", "Mark");
console.log(airplane);
// console.log(helicopter);
airplane.airbusMethod
    ? airplane.airbusMethod()
    : console.log("method does not exist");
