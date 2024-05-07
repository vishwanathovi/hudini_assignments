// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

function oddSumcalc(){
    // read the numbers from 10 to 30
    // Sort the numbers between 10 and 30
    // Print the sum
    let sum =0;
    for(let i = 10; i < 30;i++){
        if(i % 2  == 1){
            sum= sum+i;
        }
    
    }
    return sum;
}
console.log(oddSumcalc());






// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

function multiplicationTable(n, i = 1) {
    if (i === 11) {
        return;
    }
    console.log(n + " * " + i + " = " + n * i);
    i++;
    multiplicationTable(n, i);
}

let Num = 3;
multiplicationTable(Num);



// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers.
function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

const numbers = [-1, 2, -3, 4, -5, 6];
const positive = getPositiveNumbers(numbers);
console.log(positive);


// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maximumNumber(array){
    if(array.length == 0){
        console.log("The array is empty!");
    }
    let max = array[0];
    for(let n=1;n<array.length;n++){
        if(max < array[n]){
            max = array[n];
        }
    }
    console.log("Maximum number:",max)
  
}
    const number = [12, 23, 635, 3, 46, 2];
    maximumNumber(number);

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, 
// print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers that are multiples of both three and five, print "FizzBuzz".
function FizzBuzz(n){
    let result=[];
    for(k=1;k<=n;++k){
        if(k % 3 == 0 && k % 5 == 0){
            result.push("FizzBuzz");
        }
        else if(k % 3 == 0){
            result.push("Fizz")
        }
        else if(k % 5 == 0 ){
            result.push("Buzz")
        }
        else{
            result.push(k.toString());
        }
    }
return result;
}
let n=5;
result = FizzBuzz(n);
console.log(result.join(' '));