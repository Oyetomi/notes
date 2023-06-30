// const book = {
//   title: "The title",
//   authors: ["John", "mark", "Rob"],
//   read() {
//     console.log(this);
//   },
//   printAuthors() {
//     this.authors.forEach((author) => console.log(this.title, " - ", author));
//   },
// };

// book.stopreading = function () {
//   console.log(this);
// };

// book.stopreading();

// function watchmovie() {
//   console.log(this);
// }

// watchmovie();
// book.printAuthors();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.points = 0;
//   }
//   login() {
//     console.log(this.name, "Has Logged In");
//   }
//   logout() {
//     console.log(this.name, "Has Logged Out");
//   }
//   addPoint() {
//     this.points++;
//     console.log("total points", this.points);
//   }
// }

// const user = new User("John", "john@email.com");
// console.log(user);
// const user2 = new User("Mark", "mark@email.com");
// console.log(user);
// user2.addPoint();

// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.points = 0;
// }

// User.prototype.login = function () {
//   console.log(this.name, "Has Logged In");
// };
// User.prototype.logout = function () {
//   console.log(this.name, "Has Logged Out");
// };
// User.prototype.addPoint = function () {
//   this.points++;
//   console.log("total points", this.points);
// };

// function AdminUser(name, email, peopleReporting) {
//   User.apply(this, [name, email]);
//   this.peopleReporting = peopleReporting;
// }
// AdminUser.prototype = Object.create(User.prototype);
// AdminUser.prototype.updatePeopleReporting = function (newNumber) {
//   this.peopleReporting = newNumber;
// };
// const user = new User("john", "john@email.com");
// const admin = new AdminUser("Mark", "mark@email.com", 10);
// console.log(admin.login);
// admin.updatePeopleReporting(10);
// console.log(admin);

// const book = {
//   title: "the title",
//   pages: 300,
//   author: "John",
// };

// console.log(Object.getOwnPropertyDescriptors(book));

// const book2 = new Object();
// book2.title = "the title";
// book2.pages = 400;
// book.author = "mark twain";
// console.log(book2);

const book = new Object();
Object.defineProperty(book, "title", {
  value: "this is the title",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(book);
