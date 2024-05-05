// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

function sumOfoddNumbers(){
    sum = 0;
    //use for loop to itrate through the numbers 10 to 30
    for (let i = 11; i <= 30; i+=2){
      console.log('the numbers are: ', i); 
      //add the numbers and get the sum
      sum += i;
      }
      console.log('Sum =',sum);
    }
  sumOfoddNumbers();


// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

function multiplicationTable(a){
    x = 0;
    //check if the number > 1 and number < 20.
    if(a < 1 || a > 20){
        console.log('Number should be between 1 and 20');
        return;
    }
        //itarte the number to 10 and multiply that number with 'a'.
      for(let b = 1; b <= 10; b++){
        x = a * b;
        //print into the correct format.
        console.log(`${a} x ${b} = ${x}`);
      }
  }
  multiplicationTable(2);

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiveNumbers(numbers){
    //loop through the array of numbers.
    for (let i = 0; i < numbers.length; i++ ){
        //check the number and print numbers > 0.
      if(numbers[i] > 0){
        console.log(numbers[i])
      }
    }
  }
  const numbers = [1,-2,-3,4,5,6,0,3];
  positiveNumbers(numbers);


// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

function findMaxNumber(numbers) {
    //initialize first element as the maxNumber in the array
    let maxNumber = numbers[0];
    //loop through the array and check each element against with the first element in the array.
    for (let i = 1; i < numbers.length; i++){
        //if any array element is largest than first element assign that to maxNumber and return it.
        if (numbers[i] > maxNumber){
            maxNumber = numbers[i];
        }
    }
    console.log('Maximum number = ' +maxNumber)
}
const numbers = [1,111,2,330,45,100];
findMaxNumber(numbers);


// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function printNumbers(n) {
    //loop to get the numbers from 1 to n.
    for (let i = 1; i <= n; i++) {   
        //check wheather 'i' is the multiples of 3 and 5 at the start.
        if( i % 3 == 0 && i % 5 == 0){
            //if so printing 'fizzbuzz' instead.
            console.log('Fizzbuzz');
            continue;
        }
        //check wheather i is multiple of 3.
        if (i % 3 == 0){
            //if true print 'fizz'.
            console.log('fizz');
            continue;
        }
        //check wheather i is multiple of 5.
        if(i % 5 == 0){
            //if true print 'buzz'.
            console.log('Buzz');
            continue;
        }
    //printing rest of the numbers.
    console.log(i);
    }
}
printNumbers(35);