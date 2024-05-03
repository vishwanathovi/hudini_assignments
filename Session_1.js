//1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    sum = 0
    for(let i=0;i<numbers.length;i++){
        sum = sum+numbers[i]
    }return sum/numbers.length

    // Write your code here to calculate and return the average of the array elements.
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    if(typeof(age) === "string"){
        console.log("Please enter a numerical value")}
    if(age>150){
        console.log("Age exceeded the limit")
    }
    if(age <15){
        console.log("You are a minor")
    }
    else if(age>15 && age<25){
        console.log("Young adult")
    }
    else{
        console.log("Adult")
    }
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count:0,
    add: function add(){
        this.count = this.count+1
    },
    subtract: function subtract(){
        this.count = this.count-1
    },
    reset:function reset(){
        this.count = 0

    },
    display:function display(){
      console.log(count)  
    },

};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0