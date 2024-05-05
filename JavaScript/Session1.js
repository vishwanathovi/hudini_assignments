// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:


//code--
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
    // Initialze sum=0
    let sum=0;
    //Impliment for loop where i is from 0 to array length
    for (let i=0;i<numbers.length;i++){
        //add sum with array[i]
        sum=sum+numbers[i]
    }
    //return average as sum/length of array
    return sum/numbers.length

}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30



// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:


//code--
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    
    //use if-else statement and check all the test cases. 
    if(age>150){
        console.log("Age limit exceeded.")// if age is above 150
    }
    if(age<0){
        console.log("Invalid age limit.")// if age is nagative
    }

    //now just the normal test cases in question
    if (age<=16){
        console.log("The person is a minor.")
    }
    else if(age<=21){
        console.log("The person is a young adult.")
    }
    else{
        console.log("The person is an adult.")
    }


}


// Example usage:
checkAge(25); // Possible output: young adult



// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:


//code--
function reverseString(str) {
    // Write your code here to reverse and return the string.
    // var splitString=str.split("")
    // var reverseArray=splitString.reverse();
    // var joinArray= reverseArray.join("")
    // return joinArray;

    //initialize newString as empty string
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



// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:

//code--
function findLargestNumber(arr) {
    
    
    //set a variable value to 1st element of input array.
    let largestNum = arr[0];
    // for loop for itrating through input array form i=1.
    for (let i = 1; i < arr.length; i++) {
        //check if array element is > variable.
        if (arr[i] > largestNum) {
            //if true change values.
            largestNum = arr[i];
        }
    }
    return largestNum;

}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50



// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:


//code--
const counter = {
    // initrialize counter value to 0.
    count:0,
    //add function to increment.
    add: function(){
        this.count++;
    },
    //subtract function to decrement. 
    subtract: function(){
        //check if count is already 0 so that counter donot go negative.
        if(count==0){
            this.count=0;
        }
        else{
        this.count--;
        }
    },
    //display function to print current counter value.
    display: function(){
        console.log(this.count);
    },
    //reset function to set counter value to 0.
    reset: function(){
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