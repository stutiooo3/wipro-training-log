// npx tsx index.ts  for running or  npx ts-node index.ts
/* command to initilize
npm i -g typescript
tsc --init
npm install --save-dev tsx */

//let name: string = "Arush";
//console.log(name);

let name: string = "Aarush";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(5, 10));



 