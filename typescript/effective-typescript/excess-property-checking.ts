interface Room {
  numDoors: number;
  ceilingHeight: number;
}

// const r: Room = {
//   numDoors: 1,
//   ceilingHeight: 10,
//   elephant: "present",
// };

const obj = {
  numDoors: 1,
  ceilingHeight: 10,
  elephant: "present",
};

const r: Room = obj;

interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}

const o: Options = { darkMode: true };
