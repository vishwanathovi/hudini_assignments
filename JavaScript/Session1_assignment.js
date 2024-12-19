// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. 
// Print the sum at the end.


//code--
function sum(){
    //initialize add=0
    add=0
    //impliment for loop where i starts from 10 to 30
    for (let i=10;i<30;i++){
        //check is modulus of i with 2 is not equal to 0 (logic to find odd numbers)
        if(i%2!=0){
            //if true then add i to "add"
            add=add+i;
        }
    }
    return add
}
console.log(sum())



// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. 
// Each entry should be in the format `2x1=2`


//code--
function printMultable(num){
    //implement for loop from i 1 to 10(for getting multiplication table from 1-10)
    for (let i=1;i<10;i++){
        //set the print format according to num * 1 = there product using temprate literals
        console.log(`${num}*${i}=${num * i}`);
  }
}

printMultable(5)



//Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers


//code--
function getPostivenumbers(arr){
  //initializes an empty array 
  const positiveNumbers = [];
  //itrate through each element using for loop
  for (let i = 0; i < arr.length; i++) {
      //check if each value is > 0
      if (arr[i] > 0) {
          //if true push it into array
          positiveNumbers.push(arr[i]);
      }
  }
  return positiveNumbers;
}



//Question 4:Write a function that finds the maximum number in an array of numbers and prints it.


//code--
function getMax(arr){
    //set maximum value as oth element of array
    let max = arr=[0];
    //itrate from 1st element to end of array
    for (let i=1;i<arr.length;i++){
        //check if max< arr[i] 
        if (arr[i]>max){
            //true then set max =arr[i](logic)
            max=arr[i]
        }
    }
    console.log("Maximum:"+max)
}


//Qusetion 5: write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, 
//and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".


//code--
function FizBuz(n){
//itrate from 1 to n
  for (let i = 1; i <= n; i++) {
    //check if i is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //true the print "FizzBuzz"
      console.log("FizzBuzz");
      //otherwise if i is only divisible with 3
    } else if (i % 3 === 0) {
      console.log("Fizz");
      //otherwise if i is only divisible with 5
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      //just print the number
      console.log(i);
    }
  }
}