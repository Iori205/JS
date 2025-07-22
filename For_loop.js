// for(let i=1; i<=10;i++) {
//     console.log(i)
// }

// let row = 5;
// for (i = 1; i <= row; i++) {
//   let star = "";
//   for (j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// let size = 5;
// for (i = 0; i < size; i++) {
//   let star = "";
//   for (j = 0; j < i; j++) {
//     star += " ";
//   }
//   for (j = 0; j < size; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// let size = 5;
// for (i = 0; i < size; i++) {
//   let star = "";
//   for (j = 0; j < i; j++) {
//     star += " ";
//   }
//   for (j = 0; j < size; j++) {
//     if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

let row = 8;
for (i = 0; i < row; i++) {
  let star = "";
  for (j = 0; j < row - i; j++) {
    star += " ";
  }
  for (j = 0; j < i * 2 + 1; j++) {
    if (i == 0 || i == row - 1 || j == 0 || j == i * 2) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}
