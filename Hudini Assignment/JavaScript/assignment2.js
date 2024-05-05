//Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function sumOfOddNumbers(number){
    // initialize variable sum=0
    let sum=0;
    // create for loop by which a range of numbers to be checked
    for(let i=10;i<30;i++){
        // check the number is odd or not
      if(i%2===1){
        //sum the odd numbers
        sum+=i;
      }
    }
    return sum;
  };
  //print the sum
  console.log(sumOfOddNumbers());//output is 200

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplicationTable(number){
    // check if the number is present in the valid range
    if(number<1 || number>20){
        return;
    }
    // print the multiplication table
    for(let i=0;i<=10;i++){
        let result=number * i;
        console.log(`${result} = ${number} x ${i}`);
    }
}
multiplicationTable(2);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositiveNumber(array){
    // create an empty array
    const positiveNumber=[];
    // create for loop 
    for(let i=0;i<array.length;i++){
        // check if the element of an array is posititve
        if(array[i]>0){
            // push the element to the arrray by using push()
            positiveNumber.push(array[i]);
        }
    }
    return positiveNumber;
}
// create an array with elements
const myArray=[12,-4,7,-5,-8,90,34,-8];
const positiveNumber=getPositiveNumber(myArray);
// print the positive number
console.log(positiveNumber);
// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function findMaximumNumber(array){
    // intitialize first element of an array as maximum number
    let maximmumNumber=array[0];
    // create for loop 
    for(let i=1;i<array.length;i++){
        // check next element of an array is greater than the first element
        if(array[i]>maximmumNumber){
            // assign the maximum number
            maximmumNumber=array[i];
        }
    }
    return maximmumNumber;
}
// create an array
const myArray=[12,5,78,34,56,97,32,11,89];
// print the maximum number
console.log(findMaximumNumber(myArray));

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// create for loop for numbers from 1 to n
for(let i=1;i<=n;i++){
    //check if the number is multiple of both three and five
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
        //check if the number is multiple of 3
    }else if(i%3===0){
        console.log("Fizz")
        // check if the number is multiple of 5
    }else if(i%5===0){
        console.log("Buzz")
        // print the numbers
    }else{
        console.log(i);
    }

}