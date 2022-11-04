const readline = require("readline-sync");
let firstNumber = Number(readline.question("Enter first number : "));
let secondNumber = Number(readline.question("Enter second number : "));
let thirdNumber = Number(readline.question("Enter third number : "));

console.log("adding three numbers to 0 is "+(firstNumber + secondNumber + thirdNumber));