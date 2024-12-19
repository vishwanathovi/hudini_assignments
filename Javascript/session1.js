// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
// Write your code here to calculate and return the average of the array elements.
function calculateAverage(numbers){
    // Write your code here to calculate and return the average of the array elements.
        // loop from i = 1 to i = n
        // in each iteration, i is increased by 1
        let sum=0;
        for (let i = 0; i <numbers.length; i++) {
            sum += numbers[i];  
        }
        return sum/numbers.length;
    }
    console.log(calculateAverage([10,20,30,40,50]));

// Example usage:
//console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(age<18){
        console.log("Minor");
    } else if(age>29){
        console.log("Adult");
    } else{
        console.log("Young Adult");
    }
}
checkAge(25);

//another way to write this program.
function checkAge(age) {
    if(age>150){
        console.log("Exceeding Age Limit");
    }
    if(age<0){
        console.log("Negative");
    }
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(age<18){
        console.log("Minor");
    } else if(age<=29){
        console.log("Young Adult");
    } else{
        console.log("Adult");
    }
}
checkAge(25);

// Example usage:
//checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    let reverse="";
    for(i=str.length-1;i>=0;i--){
        reverse+= str[i];
    }
    return reverse;
}
console.log(reverseString("hello")); // Expected output: "olleh"

// Example usage:
//console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    let a=numbers[0];
    for(i=0;i<numbers.length;i++){
        if (numbers[i]>a){
            a=numbers[i];
        }
    }
    return a;
}
console.log(findLargestNumber([10, 20, 30, 40, 50]));

// Example usage:
//console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count: 0,
    add: function(){
        this.count+= 1 ;
    },
    sub: function(){
        this.count-= 1 ;
    },
    reset: function(){
        this.count = 0;
    },
    display: function(){
        console.log(this.count);
    }
}
counter.add();
counter.add();
counter.display();
counter.sub();
counter.display();
counter.reset();
counter.display();
// Example usage:
//counter.add();
//counter.add();
//counter.display();  // Output: 2
//counter.subtract();
//counter.display();  // Output: 1
//counter.reset();
//counter.display();  // Output: 0