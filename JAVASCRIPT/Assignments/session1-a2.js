// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
console.log('------------------------------------------------------');
function sumOfOddNumbers(){
    sum=0;
for(i=11; i<30; i++){
    if(i%2!=0){
        sum+=i;
    }
   
} console.log(sum);
}
sumOfOddNumbers();
console.log('------------------------------------------------------');
// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplicationTable(){
    for(i=1;i<=20;i++){
        let num = 2;
        pdt = i*num;
        console.log(`2 x ${i} = ${pdt}`);
    }
}
multiplicationTable();
console.log('------------------------------------------------------');

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positiveNumbers(numbers){
    let newArray =[];
  for(i=0;i<numbers.length;i++){
    if(numbers[i]>=1){
       newArray.push(numbers[i]) 
    }
  }
  console.log(newArray);
}
positiveNumbers([1,2,3,4,-4,-3,7,10,0]);
console.log('------------------------------------------------------');
// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function findMaxNumber(numbers) {
    
    largest = 0;
    for(i=0;i<numbers.length;i++){
     
      if(numbers[i]>=largest){
        largest =numbers[i];
      }

    }return largest;
}

// Example usage:
console.log(findMaxNumber([10, 20, 30, 40, 50])); 
console.log('------------------------------------------------------');

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
let n =10;
for(i=1; i<=n; i++){
    if(i%3==0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}