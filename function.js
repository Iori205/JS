function problem1(age) {
  console.log(2025 - age);
}
problem1(24);
problem1(26);
problem1(28);
problem1(30);

function problem2(name) {
  console.log("Sain bainuu?" + name);
}
problem2("Sodoo");

function problem3(a, b, c) {
  if (a > b) {
    console.log(a);
  }
  if (a > c) {
    console.log(a);
  }

  if (b < c) {
    console.log(b);
  }
}
problem3(3, 4, 5);

function problem4(num) {
  if (num / 100 < 10) {
    console.log(3);
  }
  if (num / 100 > 10) {
    console.log(4);
  }
  if (num / 100 < 100) {
    console.log(4);
  }
  if (num / 100 > 100) {
    console.log(5);
  }
}
problem4(150);
