// This is a for loop that calculates the factorial of a number (in this case, 10) and prints the intermediate results at each step. 
// The final result will be the factorial of 10, which is 3628800.
let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 
 
console.log("Final result: ", result);