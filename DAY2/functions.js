// Variables
let p = "Rohan";
let q = "Priya";
let r = "Rahul";

// Template literals
let message = `Welcome ${p}, ${q} and ${r}!`;
console.log(message);

// Function: multiplication table
function printTable(num) {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += `${num} x ${i} = ${num * i}\n`;
    }

    return output;
}

console.log(printTable(3));

// Arrow function (division)
let divide = (a, b) => a / b;
console.log("Division result:", divide(10, 2));

// Array with mixed values
let data = [10, 15, "Hello", 20, "JS", 25];

// Filter numbers → square them , print
data
    .filter(item => typeof item === "number")
    .map(num => num * num)
    .forEach(result => console.log("Squared value:", result));

// Find an element
let found = data.find(item => item === "Hello");
console.log("Found element:", found);