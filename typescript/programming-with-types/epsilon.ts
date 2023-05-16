function epsilonEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= Number.EPSILON;
}

console.log(0.1 + 0.1 + 0.1 == 0.3);
