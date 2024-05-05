// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function sumOfOddNumbers() {
    // Initialize a variable named sum to store the sum of odd numbers.
    let sum=0;
    // Iterate through the odd numbers between 11 and 29.
    for(let i = 11; i <30; i+=2) {
        // Add the current odd number to the sum.
        sum += i;
    }
    // Return the sum of odd numbers.
    return sum;
}
// Function call
console.log(sumOfOddNumbers());
console.log('----------------------------------------------')

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplicationTable(number) {
    // Iterate through the numbers from 1 to 20.
    for(let i = 1; i<=20; i++) {
        // Print the multiplication table in the required format.
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
// Function call.
multiplicationTable(5);
console.log('----------------------------------------------')

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positiveNumbers(numbers) {
    // Initialize an empty array.
    let posNumbers = [];
    // Loop through the elememts in the array.
    for(let i = 0; i < numbers.length; i++) {
        // Check if the current element is positive.
        if(numbers[i] > 0) {
            // If positive, add it to the array.
            posNumbers.push(numbers[i]);
        }
    }
    // Return the array containing positive numbers.
    return posNumbers;
}

// Example usage
console.log(positiveNumbers([-1, 0, 1, 5, 2, -5]));
console.log('----------------------------------------------');

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maximumNumber(num) {
    // Initialize a variable to store the maximim number assuming the first number is the maximum.
    let max = num[0];
    // Loop through the numbers in the array starting from the second.
    for(let i=1; i<num.length; i++) {
        // Compare the current number with the maximum number found so far.
        if(num[i] > max) {
            // Store the maximum number.
            max = num[i];
        }
    }
    // Return the maximum number.
    return max;
}
// Example usage
console.log(maximumNumber([10, 20, 30, 40, 50]));
console.log('----------------------------------------------');

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function printNumbers(n) {
    // Iterate through numbers from 1 to n.
    for(let i = 1; i<=n; i++) {
        // Check if the number is divisible by both 3 and 5.
        if(i % 3 === 0 && i % 5 === 0) {
            // Print "Fizzbuzz" if divisible by both 3 and 5.
            console.log('FizzBuzz');
        }
        // Check if the number is divisible by 3 only.
        else if(i % 3 === 0) {
            // Print "Fizz" if divisible by 3 only.
            console.log('Fizz');
        }
        // Check if the number is divisible by 5 only.
        else if(i % 5 === 0) {
            // Print "Buzz" if divisible by 5 only.
         console.log('Buzz');
        }
        else {
            // Otherwise print the number itself.
            console.log(i);
        }
    }
}
// Example usage
printNumbers(15);