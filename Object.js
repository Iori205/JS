// function findavg(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   let avg = sum / arr.length;
//   return avg;
// }
// let result = findavg(grades);
// console.log(result);

// function findsum(sum) {
//   let num = 0;
//   for (i = 0; i < sum.length; i++) {
//     num = num + sum[i];
//   }
//   return num;
// }
// let result = findsum(grades);
// console.log(result);

let grades = [10, 2, 3, 4, 5, 6, -9, -7, 7, 8, 9, 10, 10];
// console.log(grades.length);

function even(arr) {
  let num = 0;
  let k = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      //   console.log(arr[i]);
      num = num + arr[i];
    }
    // // if (arr[i] % 2 == 0) {
    // //   console.log(arr[i].length);
    // }
  }
  return num;
}
let result = even(grades);
console.log(result);

// console.log(grades.length);

// function findmaxgrade(arr) {
//   let max = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let maxgrade = findmaxgrade(grades);
// console.log(maxgrade);
