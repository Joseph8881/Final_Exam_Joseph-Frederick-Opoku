
let greeting = "Hello, JavaScript!"; // String
let temperature = 25; // Number


const PI = 3.14159; // Number
const isLoggedIn = true; // Boolean


var userName = "Coder"; // String
var userAge = null; // Null


let unassignedVariable; // Undefined


console.log("Using let:");
console.log("Greeting:", greeting);
console.log("Temperature:", temperature);

console.log("Using const:");
console.log("Value of PI:", PI);
console.log("User is logged in:", isLoggedIn);

console.log("Using var:");
console.log("User Name:", userName);
console.log("User Age:", userAge);

console.log("Undefined variable:");
console.log("Unassigned Variable:", unassignedVariable);




// Function to calculate the square of a number
function calculateSquare(number) {
  return number * number;
}

// Call the function 3 times with different inputs and display results
const num1 = 5;
const num2 = 8;
const num3 = 12;

const square1 = calculateSquare(num1);
const square2 = calculateSquare(num2);
const square3 = calculateSquare(num3);

console.log(`The square of ${num1} is: ${square1}`);
console.log(`The square of ${num2} is: ${square2}`);
console.log(`The square of ${num3} is: ${square3}`);

document.write(`<h2>Square Calculations</h2>`);
document.write(`<p>The square of ${num1} is: ${square1}</p>`);
document.write(`<p>The square of ${num2} is: ${square2}</p>`);
document.write(`<p>The square of ${num3} is: ${square3}</p>`);


// Ask the user for their age and display  alert based on age group
const age = parseInt(prompt("Please enter your age:"));

if (age < 18) {
  alert("You are a minor.");
} else if (age >= 18 && age <= 60) {
  alert("You are an adult.");
} else if (age > 60) {
  alert("You are a senior citizen.");
}
console.log("age");

// Use a for loop to print numbers 1 to 10 in the console
console.log("Numbers from 1 to 10 (for loop):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Use a while loop to calculate the sum of numbers 1 to 5 and display on the page
let sum = 0;
let counter = 1;
while (counter <= 5) {
  sum += counter;
  counter++;
}

document.write(`<h2>Sum of Numbers (1 to 5)</h2>`);
document.write(`<p>The sum of numbers from 1 to 5 is: ${sum}</p>`);




