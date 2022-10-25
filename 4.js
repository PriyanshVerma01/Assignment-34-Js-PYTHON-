const prompt = require("prompt-sync")(); // for fix this Error ReferenceError: prompt is not defined

let a= prompt("Enter a number: ");
if (a%2==0){
    console.log("This is a Even Number");
} 
else {
    console.log("This number is Odd");
}
