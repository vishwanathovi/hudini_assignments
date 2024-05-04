// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

// Function to calculate the sum of odd numbers greater than 10 and less than 30
// Takes input: None
// Returns: None
// Displays: Sum of odd numbers
// Function signature:
function oddSum() {
  // Declare and intialize variable
  let sum = 0;
  // Calculate sum of idd numbers
  for (let i = 11; i < 30; i += 2) {
    sum += i;
  }
  console.log("SUm of odd numbers is ", sum);
  console.log();
}
oddSum();

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

// Function to display the multiplication table when a number give between 1-20
// Takes input: An integer between 1-20
// Returns: None
// Displays: Multiplication table of that number
// Function signature:
function product(number) {
  // Check whether the value is integer
  if (isNaN(number)) {
    console.log("Given value is not a number");
    return;
  }
  // Check number is in rand and display the multiplication table
  console.log("Multiplication table of ", number);
  if (number >= 1 && number <= 20) {
    for (let i = 1; i <= 10; i++) {
      console.log(i + " * " + number + " = " + i * number);
    }
  } else {
    console.log("Give a number between 1-20");
  }
  console.log();
}
product(5);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Function to return positive number array
// Takes input: An array of numbers
// Returns: None
// Displays: Positive numbers array
// Function signature:
function positiveNumbers(arr) {
  // Declare and initialize variables
  let positiveNumbers = [];
  // Check if the array is empty
  if (arr.length === 0) {
    console.log("Array is empty");
    console.log();
    return;
  }
  // Check whether the array contain only numbers
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      console.log("Non-integer value in the array");
      console.log();
      return;
    }
  }
  // Traversing and assigning positive number to positiveNumbers array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }
  }
  console.log("Positive number array", positiveNumbers);
  console.log();
}
arrayNumbers = [1, 2, 3, 4, -1, -2];
positiveNumbers(arrayNumbers);

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

// Function to find the largest number in the array
// Returns: None
// Displays: Largest number
// Function signature:
function maximum(numbers) {
  // Check if the input array is empty
  if (numbers.length === 0) {
    console.log("Input array is empty");
    console.log();
    return;
  }
  // Initialize largestNumber with the first element of the array
  let largestNumber = numbers[0];
  // Find the maximum number in the array
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  console.log("Largest number:", largestNumber);
  console.log();
}

let numbers = [5, 4, 2, 8, 1, 9];
maximum(numbers);

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

// Function to prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// Returns: None
// Displays: Number if not multiple of 3 or 5, Fizz, if multpile of 3, Buzz, if multiple of 5, and if multiple of both 3 & 5, prints FizzBuZZ
// Function signature:
function fizzBuzz(number) {
  // Check whether the number is an integer and positive
  if (!Number.isInteger(number) || number <= 0) {
    console.log("Number is not an integer");
    return;
  }
  // Check for the multiples and print value accordingly
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
