"use strict";
// // interface Shape {
// //   area(): number;
// //
// //   perimeter(): number;
// // }
// //
// // class Circle implements Shape {
// //   constructor(private radius: number) {}
// //
// //   area(): number {
// //     return Math.PI * this.radius * this.radius;
// //   }
// //
// //   perimeter(): number {
// //     return 2 * Math.PI * this.radius;
// //   }
// // }
// //
// // class Rectangle implements Shape {
// //   constructor(private width: number, private height: number) {}
// //
// //   area(): number {
// //     return this.width * this.height;
// //   }
// //
// //   perimeter(): number {
// //     return 2 * (this.width + this.height);
// //   }
// // }
// //
// // function calculateTotalArea(shape: Shape): number {
// //   return shape.area();
// // }
// //
// // let circle: Circle = new Circle(5);
// // let rectangle: Rectangle = new Rectangle(5, 5);
// // console.log(calculateTotalArea(circle));
// // console.log(calculateTotalArea(rectangle));
//
// // const date = new Date();
// // console.log(date.getFullYear());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// //
// // class BankAccount {
// //   private balance: number;
// //
// //   constructor(initialBalance: number) {
// //     this.balance = initialBalance;
// //   }
// //
// //   get accountBalance(): number {
// //     return this.balance;
// //   }
// //
// //   deposit(amount: number): void {
// //     if (amount < 0) {
// //       console.log("invalid deposit amount");
// //       return;
// //     }
// //     this.balance += amount;
// //   }
// //
// //   withdraw(amount: number): void {
// //     if (amount > this.balance) {
// //       console.log("insufficient balance");
// //       return;
// //     } else if (amount < 0) {
// //       console.log("Invalid withdraw amount");
// //     } else if (this.balance - amount < 0) {
// //       console.log("insufficient funds");
// //       return;
// //     }
// //     this.balance -= amount;
// //   }
// // }
// //
// // const myAccount = new BankAccount(500);
// // myAccount.withdraw(400);
// // myAccount.deposit(6000);
// // console.log(myAccount.accountBalance);
// //
// // class Animal {
// //   constructor(public name: string) {}
// //
// //   move(distance: number): void {
// //     console.log(`${this.name} moved ${distance} meters`);
// //   }
// // }
// //
// // class Dog extends Animal {
// //   constructor(public name: string = "dog") {
// //     super(name);
// //   }
// // }
// //
// // const myDog = new Dog("max");
// // myDog.name;
// // myDog.move(4);
//
// class Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string
//   ) {}
// }
//
// class Book extends Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string,
//     public author: string,
//     public title: string
//   ) {
//     super(id, price, description);
//   }
// }
