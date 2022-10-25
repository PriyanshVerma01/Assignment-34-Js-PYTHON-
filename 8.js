const prompt = require("prompt-sync")(); // for fix this Error ReferenceError: prompt is not defined

let dollar= prompt("Enter Dollar Amount: ");

let converter = 82.23 * dollar;

console.log("Dollar Amount in INR Currency is: "+converter);