// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.

// Function signature:
// calculateAverage takes an array of numbers as input, and returns their average.
// Takes an array: [Number]
// Returns average: Number

function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.

    let sum = 0
    array_length = numbers.length

    for (let i = 0; i < array_length; i++)
        sum += numbers[i]

    average = sum / array_length
    return average;

}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.

// Function signature:
// checkAge takes an age as input and prints the category as output.
// Takes age: Number
// Returns: Nothing
// Action: prints age catergory

function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.

    if (age > 150)
        console.log("age limit exceeded!")

    else if (age < 0)
        console.log('invalid age!')

    else {
        if (age < 15)
            console.log('minor')

        else if (age <= 25)
            console.log('young adult')

        else
            console.log('adult')
    }
}

// Example usage:
checkAge(22); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.

// Function signature:
// Takes a string of characters as input and returns the reversed string.
// Takes str: String
// Returns reversedString: String

function reverseString(str) {
    // Write your code here to reverse and return the string.


    // Reverse using built-in functions:

    // let string_array = str.split('')
    // let reversed_array = string_array.reverse()
    // let reversed_string = reversed_array.join('')
    // return reversed_string


    // Reverse using string traversal:

    let reversedString = ''

    for (let i = str.length - 1; i >= 0; i--)
        reversedString = reversedString + str[i]

    return reversedString

}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.

// Function signature:
// findLargestNumber takes an array as input and returns the largest elemengt in the array.
// Takes numbers: [Number]
// Returns largest: Number 

function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.

    let largest = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest)
            largest = numbers[i]
    }

    return largest

}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.

// Object definition:
// counter is an object with a property counter (of type Number).
// add, subtract and, reset have functions assigned to them, that manipulated the counter value.
// display has a function assigned to it, that prints the counter value.

const counter = {
    count: 0,

    add: function () {
        this.count++
    },
    subtract: function () {
        this.count--
    },
    reset: function () {
        this.count = 0
    },
    display: function () {
        console.log(this.count)
    }

};

//Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0