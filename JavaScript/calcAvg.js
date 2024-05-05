// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
}

// Example usage: console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

function calculateAverage(arr){
    let sum=0;
    for(let i=0;i<arr[i];i++){
    sum= sum+arr[i];
    }
    return sum/arr.length;
}

console.log(calculateAverage([1,2,3,4,5]));