// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.

// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    // Initialize a variable to store the sum of all numbers in the array.
    let sum=0;
    // Loop through each number in the array.
    for(let i=0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number to sum.
    }
    // Calculate average of numbers
    let average = sum / numbers.length;
    // Return the average
    return average;
}


// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30
console.log('-------------------------------------------------');

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    //Handle cases of age above 150.
    if(age > 150) {
        console.log('Exceeding age limit');
    }
    // Handle cases of negative age.
    else if(age < 0) {
        console.log('Invalid age');
    }
    // Check if the age is below 18.
    else if(age < 18) {
        console.log('Minor');
    }
    // Check if the age is greater than or equal to 18 and less than 30.
    //else if(age >= 18 && age < 30) {
    else if(age < 30) {
        console.log('Young adult');
    }
    else {
        console.log('Adult');
    }
}

// Example usage:
checkAge(25); // Possible output: young adult
console.log('-------------------------------------------------');


// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    // Initialize an empty string to store the reversed string.
    let revString = "";
    // Loop through each character of the actual string in reverse order.
    for(let i=str.length-1; i>=0; i--) {
        // Add each character to the reversed string.
        revString += str[i];
    }
    // Return the reversed string.
    return revString;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"
console.log('-------------------------------------------------');

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    // Initialize a variable to store the largest number assuming the first element is the largest.
    let max = numbers[0];
    // Loop through the numbers in the array starting from the second.
    for(let i=1; i<numbers.length; i++) {
        // Compare the the current number with the largest number found so far.
        if(numbers[i] > max) {
            // Store the largest number. 
            max = numbers[i];
        }
    }
    // Return the largest number.
    return max;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50
console.log('--------------------------------------------------');

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    // Initialize count value to zero.
    count: 0,
    // Method to add a value to the count.
    add:function() {
        this.count++;
    },
    // Method to subtract a value from the count
    subtract:function() {
        this.count--;
    },
    // Method to display the count.
    display: function() {
        console.log(this.count);
    },
    // Method to reset count to zero.
    reset: function() {
        this.count = 0;
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

