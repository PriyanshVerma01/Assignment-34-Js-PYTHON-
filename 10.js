const prompt = require("prompt-sync")(); // for fix this Error ReferenceError: prompt is not defined

let Radius = prompt("Enter Radius: ");

let A = Radius ** 2 * 3.1415;  // 3.1415 is the value of PI
console.log("Area of circle is A having the radius R");
console.log("Area of circle is: "+A, "having the radius is: "+Radius);
