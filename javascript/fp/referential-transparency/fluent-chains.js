let enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 },
];
//
// let totalGrades = 0;
// let totalStudentsFound = 0;
// for (let i = 0; i < enrollment.length; i++) {
//   let student = enrollment[i];
//   if (student !== null) {
//     if (student.enrolled > 1) {
//       totalGrades += student.grade;
//       totalStudentsFound++;
//     }
//   }
// }
// const average = totalGrades / totalStudentsFound;
// console.log(average);

/*
using load-ash
_.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .pluck('grade')
  .average()
  .value(); //-> 90
*/
