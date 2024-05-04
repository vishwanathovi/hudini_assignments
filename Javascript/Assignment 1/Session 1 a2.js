// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function odd()
{
    let initial=0;
    for (let i=11;i<30;i++)
    {
        if(i%2!=0)
        {
            initial=initial+i;
        }
    }
    return initial;
}
console.log(odd());
// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function table(number)
{
    for (let i=1;i<=number;i++)
    {
        console.log(number+'x'+i+'='+i*number);
    }
}
let userValue=prompt("Enter a value from 1-20: ");
table(userValue);
// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positiveArray(numbers)
{
    let size=numbers.length;
    let arrays=[]
    for(let i=0;i<size;i++)
    {
        if(numbers[i]>0)
        {
            arrays.push(numbers[i])
        }
    }
    console.log(arrays);
}
// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maxNumber(array1)
{
    let size=array1.length;
    let max=array1[0];
    for(let i=1;i<size;i++)
    {
        if(array1[i]>max)
        {
            max=array1[i];
        }
    }
    return max;
}
// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function printNumber(number1)
{
    for(let i=0;i<number1;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log("Fizzbuzz");
        }
        else if(i%3==0)
        {
            console.log('Fizz');
        }
        else if(i%5==0)
        {
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}