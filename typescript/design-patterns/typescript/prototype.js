"use strict";
class ConcretePrototype {
    constructor(user) {
        this.user = user;
    }
    clone() {
        const clone = Object.create(this);
        clone.user = Object.assign({}, this.user);
        return clone;
    }
    getUserDetails() {
        return this.user;
    }
}
const user1 = new ConcretePrototype({
    name: "John",
    age: 32,
    email: "john@example.com",
});
let user2 = user1.clone();
console.log(user1);
console.log(user2);
class Shape {
    constructor(properties) {
        this.properties = properties;
    }
}
class Rectangle extends Shape {
    constructor(properties, width, height) {
        super(properties);
    }
    clone() {
        let cloneProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };
        // @ts-ignore
        return new Rectangle(cloneProperties, this.width, this.height);
    }
}
class Circle extends Shape {
    constructor(properties, radius) {
        super(properties);
    }
    clone() {
        let cloneProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };
        // @ts-ignore
        return new Circle(cloneProperties, this.radius);
    }
}
let redRectangle = new Rectangle({
    color: "red",
    x: 20,
    y: 100,
}, 10, 20);
let anotherRectangle = redRectangle.clone();
anotherRectangle.properties.color = "blue";
console.log(redRectangle);
console.log(anotherRectangle);
