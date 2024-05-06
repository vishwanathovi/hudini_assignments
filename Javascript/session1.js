// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function odd(){
    let sum=0;
    for(let i = 11;i < 30;i += 2){
        sum +=i;
    }
    console.log("The sum of numbers between 10 and 30 is " + sum);
}
odd();


//Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplication(num) {
    if (num < 1 || num > 20) {
        console.log("Please enter a number between 1 and 20.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

rl.question("Enter a number between 1 and 20: ", (userInput) => {
    const num = parseInt(userInput);

    if (!isNaN(num) && num >= 1 && num <= 20) {
        
        multiplication(num);
    } else {
        console.log("Invalid input. Please enter a number between 1 and 20.");
    }

    rl.close();
});

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
    const numbers = input.split(',').map(Number);
    const positiveNumbers = numbers.filter(number => number > 0);
    console.log("Positive numbers:", positiveNumbers);
    rl.close();
});


//Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
    const numbers = input.split(',').map(Number);
    const countMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        countMap.set(number, (countMap.get(number) || 0) + 1);
    }

    let maxOccurrence = 0;
    let maxNumber;

    for (let [number, count] of countMap) {
        if (count > maxOccurrence) {
            maxOccurrence = count;
            maxNumber = number;
        }
    }

    console.log("The number with the maximum occurrence is:", maxNumber, "which occurs", maxOccurrence, "times.");

    rl.close();
});


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
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

rl.question("Enter a number: ", (input) => {
    const n = parseInt(input);
    if (!isNaN(n) && n > 0) {
        fizzBuzz(n);
    } else {
        console.log("Invalid input. Please enter a positive integer.");
    }
    rl.close();
});

