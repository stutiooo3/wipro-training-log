/*Question 1: Create a program that:
Converts the string to uppercase
Finds total length
Extracts first 4 characters
Checks if "Script" exists
Replaces "Java" with "Type"
Prints everything using template literals*/

let course="javascript";
let upper=course.toUpperCase();
let len=course.length;
let first4=course.substring(0,4);//course.slice(0,4) //last excluded
let script=course.includes("script");
let replace=course.replace("java","type");

console.log(`
    Course Name:${course}
    UpperCase:${upper}
    Lenght:${len}
    First 4 Characters:${first4}
    Contains Script?:${script}
    Replaced String:${replace}
`)

/*2. Strings
 1. Reverse a string without using built-in reverse methods. 
 2. Count the number of vowels in a string.
  3. Check whether a string is a palindrome.
   4. Capitalize the first letter of every word in a sentence.
    5. Find the longest word in a sentence.*/

 // 1. Reverse a string without using built-in reverse methods

let str = "hello";
let reversed = "";
for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// 2. Count the number of vowels in a string

let str = "javascript";
let count = 0;
let vowels = "aeiouAEIOU";

for(let char of str) {
    if(vowels.includes(char)) {
        count++;
    }
}
console.log(count);

// 3. Check whether a string is a palindrome

let str = "madam";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
if(str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 4. Capitalize the first letter of every word in a sentence

let sentence = "hello world from javascript";
let words = sentence.split(" ");
let result = [];
for(let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
}
console.log(result.join(" "));

// 5. Find the longest word in a sentence

let sentence = "JavaScript is very interesting language";
let words = sentence.split(" ");
let longest = "";
for(let word of words) {
    if(word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);

/*3. Numbers & Math 
1. Generate a random number between 1 and 100.
 2. Check whether a number is prime. 
 3. Find factorial of a number using loops.
4. Find Fibonacci series up to n numbers.
5. Check whether a number is Armstrong number. */

// 1. Generate a random number between 1 and 100

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// 2. Check whether a number is prime

let num = 17;
let isPrime = true;
if(num <= 1) {
    isPrime = false;
}
for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}

// 3. Find factorial of a number using loops
let num = 5;
let factorial = 1;
for(let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

// 4. Find Fibonacci series up to n numbers

let n = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for(let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

// 5. Check whether a number is Armstrong number

let num = 153;
let temp = num;
let sum = 0;
while(temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if(sum === num) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}
   
/*4. Arrays
 1. Find the largest and smallest number in an array.
 2. Remove duplicate elements from an array. 
 3. Sort an array without using built-in sort().
 4. Find second largest number in an array.
5. Merge two arrays and remove duplicates. */

// 1. Find the largest and smallest number in an array

let arr = [10, 5, 20, 8, 2];
let largest = arr[0];
let smallest = arr[0];
for(let num of arr) {
    if(num > largest) {
        largest = num;
    }

    if(num < smallest) {
        smallest = num;
    }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);

// 2. Remove duplicate elements from an array

let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for(let num of arr) {
    if(!unique.includes(num)) {
        unique.push(num);
    }
}
console.log(unique);

// 3. Sort an array without using built-in sort()

let arr = [5, 2, 8, 1, 3];
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

// 4. Find second largest number in an array

let arr = [10, 25, 8, 40, 35];
let largest = -Infinity;
let secondLargest = -Infinity;
for(let num of arr) {
    if(num > largest) {
        secondLargest = largest;
        largest = num;
    } else if(num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
console.log(secondLargest);

// 5. Merge two arrays and remove duplicates

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let merged = [...arr1, ...arr2];
let result = [];
for(let num of merged) {
    if(!result.includes(num)) {
        result.push(num);
    }
}
console.log(result);

/*5. Objects 
 1. Create an object for a student and display all properties dynamically. 
2. Count number of keys in an object.    3. Merge two objects into one.
 4. Convert an object into an array of keys and values.
 5. Create a shopping cart object and calculate total bill amount*/

 // 1. Create an object for a student and display all properties dynamically

let student = {
    name: "Stuti",
    age: 20,
    course: "JavaScript"
};
for(let key in student) {
    console.log(key + " : " + student[key]);
}

// 2. Count number of keys in an object

let obj = {
    name: "John",
    age: 25,
    city: "Delhi"
};

let count = 0;

for(let key in obj) {
    count++;
}

console.log(count);

// 3. Merge two objects into one

let obj1 = {
    name: "John"
};

let obj2 = {
    age: 25
};

let mergedObj = {
    ...obj1,
    ...obj2
};

console.log(mergedObj);

// 4. Convert an object into an array of keys and values

let obj = {
    name: "Alice",
    age: 22
};

let keys = [];
let values = [];

for(let key in obj) {
    keys.push(key);
    values.push(obj[key]);
}

console.log(keys);
console.log(values);

// 5. Create a shopping cart object and calculate total bill amount

let cart = {
    item1: 500,
    item2: 300,
    item3: 200
};

let total = 0;

for(let item in cart) {
    total += cart[item];
}

console.log("Total Bill:", total);

/*6. Loops
1. Print star pyramid patterns.
2. Print multiplication tables from 1 to 10.
3. Find sum of all even numbers between 1 and 100.
4. Print all prime numbers between 1 and 100. 
5. Create a number guessing game using loops. */

// 1. Print star pyramid patterns
let rows = 5;
for(let i = 1; i <= rows; i++) {
    let pattern = "";
    for(let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for(let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    console.log(pattern);
}


// 2. Print multiplication tables from 1 to 10

for(let i = 1; i <= 10; i++) {
    console.log("Table of " + i);
    for(let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}


// 3. Find sum of all even numbers between 1 and 100

let evenSum = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        evenSum += i;
    }
}
console.log("Sum of Even Numbers:", evenSum);


// 4. Print all prime numbers between 1 and 100

for(let num = 2; num <= 100; num++) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log(num);
    }
}


// 5. Create a number guessing game using loops

let secretNumber = 7;
let guess = 0;
while(guess !== secretNumber) {
    guess = Number(prompt("Enter Number"));
    if(guess === secretNumber) {
        console.log("Correct Guess");
    } else {
        console.log("Try Again");
    }
}


/*7. Functions 
1. Create a function that returns the greatest of three numbers. 
2. Write a function to check whether a number is palindrome.
3. Create a reusable function for currency conversion. 
4. Write a function that accepts an array and returns only even numbers.
5. Create a calculator using functions for add, subtract, multiply, and divide.*/

// 1. Function that returns greatest of three numbers

function greatest(a, b, c) {
    if(a > b && a > c) {
        return a;
    } 
    else if(b > a && b > c) {
        return b;
    } 
    else {
        return c;
    }
}
console.log(greatest(10, 50, 30));


// 2. Function to check palindrome number

function isPalindrome(num) {
    let original = num;
    let reverse = 0;
    while(num > 0) {
        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }

    return original === reverse;
}
console.log(isPalindrome(121));


// 3. Reusable function for currency conversion

function currencyConverter(amount, rate) {
    return amount * rate;
}
console.log(currencyConverter(100, 83));


// 4. Function that returns only even numbers from array

function getEvenNumbers(arr) {
    let even = [];
    for(let num of arr) {

        if(num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}
console.log(getEvenNumbers([1,2,3,4,5,6]));


// 5. Calculator using functions

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

/*8. Scope & Hoisting 
1. Predict output of variable hoisting examples.
2. Create examples showing block scope using let.
3. Write a program demonstrating closure behavior.
4. Create nested functions and access outer variables.
5. Debug a program with incorrect variable scoping. */

// 1. Variable hoisting example

console.log(a);
var a = 10;
// Output: undefined


// 2. Block scope using let

{
    let message = "Hello";
    console.log(message);
}

// console.log(message);
// Error because let has block scope


// 3. Closure behavior

function outer() {

    let count = 0;

    function inner() {

        count++;

        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();


// 4. Nested functions accessing outer variables

function outerFunction() {

    let name = "Stuti";

    function innerFunction() {

        console.log(name);
    }

    innerFunction();
}

outerFunction();


// 5. Incorrect variable scoping example

function test() {

    if(true) {

        var text = "JavaScript";
    }

    console.log(text);
}

test();

/*9. Callback Functions & setTimeout
 1. Create a delayed greeting message using setTimeout.
 2. Build a countdown timer.
  3. Create a callback-based calculator.
   4. Simulate food ordering system using callbacks.
    5. Execute functions sequentially using callbacks. */

// 1. Delayed greeting message

setTimeout(() => {
    console.log("Hello Welcome");
}, 2000);


// 2. Countdown timer

let count = 5;
let timer = setInterval(() => {
    console.log(count);
    count--;
    if(count < 0) {
        clearInterval(timer);
        console.log("Time Up");
    }

}, 1000);


// 3. Callback-based calculator

function calculator(a, b, operation) {
    return operation(a, b);
}
function add(a, b) {
    return a + b;
}
console.log(calculator(10, 5, add));


// 4. Food ordering system using callbacks

function orderFood(callback) {
    console.log("Order Received");
    setTimeout(() => {
        console.log("Food Prepared");
        callback();
    }, 2000);
}
function serveFood() {
    console.log("Food Served");
}
orderFood(serveFood);


// 5. Execute functions sequentially using callbacks

function first(callback) {
    console.log("First Function");
    callback();
}
function second(callback) {
    console.log("Second Function");
    callback();
}
function third() {
    console.log("Third Function");
}
first(() => {
    second(third);
});


    
/*10. Arrow Functions 
1. Convert normal functions into arrow functions. 
2. Create one-line arrow functions with implicit return.
3. Use arrow functions with map(). 
4. Build an even/odd checker using arrow functions. 
 5. Create a student grade calculator using arrow functions.*/

 // 1. Convert normal function into arrow function

const greet = () => {
    console.log("Hello");
};
greet();


// 2. One-line arrow function with implicit return

const square = num => num * num;
console.log(square(5));


// 3. Arrow functions with map()

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);


// 4. Even/odd checker using arrow function

const checkEvenOdd = num => {
    if(num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(checkEvenOdd(10));


// 5. Student grade calculator using arrow function

const gradeCalculator = marks => {
    if(marks >= 90) {
        return "A";
    } else if(marks >= 75) {
        return "B";
    } else {
        return "C";
    }
};
console.log(gradeCalculator(85));

     
/*11. map(), filter(), forEach()
 1. Double all numbers in an array using map().
 2. Filter all students scoring above 80 marks.
  3. Print all array values using forEach().
   4. Convert array of names into uppercase.
    5. Extract only even numbers using filter().*/

// 1. Double all numbers using map()

let nums = [1, 2, 3, 4];
let result = nums.map(num => num * 2);
console.log(result);

// 2. Filter students scoring above 80

let marks = [55, 90, 82, 70, 95];
let highMarks = marks.filter(mark => mark > 80);
console.log(highMarks);

// 3. Print all array values using forEach()

let arr = [10, 20, 30];
arr.forEach(value => {
    console.log(value);
});

// 4. Convert names into uppercase

let names = ["stuti", "riya", "rahul"];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);


// 5. Extract even numbers using filter()

let values = [1,2,3,4,5,6,7,8];
let evenNumbers = values.filter(num => num % 2 === 0);
console.log(evenNumbers);
    
    
/*12. Primitive vs Reference Types 
1. Create examples showing primitive copying behavior. 
2. Create examples showing object reference behavior.
 3. Clone an object without affecting original object.
  4. Compare arrays using reference equality. 
  5.Demonstrate shallow copy using spread operator. */

 // 1. Primitive copying behavior

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

// 2. Object reference behavior

let obj1 = {
    name: "Stuti"
};
let obj2 = obj1;
obj2.name = "Riya";
console.log(obj1.name);
console.log(obj2.name);

// 3. Clone object without affecting original

let student = {
    name: "Rahul",
    age: 20
};
let clonedStudent = {
    ...student
};
clonedStudent.name = "Aman";
console.log(student);
console.log(clonedStudent);

// 4. Compare arrays using reference equality

let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(arr1 === arr2);

// 5. Shallow copy using spread operator

let original = {
    city: "Delhi"
};
let copy = {
    ...original
};
copy.city = "Mumbai";
console.log(original);
console.log(copy);

   
/*13. Stack & Heap Memory 
1. Create examples showing stack memory behavior. 
2. Create examples showing heap memory references. 
3. Demonstrate object mutation through references.
 4. Predict outputs of memory-related programs. 
 5. Create diagrams explaining memory allocation.*/

 // 1. Stack memory behavior

let x = 100;
let y = x;
y = 200;
console.log(x);
console.log(y);

// 2. Heap memory references

let user1 = {
    name: "John"
};
let user2 = user1;
user2.name = "Peter";
console.log(user1.name);
console.log(user2.name);

// 3. Object mutation through references

let car = {
    brand: "BMW"
};
function changeBrand(obj) {
    obj.brand = "Audi";
}
changeBrand(car);
console.log(car);


// 4. Predict output of memory-related program

let num1 = 5;
let num2 = num1;
num2 = 10;
console.log(num1);
console.log(num2);


// 5. Memory allocation explanation

/*
Primitive Values - Stack Memory

Objects & Arrays - Heap Memory

Variables store reference address
*/

 
 /*14. Call Stack 
 1. Trace execution order of nested function calls. 
 2. Create recursive factorial function. 
 3. Build recursive Fibonacci function.
  4. Simulate stack overflow with recursion.
   5. Draw call stack flow for nested functions.*/

// 1. Trace execution order of nested functions

function one() {
    console.log("Function One");
    two();
}
function two() {
    console.log("Function Two");
    three();
}
function three() {
    console.log("Function Three");
}
one();


// 2. Recursive factorial function

function factorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));


// 3. Recursive Fibonacci function

function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));


// 4. Stack overflow simulation

function overflow() {
    overflow();
}
// overflow();


// 5. Call stack flow explanation
/*
main()

one()
 
two()
 
three()

Functions are added to call stack
After execution they are removed
*/

/*15. JSON Problems
 1. Convert JSON string into object.
  2. Convert object into JSON string. 
  3. Parse API-like JSON data and display values.
   4. Create a JSON array of employee records. 
   5. Filter JSON data based on conditions*/


// 1. Convert JSON string into object

let jsonString = '{"name":"Stuti","age":20}';
let obj = JSON.parse(jsonString);
console.log(obj);

// 2. Convert object into JSON string

let student = {
    name: "Rahul",
    age: 22
};
let jsonData = JSON.stringify(student);
console.log(jsonData);


// 3. Parse API-like JSON data and display values

let apiData = `{
    "id": 1,
    "title": "JavaScript",
    "price": 500
}`;
let product = JSON.parse(apiData);
console.log(product.id);
console.log(product.title);
console.log(product.price);

// 4. Create JSON array of employee records

let employees = [
    {
        id: 1,
        name: "Aman",
        salary: 25000
    },
    {
        id: 2,
        name: "Riya",
        salary: 30000
    },
    {
        id: 3,
        name: "Rahul",
        salary: 28000
    }
];
console.log(employees);

// 5. Filter JSON data based on conditions

let users = [
    {
        name: "Stuti",
        age: 20
    },
    {
        name: "Riya",
        age: 17
    },
    {
        name: "Aman",
        age: 22
    }
];
let adults = users.filter(user => user.age >= 18);
console.log(adults);