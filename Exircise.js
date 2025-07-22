let num0 = document.getElementById("num");
let btn = document.getElementById("btn1");
btn.addEventListener("click", () => {
  let number = num0.value;
  let number1 = parseInt(number);
  while (number1 <= 10) {
    console.log(number1);
    number1 = number1 + 1;
  }
});

let btn1 = document.getElementById("btn2");
btn1.addEventListener("click", () => {
  let number = num0.value;
  let number1 = parseInt(number);
  while (number1 % 2 === 0) {
    console.log(number1);
    number1 = number1 - 1;
  }
});
