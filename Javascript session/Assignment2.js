// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function SumOdd(){
    let sum=0; //Initailize the sum to zero
for(let i = 10; i < 30; i++) //iterate through the numbers starrting from 10 to less than 30
{
    if(i%10==1) // Getting ther odd numbers
    {
        sum+=i;
    }
}
return sum;
}
console.log(SumOdd());

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
const prompt = require("prompt-sync")();
function MultiTable(number){
    for(i=1;i<=10;i++)
    {
        t = number*i;
        console.log(number + "*" + i + "=", t ); //Multiplication Table format
    }

}
const userInput = prompt("Enter the number:\n");
MultiTable(userInput);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positive(numbers){
    let poNum = [];
    for(let i = 0; i< numbers.length-1;i++)
    {

    if(numbers[i]>0) //condition to check only the positive numbers
    {
        poNum.push(numbers[i]); //storing to the array of positive numbers
    }
}

    return poNum;
}

console.log(positive([6,7,8,-1,-3]));

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

function sumofarr(numbers){
    let max =  numbers[0]; //Initailly store the first element as max
    for(let i = 1; i<numbers.length-1; i++) //Iterate through the elements 
        {
                if (numbers[i]>max) //compare to initial max
                    {
                        max = numbers[i]; //set new max if neccessay
                    }
            }
            return max; //return max
                
        }

console.log(sumofarr([6,7,8,-1,-3]));

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function printnum(number){
    for(let i = 1; i<=number;i++){
        if(i%3==0){ //check if the number is multiple of 3
            if(i%5==0) // check if the number is also a multiple of 5
                {
            console.log("FizzBuzz")
                }
                else{
                console.log("Fizz")
                }


        }
        else if(i%5==0){ //cehck if the number is only a multiple of 5
            console.log("Buzz")

        }
        else 
        {
        console.log(i) //print the numbers replacing numbers of multiple 5 and 3 with fizzbuzz,
        // multiple of 5 with buzz, multiple of 3 with Fizz

        }

    }

}


const Inputn = prompt("Enter the number:\n");
printnum(Inputn);