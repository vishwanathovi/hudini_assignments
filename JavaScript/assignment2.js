//Question 1
//sum of odd numbers between 10 to 30
function sumOdd(){
    //initialize sum is 0
    let sum=0;
    
   for(let i=10;i<=30;i++){
    //checking the no is odd
    if(i%2!=0){
        //if the no is odd then add to sum
        sum+=i;
    }
   }
   return sum
}
console.log("sum of odd numbers : ",sumOdd());

//Question 2
//Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiNum(num){
    //initialize the result as 0
    let res=0;
    //print the heading to understand
    console.log("multiplication table of "+num)
    for(let i=1;i<=20;i++){
        //multiplication
        res=num*i;
        //print like multiplication table
        
        console.log(num+"*"+i+"="+res)
    }
    
}
multiNum(2);

//Question 3
//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function arrayOfNumbers(Numbers){
    //initialize the result array as empty
    let res_array=[]
    for(let i=0;i<Numbers.length;i++){
        if(Numbers[i]>0){
            //using push method we can add the items to new array
            res_array.push(Numbers[i])
        }  
    }
    return res_array
}
console.log("new array of positive numbers : ",arrayOfNumbers([-1,2,3,-4,-5,8,9]));

//Question 4
//Write a function that finds the maximum number in an array of numbers and prints it.
function maxNumber(numarray){
    maximum_num=numarray[0]
    for(let i=0;i<numarray.length;i++){
        if(numarray[i]>maximum_num){
            maximum_num=numarray[i]
        }
    }
    return maximum_num
}
console.log("maximum number of the array",maxNumber([19,34,22,13,55,84,56,24]));

//Question 5
// Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function printNumbers(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
        
    }
}
printNumbers(20)
