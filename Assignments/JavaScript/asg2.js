// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

//calculateSumandAverage() is a function that prints the sum of odd numbers greater than 10 and less than 10.The result will be the sum of those numbers 
function calculatSumandAverage(){
    //Initializing 0 to a sum variable
    let sum=0
    //takes the numbers from 11 to 29
    for (i=11;i<30;i++){
        //checks if any of the number is an odd 
        if(i%2!=0){
            //if yes it takes the sum of those numbers and assigns to sum variable
                sum+=i
            }
            
        
        }
        //Finally returns the whole sum
        return sum
    }
console.log(calculatSumandAverage())


// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

//multiplication function takes the number and multiples with each iteration in the loop from 1 to 10
function multiplication(number){
    //Initializing zero to result variable
    let result=0
    //Takes numbers from 1 to 10 and multiplies it with the number as the input
    for(i=1;i<=10;i++){
        //The result of the multiplication is stored in the result variable
        result=number*i
        console.log(`${number} X ${i} = ${result}`);
    }

    
}
multiplication(3)

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

//array() is a function that takes arr as an array of numbers consisting of positive and negative numbers and only returns positive numbers 
function array(arr){
    //Initializing an empty array to the array_positive variable
    let array_positive=[]
    for(i=0;i<arr.length;i++){
        //checks if the number in an array is positive
        if(arr[i]>0){
            //if yes the number is then pushed into the array_positive variable
            array_positive.push(arr[i])
        }
    }
    console.log(array_positive); 
}
array([1,-2,-3,4])

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

//max() fn takes the numbers in an array and returns the largest number
function max(numbers) {
    // Write your code here to find and return the largest number in the array.
    
    //Initializing 0 to largest variable
    largest=0
    //for loop that traveses each numbers till the length of the array
    for(i=0;i<numbers.length;i++){
        //Checks if the number in an array is greater than largest 
        if(largest<numbers[i]){
            largest=numbers[i]
        }
        //Loop continues till you find the largest number in an array
        
        
    }
    console.log(largest)
}
max([1,2,10,4,5])


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

//FizzBuzz() fn takes a number as an input and checks if the number is mulitples of 3, 5 or both
function FizzBuzz(n){
    //if the number are both multiples of 3 and 5 then print FizzBuzz
        if(n%3==0 && n%5==0){
            console.log("FizzBuzz");
        }
        //else if the number is multiple of 5 then print Buzz
        else if(n%5==0){
            console.log("Buzz");
        }
        //else if the number is multiple of 3 then print Fizz
        else if(n%3==0){
            console.log("Fizz");
        }
        else{
            console.log("Nothing to print");
        }
    }

FizzBuzz(10)