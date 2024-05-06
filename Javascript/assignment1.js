/*// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:
function calculateAverage(numbers) {
   let sum=0;
   let n=0;
   for(let i=0;i<numbers.length; i++)
   {
    sum+=numbers[i];
   }
    n=sum/numbers.length;
    return n;
   
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30*/




/*// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    if(age <18)
    {
        console.log("The person is minor");
    }
    else if(age >=18 && age <=45)
    {
        console.log("The person is Young adult");
    }
    else
    {
        console.log("The person is adult");
    }

}

// Example usage:
checkAge(25); // Possible output: young adult*/


//3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
/*function reverseString(str) {
    let reversed=" ";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed +=str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"*/



// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
/*function findLargestNumber(numbers) {
     let largest =numbers[0];

    for (let i = 1; i < numbers.length; i++) 
    {
        if (numbers[i] > largest) {
            largest = numbers[i]; // Update largest if the current number is greater
        }
   }
   return largest;
}
// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50*/


// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {

    count:0,
    add:function(){
        this.count++;
    },
    subtract:function(){
        this.count--;
    },
    reset:function(){
        this.count =0;
    },
    display:function(){
        console.log("count",this.count);
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


