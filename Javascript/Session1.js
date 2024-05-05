// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    //Problem definition : to calculate and return the average of the array elements.
    //Takes numbers:array
    //returns:Average
    //side effects:none
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=numbers[i]+sum;
    }
    const avg = sum/numbers.length;
    return avg;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    //Takes age:Integer(0-150)
    //Return :none
    //side effect :prints the age category
    if(age>150){
        console.log("Age limit exceeded");
    }
    else if(age<0){
        console.log("Invalid age");
    }
    if(age<18){
        console.log("Minor");
    }
    else if(age<28){
        console.log("Young Adult");
    }
    else{
        console.log("Adult");
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
//Takes string 
//Return:reversed string
//side effect:print the reversed string
function reverseString(str) {
    // Write your code here to reverse and return the string.
    let revStr="";
    const n=str.length;
    for(let i=0;i<n-1;i++){
        revStr = revStr+ str.charAt(n-i-1);
    }
    return revStr;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
//Input:Number array
//Return: largest number
//Side effect:print the largest number
function findLargestNumber(numbers) {
    let large=0;
    // Write your code here to find and return the largest number in the array.
    for(let i=0;i<numbers.length;i++){
        if(large<numbers[i]){
            large=numbers[i];
        }
    }
    return large;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
//side effects : add,reset or subtract number when called add(),reset() or subtract() method
//Output : display current value

const counter = {
    count:0,
    add: function() {
       this.count++;
    },
    subtract: function() {
       this.count--;
    },
    display: function() {
       this.count;
    },
    reset: function() {
       this.count=0;
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