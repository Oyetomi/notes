/*
imperative 
function showStudent(ssn) {
  const student = db.get(ssn); //accesses object storage to look up a student by ssn
  if (student !== null) {
    document.querySelector(
      `#${elementId}`
    ).innerHTML = `${student.ssn}, ${student.firstname}, ${student.lastname}`;
  } else {
    throw new Error("Student not found");
  }
}

showStudent(`444-444-444`);

*/

/*
declarative
const find = curry(function (db, id) {
  const obj = db.get(id);
  if (obj === null) {
    throw new Error("Object not found");
  }
  return obj;
});

const csv = (student) =>
  `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = curry(
  (elementId, info) => (document.querySelector(elementId).innerHTML = info)
);

const showStudent = run(append("#student-info"), csv, find(db));

*/
