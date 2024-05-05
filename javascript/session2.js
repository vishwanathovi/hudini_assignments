// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function odd() {
    let sum =0
    for (let i = 11 ; i <=30; i = i+2){
        sum = sum + i
    }
    console.log(sum)
 
 }
 odd()

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplication() {
    let num =5
    for (let i = 1 ; i <=10; i = i+1){
       console.log(num + " * " + i + " = " + i*num)
    }
 }
 multiplication()

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function returnPositive(numbers) {
   let positiveNumbers =[];
   for (let i = 0 ; i <= numbers.length; i++){
       if (numbers[i] > 0){
           positiveNumbers.push(numbers[i]);
       }
   }
   return positiveNumbers

}
console.log(returnPositive([1, -20, 10, -4, 5]));


// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maxNumber(numbers) {
    let maxCount =0;
    let maxNumber =numbers[0];
    for (let i = 0 ; i < numbers.length; i++){
       let count =0;
       for (let j = 0 ; j < numbers.length; j++){
 
        if (numbers[i] == numbers[j]){
          count = count +1;
        }
      }
       if(count> maxCount){
          maxNumber= numbers[i]
       }
    }
    console.log("The number with maximum occurrence is: " + maxNumber);
 
 }
 maxNumber([1,3,1,2,3,1,2,1,1,3,3,4,6,2,2,3,1]);
 
 
 
 

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function threenfive(number) {
    for (let i = 1 ; i < number; i++){
       if (i%3==0 && i%5==0){
          console.log("fizzbuzz");
       }
       else if (i%3==0){
          console.log("fizz");
       }
       else if (i%5==0){
          console.log("buzz");
       }
       else {
          console.log(i);
       }  
    }
 }
 threenfive(20);
 
 
 