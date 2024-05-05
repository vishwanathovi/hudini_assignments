// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.

    //initialize the sum as 0.
        let sum = 0;
    
    //use the loop and get the sum of the array
        //return the average 
        for (let i = 0; i< number.length; i++) {
            sum += number[i];
           }
            return sum/number.length;
   }
        const number = [10,20,30,40,50];
        const average = calculateAverage(number);
        console.log('Average = ', average);
// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30



// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
        if (age < 0 || age > 150){
            console.log('invalid age');
        }
        //check the age > 18 and print minor and young
        if (age < 18){
            console.log('minor and young');
        }
        //check if age > 18 and age < 25 and print young adult
        else if(age <= 25){
            console.log('Young Adult');
        }
        //else age > 25 print adult
        else{
            console.log('Adult');
        }
}
checkAge(6);
// Example usage:
checkAge(25); // Possible output: young adult



// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str){
// Write your code here to reverse and return the string.

    //initialize a string to store the reversed word.
    let reversed = '';
    //use a loop and itrate each char of the string.
    for(let i = str.length - 1; i >= 0; i--){
        //add the reversed char to 'reversed' string
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hudini'));

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"



// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.

    //initialize first element as the largestNumber in the array
    let largestNumber = numbers[0];
    //loop through the array and check each element against with the first element in the array.
    for (let i = 1; i < numbers.length; i++){

        //if any array element is largest than first element assign that to largestNumber and return it.
        if (numbers[i] > largestNumber){
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}
const numbers = [1,111,2,330,45,100];
console.log(findLargestNumber(numbers));

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50



// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    //initialize count a 0
    count: 0,
    //increment the count by 1
    add: function(){
        this.count++;
    },
    //decrement the count by 1
    subtract: function(){
        this.count--;
    },
    //set the count to 0
    reset: function(){
        this.count = 0;
    },
    //display the value of the count
    display: function(){
        console.log(this.count);
    }

};
counter.add();
counter.add();
counter.display();
counter.subtract();
counter.display();
counter.reset();
counter.display();



// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0
