// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    // Declared a variable to store the length of the given array
    let size=numbers.length;
    // Declared a variable which is going to be used to store the sum of the values in the array
    let total=0;
    // Used a for loop to calculate the sum of the values
    for (let i=0;i<size;i++)
    {
        // Adding each values separately
        total=total+numbers[i];
    }
    // Calculating the average by dividing sum of the values with the length of the array
    let average=total/size;
    // Returning the average 
    return average;
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    // Checking the age category for minor which should be strictly less than 18
    if(age<18)
    {
        console.log('minor');
    }
    // Checking the age category for Young adult which need to lesser than or equal to 30
    else if(age<=30)
    {
        console.log('young adult');
    }
    // Checking the age category for adult which can be more than 30
    else
    {
        console.log('adult');
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    let stringSize=str.length;
    let str1="";
    for (let i=stringSize-1;i>=0;i--)
    {
        str1+=(str[i]);
    }
    return str1;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    let size=numbers.length;
    let max=numbers[0];
    for(let i=1;i<size;i++)
    {
        if(numbers[i]>max)
        {
            max=numbers[i];
        }
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
        this.number = this.number+1;
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

