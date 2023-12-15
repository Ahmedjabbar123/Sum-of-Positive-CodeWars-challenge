"use strict";

// Sum of Positive-chellenge:

function sumOfPositive(arr) {
  return arr.filter((i) => i > 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfPositive([3, -9, 5, 2]));
