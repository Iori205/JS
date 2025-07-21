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
