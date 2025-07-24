// Top student find
let students = [
  { name: "boldoo", age: 20, grade: 20, balance: 10, gender: "male" },
  { nane: "dorjoo", age: 15, grade: 30, balance: 10, gender: "male"},
  { name: "tsetsgee", age: 30, grade: 100, balance: 15, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 2, gender: "male" },
  { name: "nandia", age: 30, grade: 100, balance: 15, gender: "female" },
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

// Max old age find

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

// Max balance find

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

//  thirty age same find

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

//  Average balance find

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

//  16+ average balance find

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

// Only male people

function findgender(arr) {
  let num =0 
  for (i = 0; i < arr.length; i++) {
    if(arr[i].gender == "male") {
      num = num + 1
    }
  }
  return num
}
let gender = findgender(students)
console.log(gender)

//  Only female people

function fepercent(arr) {
  let females = 0
  for(i=0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      females = females + 1
    }
  }
  k = females / arr.length * 100
  return k
}
let percent = fepercent(students)
console.log(percent + "%")

//  1-100 number if /3 fizz and /5 buzz and 3 and 5/ bizzbuzz find 

// let numbers = [ 1,2,3,4,5,6,7,8,9,10]

function finddivide(arr) {
  let num = []
  for(i=0; i <= arr.length; i++) {
    if(arr[i] % 3 === 0) {
      num.push("fiiz")
    } else if(arr[i] % 5 === 0) {
      num.push("buzz")
    } else {arr}
  } 
  return num
}
let divide = finddivide([ 1,2,3,4,5,6,7,8,9,10 ])
console.log(divide)

// want 1-100 numbers

function find_divide(arr) {
  for(i=0; i <= arr.length; i++) {
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0 ) {
      arr[i] = "fizzbuzz";
    } else if (arr[i] % 3 === 0) {
      arr[i] = "fizz";
    } else if (arr[i] % 5 === 0) {
      arr[i] = "buzz";
    }
  }
  return arr
} 
let numbers = [1,2,3,4,5,6,7,8,9,10,15,30]
console.log(find_divide(numbers))

// 

let input = [4,9,1,12,7]

function maxnum(arr) {
  for(i=0; i <= arr.length; i++)
    if(arr[0] < arr[i]) {
      arr[0] = arr[i]
    }
    return arr[0] 
}
console.log(maxnum(input))

// 
 let even = [-5,10,-2,3,7,]
 function evensum(arr) {
  let sum = 0
  for(i=0; i <  arr.length; i++) {
    if (arr[i] > 0) {
       sum = sum + arr[i]
    }
  }
  return sum
 } 
 console.log(evensum(even))

//  Random number /2 , /3 , /5 diwide find

function multiple(arr) {
  for(i=0; i <= arr.length; i++) {
    if(arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = "all";
    } else if (i % 2 === 0) {
      arr[i] = "two";
    } else if (i % 3 === 0 ) {
      arr[i] = "three";
    } else if (i % 5 === 0) {
      arr[i] = "five"
    }
  }
  return arr
}
let asd = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,23,24,25,26,27,28,29,30]
console.log(multiple(asd))

