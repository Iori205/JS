// let num0 = document.getElementById("num");
// let btn = document.getElementById("btn1");
// btn.addEventListener("click", () => {
//   let number = num0.value;
//   let number1 = parseInt(number);
//   while (number1 <= 10) {
//     console.log(number1);
//     number1 = number1 + 1;
//   }
// });

// let btn1 = document.getElementById("btn2");
// btn1.addEventListener("click", () => {
//   let number = num0.value;
//   let number1 = parseInt(number);
//   while (number1 % 2 === 0) {
//     console.log(number1);
//     number1 = number1 - 1;
//   }
// });

let num1_input = document.getElementById(num1);
let num2_input = document.getElementById(num2);
let button = document.getElementById(btn);
let answerA = document.getElementById(answer);

function button_click() {
  let num1 = parseInt(num1_input);
  let num2 = parseInt(num2_input);
  let sum = num1 + num2;
  return sum;
  //   answerA.innerText = sum;
  //
}

button.addEventListener("click", button_click);
