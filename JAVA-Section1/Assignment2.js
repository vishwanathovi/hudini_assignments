// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

function sumOfOddNumbers(start, end) {
    // Initialize sum variable
    let sum = 0;
   
    // Loop through numbers from start to end (exclusive)
    for (let i = start + 1; i < end; i += 2) {
      // Check if number is odd
      if (i % 2 !== 0) {
        // Add odd number to the sum
        sum += i;
      }
    }
   
    // Print the sum
    console.log("Sum of odd numbers:", sum);
   
    // Alternatively, return the sum for further use
    // return sum;
  }
   
  // Call the function with desired start and end values
  sumOfOddNumbers(10, 30);



// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

function printMultiplicationTable(number) {
    // Input validation (optional)
    if (number < 1 || number > 20) {
      console.error("Invalid input: Number must be between 1 and 20");
      return;
    }
   
    // Loop through multipliers from 1 to 10
    for (let i = 1; i <= 10; i++) {
      // Calculate product
      const product = number * i;
   
      // Print the multiplication table entry
      console.log(`${number} x ${i} = ${product}`);
    }
  }
   
  // Example usage
  const desiredNumber = 7;
  printMultiplicationTable(desiredNumber);


// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function filterPositiveNumbers(numberArray) {
    // Create a new array to store positive numbers
    const positiveNumbers = [];
   
    // Loop through each number in the original array
    for (let i = 0; i < numberArray.length; i++) {
      const currentNumber = numberArray[i]; // Get the current number you're looking at
   
    // Check if the current number is greater than 0 (positive)
      if (currentNumber > 0) {
    // If it's positive, add it to the new "positiveNumbers" array (put it in the box)
        positiveNumbers.push(currentNumber);
      }
    }
   
    // Once done looping, return the new array containing only positive numbers
    return positiveNumbers;
  }
   
  // Example usage
  const numbers = [-5, 2, 0, 8, -1];
  const positiveNumbers = filterPositiveNumbers(numbers);
  console.log(positiveNumbers); // Output: [2, 8]


// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

function findMaximumNumber(arr) {
    // Initialize a variable to store the maximum number (assume first element)
    let maxNumber = arr[0];
   
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      const currentNumber = arr[i];
   
      // Compare current number with the current maximum
      if (currentNumber > maxNumber) {
        // Update maximum if current number is greater
        maxNumber = currentNumber;
      }
    }
   
    // Print the maximum number
    console.log("Maximum number:", maxNumber);
  }
   
  // Example usage
  const numbers = [5, 10, 2, 18, 1];
  findMaximumNumber(numbers); // Output: Maximum number: 18


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(n) {
    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
      // Check for divisibility by 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print "FizzBuzz" for multiples of both
      } else if (i % 3 === 0) {
        console.log("Fizz"); // Print "Fizz" for multiples of 3
      } else if (i % 5 === 0) {
        console.log("Buzz"); // Print "Buzz" for multiples of 5
      } else {
        console.log(i); // Print the number for non-multiples
      }
    }
  }
   
  // Example usage
  const upperLimit = 15;
  fizzBuzz(upperLimit);