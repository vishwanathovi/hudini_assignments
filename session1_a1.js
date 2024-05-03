// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.

    // Inititalize sum as 0
    let sum = 0;

    // Write a for loop that traverses across the array
        // add every element to sum
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    // Calculate average by sum/length of the array and return
    return sum/numbers.length;

}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30






























 
// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, 
// a young adult, or an adult.
// Use conditional statements.
// Function signature:

// checkAge function takes age and prints if the person is a minor, young adult or adult.
// Takes Age: Integer (0 - 150)
// Returns: None
// Side effect: Prints the category
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    
    // Handle cases of age above 150
    if (age > 150){
        console.log("Exceeding age limit")
    }

    if (age < 0){
        console.log("Negative age value.")
    }


    if (age < 15) {
        console.log("Minor")
    }

    if (age > 15 && age <= 25) {
        console.log("Young adult")
    }


    if (age < 15) {
        console.log("Minor")
    } else if (age <= 25) {
        console.log("Young adult")
    } else {
        console.log("Adult")
    }
}
checkAge("25 years")







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
// Create an object that acts as a counter with methods to add, subtract, and reset 
// the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {

};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0