// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
//define the function
//initialize the variable 'sum'
//iterate through the loop
//find the sum
//return the average value

function calculateAverage(numbers) {
    let sum=0;
    for(let i=0; i<numbers.length; i++) {
    sum += numbers[i];
    }
    return sum/numbers.length; 
}
// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
// define the funtion
// check the age value
// print message according to the age value 

function checkAge(age) {
    if(age>105){
        console.log('Exceeding the age limit')
    }
    if(age<0){
        console.log('Negative age value')
    }

    if(age<=18)
    {
        console.log('Minor');
    } else if(age>=19 && age<=30)
        {
            console.log('A Young Adult')
        } else {
            console.log('An Adult')
        }
}
// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
// define a variable
// intialize a variable
// iterate through the loop
// store value to the variable
// return the variable

function reverseString(str) {
    let strReverse=''
    for (let i=str.length-1; i>=0; i--) { 
        strReverse+=str[i];  
    } 
    return strReverse; 
    }    
// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
// initialize the array
// iterate through the loop
// find the largest element by compare 2 variables
// store largest in the 'max' variable

function findLargestNumber(array) { 
    let max=array[0]; 
    for (let i=0; i<array.length; i++) { 
        if (array[i]>max) 
            max=array[i]; 
    } 
    return max;
}
// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    number:0,
    add:function()
    {
        this.number++
    },
    display:function()
    {
        console.log(this.number);
    },
    subtract:function()
    {
        this.number=this.number-1;
    },
    reset:function()
        {
            this.number=0;
        }
};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0