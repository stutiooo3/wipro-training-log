//1. Fix Infinite Loop Issue

let limit = Number(prompt("Enter limit:"));
let i = 0;
while (i < limit) {
    console.log(i);
    i++;
}

//2 Identify Why Undefined is Returned

function add(a, b) {
    return a + b;
}
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
console.log(add(num1, num2));

//3 Debug Incorrect Array Sorting

let arr = [];
let size = Number(prompt("Enter array size:"));
for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element:")));
}
arr.sort((a, b) => a - b);
console.log(arr);

//4 Resolve Scope-Related Variable Issues

function test() {
    let message = prompt("Enter message:");
    console.log(message);
}
test();

//5 

# Mini Project-Level Coding Challenges

## Beginner Projects

### 1. Student Grade Calculator

```javascript id="j0xfo5"
let marks = [];

for (let i = 0; i < 5; i++) {
    let mark = Number(prompt("Enter marks:"));
    marks.push(mark);
}

let total = marks.reduce((sum, mark) => sum + mark, 0);

let percentage = total / marks.length;

let grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total:", total);
console.log("Percentage:", percentage);
console.log("Grade:", grade);
```

---

### 2. ATM Withdrawal Simulator

```javascript id="vmcikg"
let balance = 5000;

let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}
```

---

### 3. To-Do List using Arrays

```javascript id="j0jbb7"
let tasks = [];

let count = Number(prompt("How many tasks?"));

for (let i = 0; i < count; i++) {
    let task = prompt("Enter task:");
    tasks.push(task);
}

console.log("Tasks:", tasks);

let removeTask = prompt("Enter task to remove:");

let index = tasks.indexOf(removeTask);

if (index !== -1) {
    tasks.splice(index, 1);
}

console.log("Updated Tasks:", tasks);
```

---

### 4. Password Generator

```javascript id="c31b57"
let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let length = Number(prompt("Enter password length:"));

let password = "";

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
}

console.log("Generated Password:", password);
```

---

### 5. Quiz Application

```javascript id="kwyrxw"
let questions = [
    {
        question: "2 + 2",
        answer: "4"
    },
    {
        question: "Capital of India",
        answer: "Delhi"
    }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question);

    if (
        userAnswer.toLowerCase() ===
        questions[i].answer.toLowerCase()
    ) {
        score++;
    }
}

console.log("Final Score:", score);
```

---

# Logic Building Challenges

## 1. Find Missing Number in Array

```javascript id="2i72du"
let arr = [];

let n = Number(prompt("Enter total numbers count:"));

for (let i = 0; i < n - 1; i++) {
    let num = Number(prompt("Enter number:"));
    arr.push(num);
}

let expectedSum = (n * (n + 1)) / 2;

let actualSum = arr.reduce((sum, num) => sum + num, 0);

console.log("Missing Number:", expectedSum - actualSum);
```

---

## 2. Check Whether Two Strings Are Anagrams

```javascript id="t6q8h0"
let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

let result =
    str1.split("").sort().join("") ===
    str2.split("").sort().join("");

console.log(result);
```

---

## 3. Rotate Array by K Positions

```javascript id="h1tpzd"
let arr = [];

let size = Number(prompt("Enter array size:"));

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element:")));
}

let k = Number(prompt("Enter rotation count:"));

let rotated = arr.slice(-k).concat(arr.slice(0, -k));

console.log(rotated);
```

---

## 4. Find Duplicate Elements in Array

```javascript id="lt4dk6"
let arr = [];

let size = Number(prompt("Enter array size:"));

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element:")));
}

let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    if (
        arr.indexOf(arr[i]) !== i &&
        !duplicates.includes(arr[i])
    ) {
        duplicates.push(arr[i]);
    }
}

console.log("Duplicates:", duplicates);
```

---

## 5. Flatten Nested Arrays Manually

```javascript id="p6u1o3"
let arr = [1, [2, 3], [4, [5, 6]]];

let flat = [];

function flatten(array) {
    for (let item of array) {
        if (Array.isArray(item)) {
            flatten(item);
        } else {
            flat.push(item);
        }
    }
}

flatten(arr);

console.log(flat);
```

---

# Debugging Challenges

## 1. Fix Infinite Loop Issue

```javascript id="m8hx86"
let limit = Number(prompt("Enter limit:"));

let i = 0;

while (i < limit) {
    console.log(i);
    i++;
}
```

---

## 2. Identify Why Undefined is Returned

```javascript id="z5khnd"
function add(a, b) {
    return a + b;
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log(add(num1, num2));
```

---

## 3. Debug Incorrect Array Sorting

```javascript id="s0awf4"
let arr = [];

let size = Number(prompt("Enter array size:"));

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element:")));
}

arr.sort((a, b) => a - b);

console.log(arr);
```

---

## 4. Resolve Scope-Related Variable Issues

```javascript id="kpq9ih"
function test() {
    let message = prompt("Enter message:");

    console.log(message);
}

test();
```

---

//5. Fix Callback Execution Order Problem

function task(callback) {
    let time = Number(prompt("Enter delay time in ms:"));
    setTimeout(() => {
        console.log("Task Completed");
        callback();
    }, time);
}
task(() => {
    console.log("Callback Executed");
});
