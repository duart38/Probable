import InputLoop from "https://deno.land/x/input@2.0.0/index.ts";
import { probabilityByCount, probabilityOfAll, probabilityOfInputs } from "./probability.ts";

let numbs: number[] = 
[
    3,4,6,6,3,6,6,2,5,4, // 0.4
    2,6,5,6,2,5,4,5,6,2, // 0.35
    5,1,2,1,1,5,2,3,5,1, // 0.23333333333333334
    3,6,1,2,1,1,6,1,6,5, // 0.25
    3,6,5,5,5,5,1,4,4,4, // 0.22
    5,3,6,3,3,4,5,3,2,2, // 0.2
    4,2,3,2,5,3,4,4,3,3, // 0.17142857142857143
    4,6,6,1,1,5,5,3,5,3, // 0.175
    2,5,3,6,5,5,4,3,3,3, // 0.16666666666666666
    6,6,1,1,3,2,4,5,4,3, // 0.17
];


const data = (await Deno.readTextFile("dump.txt")).split("\n");



// let res = probabilityByCount("2", data);
const temp = probabilityOfInputs(numbs, [1,2,3,4,5,6])
console.log(temp);


// 1 = 0.13
// 2 = 0.13
// 3 = 0.21
// 4 = 0.14
// 5 = 0.22 (bias)
// 6 = 0.17




// const input = new InputLoop();

// while (!input.done) {
//     const result = await input.question("enter number");
//     let res = probabilityByCount(2, numbs);
//     numbs.push(Number(result) || 0);
//     console.log(`predicting the value 2 @ ${res}`);
// }