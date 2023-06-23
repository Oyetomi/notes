"use strict";
// interface Square {
//   kind: "square";
//   width: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   height: number;
//   width: number;
// }
// type Shape = Square | Rectangle;
// function calculateArea(shape:Shape) {
//   if (shape instanceof Rectangle) {
//   }
// }
// function calculateArea(shape: Shape) {
//   if ("height" in shape) {
//     shape; //type is rectangle
//     return shape.width * shape.height;
//   } else {
//     shape; //type is square
//     return shape.width * shape.width;
//   }
// }
// function calculateArea(shape: Shape) {
//   if (shape.kind === "rectangle") {
//     shape; //type is rectangle
//     return shape.width * shape.height;
//   } else {
//     shape; //type is square
//     return shape.width * shape.width;
//   }
// }
class Square {
    constructor(width) {
        this.width = width;
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        shape;
        return shape.width * shape.height;
    }
    shape;
    return shape.width * shape.width;
}
function asNumber(value) {
    return typeof value === "string" ? Number(value) : value;
}
