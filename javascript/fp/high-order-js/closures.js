// function zipCode(code, location) {
//   let _code = code;
//   let _location = location || "";
//   return {
//     code: function () {
//       return _code;
//     },
//     location: function () {
//       return _location;
//     },
//   };
// }
//
// const princetonZip = zipCode("08544", "3345");
// console.log(princetonZip.code());

// let outerVar = "Outer";
// function makeInner(params) {
//   let innerVar = "Inner";
//   function inner() {
//     console.log(`i see: ${outerVar}, ${innerVar}, and ${params}`);
//   }
//   return inner;
// }
//
// let inner = makeInner("Params");
// inner();

// "let" fixes ambiguous loop counter problem... try using "var"...
// let arr = [1, 2, 3, 4];
// function processArr() {
//   function multipleBy10(val) {
//     let i = 10;
//     console.log(val * i);
//   }
//   return arr.forEach((elem) => multipleBy10(elem));
// }
// processArr();
