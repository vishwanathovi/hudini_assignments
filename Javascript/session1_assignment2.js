// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
     //initialize a variable sum
     //loop through odd numbers 
     //add each odd number to sum
     //return the sum of odd numbers

function calculateoddsum(){
    let sum=0;
    for(i=11;i<30;i+=2){
        sum = sum+i;
    }
    return sum;
}
console.log(calculateoddsum())

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
   //define a function
   //check if inpit is between 1 to 10
   //loop through numbers 1 to 10
   //print multiplication table
   //print a message if input is exceeded

function multiplicationTable(number){
    if(number>1 && number<20){
        for(let i=1;i<=10;i++){
            console.log(` ${number}X${i} = ${number*i}`)
        }
    }
    else{
        console.log("limit exceeded")
    }
}
multiplicationTable(8)

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
   //initialize an empty array
   //iterate through each element
   //check if current number is positive
   //if positive add to positiveNumbers array
   //return the array of positiveNumbers

function positiveArray(numbers)
{
let positiveNumbers = [];

for(i=0;i<numbers.length;i++){
        if(numbers[i]>0){
            positiveNumbers.push(numbers[i]);
            
        }
    }
    return positiveNumbers;
    
}
console.log (positiveArray([5,-10,-15,20,25,30]))

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
    //define a function
    //initialize  a variable
    //iterate through the elements
    //check if current element is greater than current maximum number
    //if it is update the maximum number

function maxNumber(numbers){
    let maxNumber = numbers[0];
    for(i=1;i<numbers.length;i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
console.log (maxNumber([3,4,5,6,88]))


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".function numbers(n) {
    //define a function
    //iterate from 1 to n
    //initialize an empty string
    //check if current number is divisible by 3
    //if it is print Fizz
    //check if current number is divisible by 5
    //if it is print Buzz
    //if it is divisble by both print fizzbuzz


function numbers(n) {
    for (let i = 1; i <= n; i++) {
      let result = '';
      if (i % 3 === 0) {
          result += 'Fizz';}
      if (i % 5 === 0) {
          result += 'Buzz';}
      console.log(result || i);
    }
  }
  
  numbers(30);