// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function SumOfOddNumbers() {
    let sum=0;
    for(let i = 11; i <30; i+=2) {
        sum += i;
    }
    return sum;
}
console.log(SumOfOddNumbers());

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function Multiplication(number) {
    
    for(let i = 1; i<=20; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
}
console.log(Multiplication(5));

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function PositiveNumbers(numbers) {
    let positiveNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}
console.log(PositiveNumbers([-1, 0, 1, 5, 2, -5]));

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function MaximumNumber(num) {
    let i;
    let max = num[0];
    for(i=1; i<num.length; i++) {
        if(num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
console.log(MaximumNumber([10, 20, 30, 40, 50]));

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function PrintNumbers(num) {
    for(let i = 1; i<=num; i++) {
        if(i % 3 === 0) {
            console.log('Fizz');
        }
        else if(i % 5 === 0) {
            console.log('Buzz');
        }
        else if(i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
        }
        else {
            console.log(i);
        }
    }
}
PrintNumbers(15);