// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    let sum = 0; //initialize the the variable suma nd set it to zero
    for(let i = 0;i<=numbers.length;i++) // use a for loop to iterate through the array of numbers
    {
        sum+=numbers[i]; //add each number to the sum variable
    }
    return sum/numbers.length; //return the average using the average formula

    // Write your code here to calculate and return the average of the array elements.
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    if(typeof(age)=="number"){ //Check if the entered inout is a number
        if (age>=150 || age<0){
            console.log("Enter a valid number"); //Invalid numbers like 150+ and below zero is not considered
        }
    else if (age<18)
    {
    console.log("Minor"); //Below 18 of age are minor
    }
    else if((age>18 && age<=25))
    {
    console.log("Young Adult");
        
    }
    else
    console.log("Adult");
}
else {
    console.log("Enter a valid number");
}
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    let str2=""; // An empty string is initialized to store the reversed string
    let lengthar = str.length; // store the actual length of the string
    for(let j = lengthar-1; j>=0 ; j--) //Iterates through the string staring from the end to begining
    {
     str2 += str[j]; //each letter by letter is stored to the starting index to store the reversed string
    }
    return str2 // returns the reversed string
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    let largest; //A variable to store the largest element
    for(let i = 0;i<=numbers.length-1;i++) //Iterate through he array of elements
    {
        for(let j = i+1;j<=numbers.length-1;j++) //Iterate through the array of elements starting from i+1
        if(numbers[i]>numbers[j]){ //comparison
           largest = numbers[i];
        }
        else {
            largest = numbers[j];

        }
    }
    return largest; //returning the largest
    
}
// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count:0, //initialzing count
    add: function(){ //Writing increment function
        this.count++; 
    },
    subtract: function(){ //Writing decrement funtion
        this.count--;
    },
    reset: function(){ //resting to zero 
        this.count=0;
    },
    display: function(){ //print the counter
        console.log(counter);
    },

};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0