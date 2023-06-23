"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
const v = { x: 3, y: 4, name: "zee" };
console.log(calculateLength(v));
function normalize(v) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
console.log(normalize({ x: 3, y: 4, z: 5 }));
// function calculateLengthL1(v: Vector3D) {
//   let length = 0;
//   for (const axis of Object.keys(v)) {
//     const coord = v[axis];
//     length += Math.abs(coord);
//   }
//   return length;
// }
function calculateLengthL1(v) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
