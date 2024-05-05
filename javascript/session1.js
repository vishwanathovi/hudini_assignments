// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    //to calculate average, first we need to find sum, so set sum =0
    let sum = 0
    //next we need to itrate through every element in array
    for (let i = 0 ; i < numbers.length; i++ )
    {
        //while itrating every elemnts is being added to sum.
         sum = sum + numbers[i]
    }
    //return sum
    return sum/numbers.length
}
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    //checking age> 150 not to exceed lmit.
    if(age>150){
        console.log("Age limit exceeded");
    }
    //checking age< 18(minor)
    else if (age < 18)
    {
        category = "minor"
     }
    //checking age< 30(young adult)
    else if ( age <= 30)
    {
        category = "young adult"

    }
    //else(adult)
    else {
        category = "adult"

    }
    return category
}

// Example usage:
console.log(checkAge(25)); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    //initialise a new empty string to store the reversed string.
    newString = ""
    //itrate throught he string from last to first
    for (let i = str.length-1 ; i >= 0; --i)
    {
      //store ech elments to newstring while itrating
      newString = newString + str[i]
    }
    // return new string
    return newString
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    //initialise the fist element in the array as largest number 
    let largest = numbers[0]
    //itrate through every elements in array
    for (let i = 0 ; i <= numbers.length; i++){
        // check the element is greater than its next element
        if (numbers[i+1] >  largest){
            //if thethe next elememt is greater assign the value of next element to lsrgest
            largest = numbers[i+1]
        }
    }
    return largest

}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    num: 0,
    add: function(){
       this.num = this.num+1;
    },
    display: function(){
        console.log(this.num);
     },
     subtract: function(){
        this.num = this.num-1;
    },
     reset: function(){
        this.num = 0;
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