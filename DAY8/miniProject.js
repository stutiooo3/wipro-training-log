//Mini Project

//1. Student Grade Calculator

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


//2ATM Withdrawal Simulator
console.log("Total:", total);
console.log("Percentage:", percentage);
console.log("Grade:", grade);

let balance = 5000;

let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

//3. To-Do List Manager

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

//4 password Generator

let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let length = Number(prompt("Enter password length:"));

let password = "";

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
}

console.log("Generated Password:", password);



