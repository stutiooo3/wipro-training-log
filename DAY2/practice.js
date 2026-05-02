//question 1
/*Write a function called formatGuests that takes an array of names. The function should:
Remove the first name from the list (it’s the host, not a guest).
Add "Guest: " before each remaining name using .map().
Return a single string where each guest is on a new line.*/
 

function formatGuests(names) {
    names.shift();

    let guests = names.map(name => "Guest: " + name);

    return guests.join(" ");
}
// input from the user
let input = prompt("Enter the names");
let names = input.split(",");

console.log(formatGuests(names));

//question 2
/*Create an arrow function called getHighNumbers. rs. It should take an array of mixed types (strings and numbers) and:
Filter the array to keep only the numbers.
Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
Return the final array.*/

const getHighNumbers = (arr) => {
    let threshold = Math.floor(Math.random() * 50) + 1;

    let numbers = [];
    
    // get only numbers
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            numbers.push(Number(arr[i]));
        }
    }

    let result = [];

    // filter numbers greater than threshold
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > threshold) {
            result.push(numbers[i]);
        }
    }

    console.log("Threshold:", threshold);
    return result;
};


// input from  the user
let input = prompt("Enter values separated by comma:");
let arr = input.split(",");

console.log(getHighNumbers(arr));

//question 3- You have an array of prices, but they are currently strings. Write a script that:
/*Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
Converts the remaining string prices into actual numbers.
Calculates the sum of those numbers using an arrow function.
Prints: "Total Price: $[sum]" using a template literal.*//

let input = prompt("Enter the prices ");
let prices = input.split(",");

// remove last item using splice
let removed = prices.splice(prices.length - 1, 1);

// convert remaining to numbers
let nums = prices.map(p => Number(p));

// sum using arrow function
let total = nums.reduce((sum, val) => sum + val, 0);

console.log(`Total Price: $${total}`);