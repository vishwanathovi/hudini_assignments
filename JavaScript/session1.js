
// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.


// Example usage:checkAge(25); // Possible output: young adult
function checkAge(age)
{
    if(age>150){
        console.log("Exceeding age limit")
    }
    if(age<0){
        console.log("Negative age vale")
    }
    if(age<=18){
        console.log('Minor')}
    else if(age<=25){
        console.log('Young adult')}
    else{
        console.log('Adult')}
}
checkAge(25);





// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    let emptystr="";
    for(let i=str.length-1;i>=0;i--)
    {emptystr = emptystr + str[i];}
    return emptystr;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"





// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(num) {
    // Write your code here to find and return the largest number in the array.
    
    let max=num[0];
    for(let i=0;i<num.length;i++)
    {
        if(num[i]>max)
        max=num[i];
    
    }
    return max;
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count:0,
    display: function(){
      console.log("Count:",this.count);
    },
    
add: function(){
    this.count++;
},
subtract: function(){
    this.count--;
},
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