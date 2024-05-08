// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
//initialize a variable odd
//loop through odd numbers 
//add each odd number to odd variable
//return the odd variables of odd number.

function odd()
{
    let odd=0;
    for(let i=11; i<30; i+=2)
    {
        odd=odd+i;
    }
    return odd;
}
console.log(odd());

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format 
// `2x1=2`
//define a function
//check if input is between 1 to 20
//loop through numbers 1 to 20
//print multiplication table
//print a message if input is exceeded the limit

function multipy(n)
{
    if(n>=1 && n<=20){
    let odd=0;
    for(let i=1; i<11; i++)
    {
        console.log(n + " * " + i + " = " + n * i);
    }
    }
     else{
        console.log("Please try number b/w 1-20")
    }
}
multipy(5);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers.
//find the length of array
//pass the value to the function
//define a function
//initialize an array
//iterate through each element
//check if current number is positive
//if positive add to array
//return the array

function positive(array,N) { 
    let i; 
    let number=array[0]; 
    for (i=0; i<N; i++) { 
        if (array[i]>0) 
            console.log(array[i]);
    } 
  
}
const array=[10, 20, 30, -40, 50];
const N=array.length
positive(array,N);

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
//define a function
//initialize  a variable 'max'
//iterate through the elements
//check if current element is greater than current maximum number
//update the 'max' value

function findLargestNumber(array) { 
    let i; 
    let max=array[0]; 
    for (i=0; i<array.length; i++) { 
        if (array[i]>max) 
            max=array[i]; 
    } 
    return max;
}
console.log(findLargestNumber([10, 20, 30, 40, 50]));


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the
//    multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(n){
    let result = [];
    for(let i=1; i<=n; i++){
        if(i%3==0 && i%5==0){
            result.push("FizzBuzz");
        }
        else if(i%3==0){
            result.push("Fizz");
        }
        else if(i%5==0){
            result.push("Buzz");
        }
        else{
            result.push(i.toString());
        }
    }
    return result;
}
let n=20;
let result=fizzBuzz(n);
console.log(result.join(' '));