// Question 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    let sum=0; //initialise sum
    for(let i = 0; i<numbers.length; i++){  // implement for loop to initialise i and condition i where i less than array length
        sum += numbers[i];}
        return sum / numbers.length; 
    }
    const numbers = [10,20,30,40,50];
    const average = calculateAverage(numbers);
    console.log("Average:", average);
    // Write your code here to calculate and return the average of the array elements.
// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30



// Question 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
// Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
function checkAge(age) {
    if(age<=18){            //condition for minors age below 18
        console.log("minor");
    }
    if(age>18 && age<=28){      //condition for young adults age between 18 to 28
        console.log("young adult");
    }
    else{
        console.log ("adult");      //condition for adults
    }
}// Example usage:
checkAge(25); // Possible output: young adult


// Question 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
 var newString = "";
    //impliment for loop in decrement where i started from last element to zero
    for (var i = str.length - 1; i >= 0; i--) {
            //add each element into array
            newString += str[i];
        }
        return newString;// return the reversed array
    }
    // Example usage:
console.log(reverseString("hello")); // Expected output: "olleh" 

// Question 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
        let largest = number[0];        // initialise largest
        for (let i=1; i<numbers.length; i++){    // initialise i and implement condition using for loop
            if (numbers[i] > largest){          // use if statement to implement condition
                largest = numbers[i];           //if true the value is assigned inside large
            }
        } 
        return largest;
// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50
}

// Question 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = { 
    _count: 0,
    add: function(){
        this._count++;
    },
    subtract: function(){
        if (this._count>0){
            this._count--;
        }
    },
    display: function(){
        console.log(this._count);
    },
    reset: function() {
        this._count=0;
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

