"use strict";
// function FirstDecorator(name: string) {
//   return function (constructor: Function) {
//     console.log(`${name} Invoked`);
//     console.log(name);
//   };
// }
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
let AirPlane = (() => {
    var _a;
    let _staticExtraInitializers = [];
    let _instanceExtraInitializers = [];
    let _static_seatCount_decorators;
    let __aircraftModel_decorators;
    let __aircraftModel_initializers = [];
    let _get_aircraftModel_decorators;
    return _a = class AirPlane {
            constructor(aircraftModel) {
                this._aircraftModel = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, __aircraftModel_initializers, void 0));
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
        },
        (() => {
            __aircraftModel_decorators = [PropertyDecorator];
            _static_seatCount_decorators = [StaticMethodDecorator];
            _get_aircraftModel_decorators = [AccessorDecorator];
            __esDecorate(_a, null, _static_seatCount_decorators, { kind: "method", name: "seatCount", static: true, private: false, access: { has: obj => "seatCount" in obj, get: obj => obj.seatCount } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _get_aircraftModel_decorators, { kind: "getter", name: "aircraftModel", static: false, private: false, access: { has: obj => "aircraftModel" in obj, get: obj => obj.aircraftModel } }, null, _instanceExtraInitializers);
            __esDecorate(null, null, __aircraftModel_decorators, { kind: "field", name: "_aircraftModel", static: false, private: false, access: { has: obj => "_aircraftModel" in obj, get: obj => obj._aircraftModel, set: (obj, value) => { obj._aircraftModel = value; } } }, __aircraftModel_initializers, _instanceExtraInitializers);
            __runInitializers(_a, _staticExtraInitializers);
        })(),
        _a;
})();
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
// const airplane: AircraftInterface = new AirPlane("Airbus A380", "John");
// airplane.pilotName = () => console.log("pilot changed");
// airplane.pilotName();
// const helicopter: AircraftInterface = new Helicopter("H380", "Mark");
// console.log(airplane);
// console.log(helicopter);
// airplane.airbusMethod
//   ? airplane.airbusMethod()
//   : console.log("method does not exist");
