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

function even(arr) {
  let num = 0;
  let k = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = num + arr[i];
    }
    if (arr[i] % 2 ===0) {
      k = k + 1
    }
  }
  return num
}
let maxgrade = even(grades);
console.log(maxgrade);





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


// function evenmin(arr) {
//   let min = arr[0]
//   for (i=0; i<arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       if (arr[i] < min) {
//       min = arr[i]
//     }
//     }
//   }
//   return min
// }
// let result = evenmin(grades)
// console.log(result)