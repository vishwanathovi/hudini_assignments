// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
    // Write your code here to calculate and return the average of the array elements.
        let sum=0;
        
        for(let i=0;i<numbers.length;i++){
            sum+=numbers[i];
        }
       let average=sum/numbers.length;
        return average;
    }
    const array=[10,20,30,40,50];
    // const average=calculateAverage(array);
    console.log(calculateAverage(array));

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(age>150){
        console.log('exceeding age limit')
    }
     if(age<0){
        console.log('negative age is not allowed')
    }
     if(age<18){
        console.log('minor');
    }else if(age<=22){
        console.log('young adult')
    }
    else{
        console.log('adult')
    }
}
checkAge(-2);

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
// Write your code here to reverse and return the string.
    let newString='';
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    let largerNumber=arr[0];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>largerNumber){
            largerNumber=arr[i];
        }
    }
    return largerNumber;
}
const arr=[10,50,30,5,78,45];
console.log(findLargestNumber(arr));

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count:0,
    increment: function (){
        this.count=this.count+1;
    },
    decrement: function (){
        this.count=this.count-1;
    },
    reset: function (){
        this.count=0;
    }
};
counter.increment();
counter.increment();
counter.display();//2
counter.decrement();
counter.display();//1
counter.reset();
counter.display();//0

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0