let click = document.getElementById("click");
let num1 = document.getElementById("num1_input");
let num2 = document.getElementById("num2_input");

click.addEventListener("click", () => {
  console.log(parseInt(num1.value) % parseInt(num2.value));
});
let click1 = document.getElementById("click_1");
let num3 = document.getElementById("num3_input");
let num4 = document.getElementById("num4_input");

click_1.addEventListener("click", () => {
  console.log(parseInt(num3.value) + parseInt(num4.value));
});
let click2 = document.getElementById("click_2");
let num5 = document.getElementById("num5_input");
let num6 = document.getElementById("num6_input");
click_2.addEventListener("click", () => {
  console.log(parseInt(num5.value) - parseInt(num6.value));
});
let click3 = document.getElementById("click_3");
let num7 = document.getElementById("num7_input");
let num8 = document.getElementById("num8_input");
click_3.addEventListener("click", () => {
  console.log(parseInt(num7.value) * parseInt(num8.value));
});

let button = document.getElementById("plus");
let num9 = document.getElementById("num9_input");
let num10 = document.getElementById("num10_input");
let num11 = document.getElementById("num11_input");
button.addEventListener("click", () => {
  let num12 = parseInt(num9.value);
  let num13 = parseInt(num10.value);
  let num14 = parseInt(num11.value);
  if (num12 > num13) {
    if (num12 > num14) {
      console.log(num12);
    } else {
      console.log(num14);
    }
  } else {
    if (num13 > num14) {
      console.log(num13);
    } else {
      console.log(num14);
    }
  }
});
