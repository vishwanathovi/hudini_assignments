// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

// Function signature:
//SumOfOdd function returns the sum of all odd numbers greater than 10 and less than 30
//Argument: None
//Returns: Number
function sumOfOdd(){
    sum = 0
    for(let i = 11; i < 30; i++){
        if(i % 2 != 0){
            sum += i
        }
    }
    return sum
}
//Input
console.log("sum of odd numbers greater than 10 and less than 30: ")
console.log(sumOfOdd())

console.log()

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
// Function signature:

//mulTable function takes a number between 1 - 20 and prints the multiplication table of the same.
//Argument: Integer (1 - 20)
//Returns: None
//Side Effects: Prints the Multiplication table in the format `nx1=n`
function mulTable(n){
    if(typeof(n) != "number"){
        console.log("enter a number")
        return
    }
    if(n <= 0 || n > 20){
        console.log("Enter a valid range: 1 - 20")
        return
    }
    for(let i = 1; i <= 10; i++){
        console.log(n + "*" + i + "=" + (i*n))
    }
}
//Input
console.log("multiplication table")
mulTable(2)
console.log()
mulTable()
console.log()
mulTable(30)
console.log()
mulTable(-10)
console.log()

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// Function signature:

//PositiveArray function takes an array and return all the positive elements in the array as an array.
//Argument: Array(Numbers)
//Returns: Array(Numbers)
function PositiveArray(arr){
    for(let i of arr){
        if(typeof(i) != "number"){
            return "all the elements in the array should be a number";
        }
    }
    return arr.filter((n) => { return n >= 0})
}
//input
console.log("array containing only the positive numbers")
console.log(PositiveArray([-10, 20, -30, 40]) + "\n")
console.log(PositiveArray([-10, 20, 40, "0"]) + "\n")

/*  
function PositiveArray(arr){
    const newArr = []
    for(let i of arr){
        if(i >= 0){
            newArr.push(i)
        }
    }
    return newArr
}
*/

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
// Function signature:

//findLargestNumber function takes array and return the greatest value in the array
//Argument: Array(Numbers)
//Returns: Number
function findLargestNumber(numbers) {
    let gtr_num = Number.NEGATIVE_INFINITY;
    for(let i of numbers){
        if(typeof(i) != "number"){
            return "all the elements in the array should be a number"
        }
        if(i > gtr_num){
            gtr_num = i
        }
    }
    return gtr_num
}
//input
console.log("Find the Largest Element in the array")
console.log(findLargestNumber([-10, 20, -30, 40]) + "\n");
console.log(findLargestNumber([-10, 20, "30", 40]) + "\n");


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// Function signature:

//buzzing function takes number and prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
//Argument: Integer(1 - any)
//Returns: Number
function buzzing(n){
    if(typeof(n) != "number" || isNaN(n) ||!Number.isInteger(n)){
        console.log("enter a number")
        return
    }
    if(n <= 0){
        console.log("enter a number greater than 0")
    }

    for(let i = 1; i < n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }
        else if(i % 3 === 0){
            console.log("Fizz")
        }
        else if(i % 5 === 0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
//Input
console.log("FizzBuzzer")
buzzing(20)
buzzing(-10)
buzzing("20")