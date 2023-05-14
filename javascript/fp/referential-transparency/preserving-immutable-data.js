const sortDesc = function (arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copyArr = [...arr];
console.log(sortDesc(copyArr));
console.log(arr);
