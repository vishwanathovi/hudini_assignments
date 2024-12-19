// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
// Write your code here to calculate and return the average of the array elements.
function calculateAverage(numbers){
// Write your code here to calculate and return the average of the array elements.
    // loop from i = 1 to i = n
    // in each iteration, i is increased by 1
    let sum=0;
    for (let i = 0; i <numbers.length; i++) {
        sum += numbers[i];  
    }
    return sum/numbers.length;
}
console.log(calculateAverage([10,20,30,40,50]));