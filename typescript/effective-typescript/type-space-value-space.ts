class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape;
    shape.radius;
  }
}

interface PersonT {
  firstName: string;
  lastName: string;
}

const p: PersonT = {
  firstName: "John",
  lastName: "Jacobs",
};

type T1 = typeof p;
const v1 = typeof p;

const v3 = typeof Cylinder;
console.log(v3);
