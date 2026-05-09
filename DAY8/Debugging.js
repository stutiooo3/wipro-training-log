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
