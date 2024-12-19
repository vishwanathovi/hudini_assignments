// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum/numbers.length;
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30




// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(typeof(age)=="string"){
      console.log("pass the number");
    }
    else if(age<0){
      console.log("invalid age");
    }
    else if(age>150){
      console.log("invalid age");
    }
    else if(age>50){
        console.log("adult");
    }
   else if(age<25){
    console.log("young adult");
   }
   else{
    console.log("minor");
   }
}

// Example usage:
checkAge(158); // Possible output: young adult


// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}


// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"




// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    let maxi=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>maxi){
            maxi=numbers[i]
        }
    }
    return maxi;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50


// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count: 0,
    add: function() {
      this.count++;
    },
    subtract: function() {
      this.count--;
    },
    reset: function() {
      this.count = 0;
    },
    display: function() {
      console.log("Count:", this.count);
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




