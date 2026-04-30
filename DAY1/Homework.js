// Question 1

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("After swap -> a:", a, "b:", b);


// Question 2
function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    } else {
        console.log("Other type");
    }
}

checkType(100);
checkType("hello");


// Question 3. 
let fullName = "John Doe";

let parts = fullName.split(" ");
let initials = parts[0][0] + parts[1][0];

console.log("Initials:", initials);


// Question 4. 
let messy = " Javascript is fun ";
let clean = messy.trim().toLowerCase();

console.log("Cleaned:", clean);


// Question 5.
let cart = ["Bread", "Butter", "Jam"];

cart.push("Milk");     // add at end
cart.unshift("Eggs");  // add at beginning
cart.pop();            // remove last item

console.log("Cart:", cart);


// Question 6. 
let numbers = [10, 20, 30, 40, 50];

let hasThirty = numbers.includes(30);
let indexOfFifty = numbers.indexOf(50);

console.log("Is 30 present?", hasThirty);
console.log("Index of 50:", indexOfFifty);