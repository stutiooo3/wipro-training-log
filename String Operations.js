let a = 25;
let b = 10;

let str = "Hello, world!";

console.log("String:", str);
console.log("Length of string:", str.length);

console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

console.log("Substring (0-5):", str.substring(0, 5));

// Arithmetic Operations
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Comparison Operations
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// LOGICAL OPERATIONS
console.log("LOGICAL OPERATIONS");

console.log("a > b && b > 0:", a > b && b > 0);
console.log("a > b || b > 0:", a > b || b > 0);
console.log("!(a > b):", !(a > b));

// Condition
if (a !== b && b !== 0) {
    console.log("Condition is TRUE");
} else {
    console.log("Condition is FALSE");
}