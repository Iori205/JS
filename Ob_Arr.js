let students = [
  { name: "boldoo", age: 20, grade: 20, balance: 10 },
  { nane: "dorjoo", age: 15, grade: 30, balance: 10 },
  { name: "tsetsgee", age: 30, grade: 100, balance: 15 },
  { name: "bata", age: 10, grade: 50, balance: 2 },
];

function Findtopstudent(arr) {
  let topstudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topstudent.grade < arr[i].grade) {
      topstudent = arr[i];
    }
  }
  return topstudent;
}
let top = Findtopstudent(students);
console.log(top);

let person = [
  { name: "sodoo", age: 24 },
  { name: "ochko", age: 25 },
  { name: "amar", age: 26 },
];

function Findoldage(arr) {
  let oldage = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (oldage.age < arr[i].age) {
      oldage = arr[i];
    }
  }
  return oldage;
}
let old = Findoldage(person);
console.log(old);

let students_0 = [
  { name: "boldoo", age: 20, grade: 20, balance: 9 },
  { nane: "dorjoo", age: 15, grade: 30, balance: 15 },
  { name: "tsetsgee", age: 30, grade: 100, balance: 20 },
  { name: "bata", age: 10, grade: 50, balance: 25 },
];

function findmaxbalance(arr) {
  let maxbalance = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (maxbalance.balance < arr[i].balance) {
      maxbalance = arr[i];
    }
  }
  return maxbalance;
}
let max = findmaxbalance(students_0);
console.log(max);

let people = [
  { name: "A", age: 35 },
  { name: "B", age: 19 },
  { name: "C", age: 30 },
];

function findmaxage(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      return arr[i];
    }
  }
  return "Error";
}
let k = findmaxage(people, 35);
console.log(k);

function findavgage(arr) {
  let age = 0;
  for (i = 0; i < arr.length; i++) {
    age = age + arr[i].age;
  }
  age = age / arr.length;
  return age;
}
let result = findavgage(students);
console.log(result);

function findavgbalance(arr) {
  let sumavg = 0;
  let k = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 16) {
      k = k + 1;
      sumavg = sumavg + arr[i].balance;
    }
  }
  avg = sumavg / k;
  return avg;
}
let balance = findavgbalance(students);
console.log(balance);
