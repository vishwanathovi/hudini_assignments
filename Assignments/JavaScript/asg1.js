// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:

// Psuedo Code:
// calculateAverage() function takes the numbers in an array and returns the sum of the numbers in an array
//Initialize a variable called sum to 0
//Use for loop for travesing across the numbers in the array
//Add each number in an array and assign it to the sum variable
//after the loop finishes assign the (sum / length) to average variable  and return average

function calculateAverage(numbers) {
//Initialize sum to 0
    let sum=0
    for(i=0;i<numbers.length;i++){
        //adding each number in an array to sum variable
        sum+=numbers[i]
        
    }
    //assigning the total sum divided by the length of the array to average variable
    average=sum/numbers.length
    return average
    
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:

//checkAge() function takes the age and checks the age based on the condition
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.

    //if age is less than 18 then print minor
    if(age<18){
        console.log("minor");
    }
    //else if age is less than 25 then print young adult
    else if(age<=25){
        console.log("young adult");
    }
    //else print adult
    else{
        console.log("adult");
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String

// reverseString() fn takes the word as a string and then reverses the word
function reverseString(str) {
    // Write your code here to reverse and return the string.
    // Assigning an empty string to a variable
    rev=""
    //Using for loop that traveses across each letter of the word
    for(let i of str){
        rev=i+rev
    }
    return rev
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number



//findLargestNumber() fn takes the numbers in an array and returns the largest number
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    
    //Initializing 0 to largest variable
    largest=0
    //for loop that traveses each numbers till the length of the array
    for(i=0;i<numbers.length;i++){
        //Checks if the number in an array is greater than largest 
        if(largest<numbers[i]){
            largest=numbers[i]
        }
        //Loop continues till you find the largest number in an array
        
        
    }
    return largest
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:

//Counter is an object that contains key value pairs which consists of add, subtract, reset and display
const counter = {
    //Zero is initialized to count variable
    count: 0,
    //add is the key and its function is the value which increments the countvariable
    add: function(){
        this.count += 1
    },
    //subtract is the key and its function is the value which decrements the count 
    subtract: function(){
        this.count -= 1
    },
    //reset is the key and its function is the value which resets the count to 0
    reset:function(){
        this.count = 0
    },
    //display is the key and its function is the value that displays its count 
    display:function(){
        console.log(this.count)
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