// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    // initialize the sum=0
    // use for loop to traverse around the loop
    // calculate the average and print it
    let sum=0;
    for(i=0;i<numbers.length;i++){
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
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    //if the age is less than 18 print it is as minor
    // if age is greater than 18 and lesser than 36 print youth
   // if its not any of the condition print as adult

if (age>150){
    console.log('exceeding age limit')
} else if (age<0){
    console.log('negative age limit')
} else if(age<18) {
    console.log('minor')
} else if(age>=18 && age<36) {
    console.log('youth')
}  else {
    console.log('adult')
} }  
// Example usage:
checkAge(25); // Possible output: young adult


// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    // variable for storing the reversed string
    // traversing from the end of the string to beginning
    // adding each letter from the end to the strg and print it
    let strg='';
    for ( i =str.length-1; i >=0;i-- )
     {
     strg+= str[i];
    }
    return strg;
}
// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    // initilize max as 0
    // travers through the array to find the max and store it in max and print
    let max= numbers[0];
    for (i = 0; i < numbers.length; i++) { 
        if (numbers[i] > max) 
            max = numbers[i]; 
    }  return max; 
}
// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    value :0,
    add: function()
    {
        this.value++;
    },
    subtract: function()
    {
        this.value--;
    },
    reset: function()
    {
        this.value=0;
    },
    display: function() {
        return this.value; 
    }
};

// Example usage:
counter.add();
counter.add();// Output: 2
console.log(counter.display());
counter.subtract();// Output: 1
console.log(counter.display());
counter.reset();// Output: 0
console.log(counter.display());