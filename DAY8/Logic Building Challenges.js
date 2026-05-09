//1. Find Missing Number in Array

let arr = [];
let n = Number(prompt("Enter total numbers count:"));
for (let i = 0; i < n - 1; i++) {
    let num = Number(prompt("Enter number:"));
    arr.push(num);
}
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((sum, num) => sum + num, 0);

console.log("Missing Number:", expectedSum - actualSum);

//2. Check Whether Two Strings Are Anagrams

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
let result =
    str1.split("").sort().join("") ===
    str2.split("").sort().join("");

console.log(result);

//3. Rotate Array by K Positions

let arr = [];
let size = Number(prompt("Enter array size:"));
for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element:")));
}

let k = Number(prompt("Enter rotation count:"));
let rotated = arr.slice(-k).concat(arr.slice(0, -k));
console.log(rotated);

//4 Find Duplicate Elements in Array

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

//5 Flatten Nested Arrays Manually

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