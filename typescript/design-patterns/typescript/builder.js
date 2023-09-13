"use strict";
class Product {
    constructor() {
        this.parts = [];
    }
    add(part) {
        this.parts.push(part);
    }
    listParts() {
        console.log(`Product Part: ${this.parts.join(", ")}`);
    }
}
class ConcreteBuilder {
    constructor() {
        this.reset();
    }
    reset() {
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
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Director {
    setBuilder(builder) {
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
