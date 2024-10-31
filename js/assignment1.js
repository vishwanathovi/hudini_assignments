// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:

//calculateAverage function takes array and calculate the average of the sum of all elements in the array
//Argument: Array(Numbers)
//Returns: Number
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    let avg = 0
    for(let i  of numbers){
        if(typeof(i) != "number"){
            return "all the elements in the array should be a number";
        }
        avg += i
    }
    return avg/numbers.length
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:

//checkAge function takes age and prints if the person is minor, young adult or an adult
//Argument: Age Integer(0 - 150)
//Returns: None
//Side Effects: Prints the category
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(typeof(age) != "number"){
        console.log("enter a number")
        return
    }
    if(age < 0 || age > 150){
        console.log("Enter a valid age range: 0 - 150")
        return
    }

    if(age < 18){
        console.log("minor")
    }
    else if(age <=25){ //if(age <= 25){...}
        console.log("young adult")
    }
    else{
        console.log("adult")
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:

//reverseString function takes string and return the reverse value of the string
//Argument: str(String)
//Returns: String
function reverseString(str) {
    //checks the input
    if(typeof(str) != "string"){
        return "enter a String"
    }

    let rev = ""
    for(let i of str){
        rev = i + rev
    }
    return rev
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:

//findLargestNumber function takes array and return the greatest value in the array
//Argument: Array(Numbers)
//Returns: Number
function findLargestNumber(numbers) {
    let gtr_num = Number.NEGATIVE_INFINITY;
    for(let i of numbers){
        //check if all the element in the array is a number
        if(typeof(i) != "number"){
            return "all the elements in the array should be a number"
        }
        if(i > gtr_num){
            gtr_num = i
        }
    }
    return gtr_num
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:

//contain a count property which multiple properties is manupulate it.
const counter = {
    count: 0,
    add: function(){
        this.count += 1
    },
    display: function(){
        console.log(this.count)
    },
    subtract: function(){
        this.count -= 1
    },
    reset: function(){
        this.count = 0
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