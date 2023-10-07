type PPSNumber = {
  number: string;
};

type NameOrPPSNumber<T extends string | number> = T extends number
  ? PPSNumber
  : string;

const loginInfo: NameOrPPSNumber<2> = {
  number: "123",
};

console.log(loginInfo);

interface Box<T> {
  value: T;
}

type UnpackBox<A> = A extends Box<infer T> ? T : A;

type intStash = UnpackBox<{ value: 10 }>;
