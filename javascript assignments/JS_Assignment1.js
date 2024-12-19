// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

function sumodd(){
    //initialize sum to 0
    let sum=0;
    //start the loop to find out the odd number and add it
    for(let i=10;i<=30;i++){
        if(i%2!==0){
            sum+=i;
        }
    }
    return sum
}
console.log(sumodd());


// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

function Multi(number) {
    //check if the number is between 1 and 20
    if (number < 1 || number > 20) {
        console.log("Number must be between 1 and 20.");
        return;
    }
    //loop to find out product
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

Multi(5);




// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positive(arr){
    //initilize an empty array to store positive elements
    let newarr=[];
    for(let i=0;i<=arr.length;i++){
        //checking the number is positive or not
        if(arr[i]>0){
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(positive([6,4,-7,-8]));



// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    //assign the frst element in the array as max number
    let maxi=numbers[0];
    for(let i=0;i<numbers.length;i++){
        //check if the current element greater then max number. if then assign it as max number
        if(numbers[i]>maxi){
            maxi=numbers[i]
        }
    }
    return maxi;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50




// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function fizzbuzz(n){
    //check it n is a negative number..
    if(n<0){
        console.log("enter positive integer");
    }
    for(let i=0;i<=n;i++){
        //checking if the number is multiple of 3 
        if(i%3==0){
            console.log("fizz");
        }
        //checking if the number is multiple of 5
        else if(i%5==0){
            console.log("buzz");

        }
        //checking if the number is multiple of 3 and 5
        else if(i%3==0&&i%5==0){
            console.log("fizzbuzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzbuzz(10);