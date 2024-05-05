// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30.
//Print the sum at the end.

function sumOdd(){
//intialize sum=0
//for loop with if conditon
let sum=0;
 for(let i=10;i<30;i++){
    if(i%2==1){
        sum=sum+i;
    }
 }
 console.log(sum);
}
sumOdd();

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same.
// Each entry should be in the format `2x1=2`.

function multiTbl(a){
    let num=a;
    if (num<=20){
    for(let i=1;i<=10;i++){
        console.log(num,"*",i,"=",num*i);
    }
    }
}
multiTbl(3);

// Question 3: Create a function that receives an array of numbers 
// and returns an array containing only the positive numbers

function posNum(array) {
    // Write your code here to find and return the largest number in the array.
    for(i=0;i<=array.length;i++){
        if (array[i]>0){
            console.log(array[i]);
        }
    }
}
console.log(posNum([10, -20, 30, 40, 50]));

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

function findMax(arr){
    if(arr.length===0){
        console.log("Array is empty");
        return;
    }
    let maxNum=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }
    console.log(maxNum);
}
let array=[3,7,2,9,2,2,5];
findMax(array)

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, 
// print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
//For numbers that are multiples of both three and five, print "FizzBuzz".

function FizzBuzz(n){
 for(let i=1; i<=n;i++){
    //multiple of 3 and 5
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    //multiple of 3
    else if(i%3==0){
        console.log("Fizz");
    }
    //mutliple of 5
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
 }
}
FizzBuzz(15);