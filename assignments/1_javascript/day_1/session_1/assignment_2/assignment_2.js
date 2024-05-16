// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

// Functon oddSum prints the sum of odd numbers greater than 10 and less than 30.
// Input: none
// Returns: none
// Action: Prints the odd sum

function oddSum() {
    let sum = 0
    for(let i = 11; i < 30; i++) {
        if(i % 2 != 0)
            sum += i
    }
    console.log(sum)
}

oddSum()

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

// Function multiply takes a number between 1 and 20 and prints it's multiplication table upto 10 on multiple 
//lines.

// Input: Number
// Returns: none
// Action: prints multiplication table

function multiply(num) {
    if (num < 1 || num > 20) {
        console.log('Please enter a number between 1 and 20!')
    }

    for (let i = 1; i <= 10; i++) {
        console.log(num + 'x' + i + '=' + num*i)
    }
}

multiply(11)

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Functon arrayPos takes an array of numbers and returns an array which contains only the positive numbers in 
// the original array.

// Input: [Number]
// Returns: [Number]

let posArray = []
function arrayPos(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            posArray.push(nums[i])
        }
    }
    return posArray
}

console.log(arrayPos([-25,10,-3,4,-15,70]))

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

// Function findLargestNumber takes an array of numbers and prints the maximum number in it.
// Takes: [number]
// Returns: none
// Action: prints the maximum in the array

function findLargestNumber(numbers) {

    let largest = 0

    for(let i = 0; i<numbers.length; i++) {
        if(numbers[i] > largest)
            largest = numbers[i]
    }

    console.log(largest)

}

findLargestNumber([10, 20, 30, 40, 50])

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

// Function fizzBuzz takes a number between 1 and n and prints the numbers in that range. It prints Fizz for 
// multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of 3 and 5.
// Input: Number
// Returns: none
// Action: prints n, Fizz, Buzz, or FizzBuzz for the range of numbers.

function fizzBuzz(n) {
    if (n < 1) {
        console.log('Please enter a number between 1 and n!')
    }

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 !=0) {
            console.log('Fizz')
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log('Buzz')
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz(20)