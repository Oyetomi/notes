interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
};

type K = keyof (Person | Lifespan);

interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

//function sortBy<K extends keyof T, T>(vals: T[], keys: K): T[] {}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];

// const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple;

type T = Exclude<string | Date, string | number>;
