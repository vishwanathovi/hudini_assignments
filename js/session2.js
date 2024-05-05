// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

//Function declaration
function oddSum(){
    //initialize sum
    let sum=0;
    //for loop for 10-30
    for(let i=10;i<=30;i++){
        //condition for odd number
        if(i%2!=0){
            sum+=i
        }
    }
    return sum
}
//function call
console.log(oddSum());

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

//Function declaration
function multiplication(n){
    let val;
    //looping from 1 to 20
    for(let i=1;i<=20;i++){
        val=i*n;
        //printing multiplication table
        console.log(i+" x " +n+" = "+ val);
    }
}
//function call
multiplication(2);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

//function declaration
function positiveArray(arr){
    //declaring a temperary array
    let temp=[];
    let j=0;
    //looping the array till last element
    for(let i=0;i<arr.length;i++){
        //condition checking for positive number
        if(arr[i]>0){
            //storing element in temp array
            temp[j]=arr[i];
            j++;
        }
    }
    return temp;
}
//function call
console.log(positiveArray([10,-20,30,2,-23,49]));

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

//function declaration
function maxArray(arr){
    let temp=[];
    let count=0;
    for(let i=0;i<arr.length;i++){
        temp=arr.sort()
        temp=temp.reverse()
}
    console.log(temp[0])
}
maxArray([20,12,13,15,10])

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

//function declaration
function fizzBuzz(n){
    //looping till the number
    for(let i=1;i<=n;i++){
        //check whether number is multiple of 3 and 5
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        //check whether number is multiple of 3
        else if(i%3==0){
            console.log("Fizz")
        }
        //check whether number is multiple of 5
        else if(i%5==0){
            console.log("Buzz")
        }
        //print if number is not multiple of 3,5, or both
        else{
            //
            console.log(i)
        }
    }
}
//function call
fizzBuzz(15);