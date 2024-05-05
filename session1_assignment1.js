// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    //initialize sum as 0
    let sum = 0;
    //use for loop to traverse through array
    for (let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    //return the average
    return sum / numbers.length;
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    //if age is greater than 150 print exceeding age limit
    //if age is  less than 0 print negative age 
    //if age is less than 18 print minor
    //if age is less than 30 and greater than 18 print young adult
    //if age is greater than 30 print adult
    if(age>150){
       console.log("exceeding age limit");
    }
    if (age<0){
        console.log("negative age value")
    }
    if(age<18){
        console.log("minor");
    } else if(age<=30 && age>=18){
        console.log("young adult");
    } else{
        console.log("adult")
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    //initialising a variable to store the reverse string
      let strRev ="";
      for(let i=str.length-1;i>=0;i--){
        strRev +=str[i];
      }
         return strRev;

}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
 let num=0;
   for(i=0;i<=numbers.length;i++){
       if (numbers[i] >= num){
           num =numbers[i];
       }
        }
    return num;    
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    value :0,
    add:function(){
        this.value++;
    },
    subtract:function(){
        this.value--;
    },
    reset:function(){
        this.value=0;
    },
    display:function(){
        return this.value;
    }

};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
console.log(counter.display());
counter.subtract();
counter.display();  // Output: 1
console.log(counter.display());
counter.reset();
counter.display();  // Output: 0
console.log(counter.display());
