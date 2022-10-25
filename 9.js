const prompt = require("prompt-sync")(); // for fix this Error ReferenceError: prompt is not defined

let digit = prompt("Enter Digits: ");

let a = digit % 10;
console.log("Unit of Digit is: "+a);

