// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.

// Function to calculate the average  of numbers.
// Takes: integer array as an input
// Returns: average of the interger array
// Function signature:
function calculateAverage(numbers) {
  // Write your code here to calculate and return the average of the array elements.

  // Declaring variables
  let average;
  let sum = 0;
  let notNumber = false; // Variable to determine whether the array contain non-integer values
  // If the array of numbers is empty
  if (numbers.length == 0) {
    console.log("Empty integer array");
    return;
  }
  // Check if the array contain anything otherthan integer
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      notNumber = true;
      break;
    }
  }
  // Condition to determine whether the array contain any value otherthan integer
  if (notNumber == true) {
    console.log("Contains a value otherthan integer");
    return;
  }
  // Calculate sum and average of the array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  return average;
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.

// Function to check whether the person is minor, young adult, or an adult
// Takes: Age as an input to the function
// Returns: None
// Displays: category of the person
// Function signature:
function checkAge(age) {
  // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
  // Check if the age is less than zero
  if (age < 0) {
    console.log("Invalid age");
    return;
  }
  // Check if the age exceeds a normal age limit
  if (age > 150) {
    console.log("Age exceedes a realistic age limit");
    return;
  }
  // Check if the age is not an integer
  if (isNaN(age) == true) {
    console.log("Entered age is not a number");
    return;
  }
  // Check for age category of the person
  if (age < 18) {
    console.log("minor");
  } else if (age >= 18 && age <= 25) {
    console.log("young adult");
  } else {
    console.log("adult");
  }
}

// Example usage:
checkAge("25"); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.

// Function to reverse a string
// Takes: A string as an input
// Returns: Reversed string
// Function signature:
function reverseString(str) {
  // Write your code here to reverse and return the string.

  // Declaring and intializing the variables
  let reversedString = "";
  // Traverse and store each characters to the variable
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.

// Function to find the largest number in an array;
// Takes: An integer array
// Returns: Largest number
// Function signature:
function findLargestNumber(numbers) {
  // Write your code here to find and return the largest number in the array.

  //Declaring and intializing variables
  let largestNumber = 0;
  let notNumber = false;
  // Check if the numbers array is empty
  if (numbers.length <= 0) {
    console.log("Array is empty");
    return;
  }
  // Check if the array contain anything other than integers
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      notNumber = true;
      break;
    }
  }
  // Condition to check for any other value other than integers
  if (notNumber) {
    console.log("Not an integer array");
    return;
  }
  // FUnction to find the largest number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.

// Object creation with properties like methods such as add, subtract, display and reset.
// Takes: None
// Returns: None
// Displays: The count

// Object definition:
const counter = {
  count: 0,
  add: function () {
    this.count++;
  },
  subtract: function () {
    if (this.count == 0) {
      this.count = 0;
    } else {
      this.count--;
    }
  },
  display: function () {
    console.log(this.count);
  },
  reset: function () {
    this.count = 0;
  },
};

// Example usage:
counter.add();
counter.add();
counter.display(); // Output: 2
counter.subtract();
counter.display(); // Output: 1
counter.reset();
counter.display(); // Output: 0
