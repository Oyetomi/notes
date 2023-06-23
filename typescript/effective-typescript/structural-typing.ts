interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: "zee" };
console.log(calculateLength(v));

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
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

function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
