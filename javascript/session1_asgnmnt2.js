// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. 
//Print the sum at the end.

// intialise summ as 0 
// for loop to traverse btwn 11 and 30
// equation to find the odd number
// calculate the summ
function sumofoddnbrs() {
    let sum=0;
    for ( let i=11;i<30;i++){
        if(i% 2 !== 0){
            sum=sum+i;
        }
        }
return sum;
    }
let result= sumofoddnbrs();
console.log ('The sum of odd numbers between 10 and 30 is:', result);


// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the
// same. Each entry should be in the format `2x1=2`
// input the number only btwn 1 and 20
// print multiplication table using for loop 
function multiplicationTable(number) {
    if (number >= 1 && number <= 20) {
        for (let i = 1; i <= 10; i++) {
            let result = number * i;
            console.log(number + 'x' + i + '=' + result);
        }
    } else {
        console.log("Please enter a number between 1 and 20.");
    }
}
multiplicationTable(5)  
          

// Question 3: Create a function that receives an array of numbers and returns an array containing only the 
//positive numbers
//for loop to traverse through the array
// checking the number whether greater than 0
// print positive numbers from array

function positivenumbers(numbers){
   let positivenumberarray=[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>=0){
            positivenumberarray.push(numbers[i])
        }
  }
  return positivenumberarray;
}
console.log(positivenumbers([9,-72,45,2,0,-19]))

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
    // initilize max as 0
    // travers through the array to find the max and store it in max and print
function findLargestNumber(numbers) {
    let max= numbers[0];
    for (i = 0; i < numbers.length; i++) { 
        if (numbers[i] > max) 
            max = numbers[i]; 
    }  return max; 
}
console.log(findLargestNumber([1, 25, 13, 44, 5]));

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz"
// instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both 
//three and five, print "FizzBuzz".
//for loop to get 1 to n numbers
// check divisibilty by 3 and 5
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 ==0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);
