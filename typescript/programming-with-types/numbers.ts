type Item = { name: string; price: number };

function getTotal(items: Item[]): number {
  let total: number = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}

let total: number = getTotal([
  { name: "Cherry bubblegum", price: 0.1 },
  { name: "Mint bubblegum", price: 0.1 },
  { name: "Strawberry bubblegum", price: 0.1 },
]);

console.log(total);

function addError(a: number, b: number, min: number, max: number): boolean {
  if (b >= 0) {
    return a > max - b;
  } else {
    return a <= min - b;
  }
}
