// let row = 5;
// while (row > 0) {
//   let column = 5;
//   let sp_result = "";
//   while (column > 0) {
//     sp_result = sp_result + "*";
//     column = column - 1;
//   }
//   console.log(sp_result);
//   row = row - 1;
// }

// let size = 5;
// let row = size;

// while (row > 0) {
//   let column = size;
//   let result = "";
//   while (column > 0) {
//     if (
//       row == 1 ||
//       row == size ||
//       column == 1 ||
//       column == size ||
//       row - 1 == size - column
//     ) {
//       result = result + "*";
//     } else {
//       result = result + " ";
//     }
//     column = column - 1;
//   }
//   console.log(result);
//   row = row - 1;
// }

let row = 5;
while (row > 0) {
  let result = "";
  let column = row;
  while (column > 0) {
    result = result + "*";
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}
