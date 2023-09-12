interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;

  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  getUserDetails(): UserDetails {
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

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(properties: ShapeProperties, width: number, height: number) {
    super(properties);
  }

  clone(): Shape {
    let cloneProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(cloneProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
  }

  clone(): Shape {
    let cloneProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(cloneProperties, this.radius);
  }
}

let redRectangle = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20
);

let anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = "blue";
console.log(redRectangle);
console.log(anotherRectangle);
