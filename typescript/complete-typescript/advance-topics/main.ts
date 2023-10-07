// let numbers = [4, 6, 89, 5];
// console.log(typeof numbers);
//
// let x = "y";
// const b = "john";
// let y = 78;
// let c = false;
// let d = null;
// const z = {
//   x: 14,
// };
//
// enum Roles {
//   admin = "admin",
//   author = "author",
// }
//
// const user = Roles.admin;

// const numbers = <const>{
//   x: 10,
//   y: {
//     z: 20,
//   },
// };
//
// numbers.z = 11;
// console.log(numbers);

// type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
// type Day = Weekdays | "Saturday" | "Sunday";
//
// function nextDayForAweekDay(weekday: Weekdays): Day {
//   switch (weekday) {
//     case "Monday":
//       return "Tuesday";
//     case "Tuesday":
//       return "Wednesday";
//     case "Wednesday":
//       return "Thursday";
//     case "Thursday":
//       return "Friday";
//     case "Friday":
//       return "Saturday";
//   }
// }

// let firstName = "Mark";
// console.log(typeof firstName);
//
// type Cat = {
//   type: "cat";
//   purrs: boolean;
// };
//
// type Dog = {
//   type: "dog";
//   barks: boolean;
// };
//
// type Animal = Cat | Dog;
//
// let cat: Animal = {
//   type: "cat",
//   purrs: true,
// };
//
// let dog: Animal = {
//   type: "dog",
//   barks: true,
// };
//
// function animalReaction(animal: Animal) {
//   switch (animal.type) {
//     case "cat":
//       console.log(animal.purrs);
//       break;
//     case "dog":
//       console.log(animal.barks);
//       break;
//   }
// }
//
// animalReaction(cat);

// type ServiceList = UserDetailsAPIResponse["servicesList"];
//
// type UserDetailsAPIResponse = {
//   id: number;
//   name: string;
//   servicesList: {
//     count: number;
//     services: {
//       id: number;
//       name: string;
//       price: number;
//     }[];
//   };
// };
//
// function fetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
//   return new Promise((res, rej) => {
//     if (name) {
//       res({
//         id: 23,
//         name: "John",
//         servicesList: {
//           count: 2,
//           services: [
//             {
//               id: 1,
//               name: "Accounting",
//               price: 49,
//             },
//             {
//               id: 2,
//               name: "Design",
//               price: 19,
//             },
//           ],
//         },
//       });
//     } else rej(new Error("Pass new a valid name"));
//   });
// }
//
// function printServiceList(services: ServiceList): void {
//   console.log(services);
// }
//
// fetchUserDetails("John")
//   .then((res) => {
//     console.log(res);
//     printServiceList(res.servicesList);
//   })
//   .catch((err) => console.log(err));

// type Events = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdoor";
// };
//
// type unionOfKeysOfEvents = keyof Events;
//
// type Numeric = {
//   [key: number]: string;
// };
//
// type NumericKeyOf = keyof Numeric;
//
// type NumberAndString = {
//   [key: string]: string;
// };
//
// type NumberAndStringKeyOf = keyof NumberAndString;

// type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
// type Day = Weekdays | "Saturday" | "Sunday";
//
// type nextDay = {
//   [W in Weekdays]: Day;
// };
//
// let nextDay = {
//   Mon: "Tue",
// };

// type Artist = {
//     id: number;
//     name?: string;
//     bio?: string
// }
//
// type MappedArtistForEdit = {
//     [Property in keyof Artist]?: Artist[Property]
// }& {id:number}
//
//
// const editedArtist:MappedArtistForEdit = {
//     id:1,
//     bio: "hello i am justin"
// }

// interface Animal {
//     live: () => void
// }
//
// interface Dog extends Animal {
//     woof: () => void
// }
//
// type Example = Dog extends Animal ? string : number

type isString<T> = T extends string ? true : false

type A = isString<string>

