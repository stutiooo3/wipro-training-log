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


// still practicing...