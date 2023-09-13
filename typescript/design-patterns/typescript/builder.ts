interface Builder {
  setPartA(): void;

  setPartB(): void;

  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  listParts(): void {
    console.log(`Product Part: ${this.parts.join(", ")}`);
  }
}

class ConcreteBuilder implements Builder {
  product!: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  setPartA() {
    this.product.add("PartA");
  }

  setPartB() {
    this.product.add("PartB");
  }

  setPartC() {
    this.product.add("PartC");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  builder!: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildMinimumProduct() {
    this.builder.setPartA();
  }

  buildFullProduct() {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);
director.buildMinimumProduct();
let minimumProduct = builder.getProduct();
console.log(minimumProduct);

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);
