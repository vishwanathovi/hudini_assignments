// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function oddSumCalculation(){
    let sum=0;
    for(let i=11;i<30;i+=2){
        sum=sum+i
    }
    return sum
}
console.log(oddSumCalculation())

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplication(number){
    if(number>1 && number<20){
        for(let i=1;i<=10;i++){
            console.log(` ${number}X${i} = ${number*i}`)
        }
    }
    else{
        console.log("Number limit is Exceeded 20 or below 1")
    }
}
multiplication(5)

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers\
function positiveNumber(numbers){
let positiveArray=[]
 for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        positiveArray.push(numbers[i])
    }
 }
 return positiveArray
}
console.log(positiveNumber([10,20,30,-20,-30]))

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maximumNumber(numbers){
    if(numbers.length===0){
        console.log("array is empty")
    }
     let maxNumber=numbers[0];
        for(let i=1;i<numbers.length;i++){
            if(numbers[i]>maxNumber){
                maxNumber = numbers[i]
            }
        }
        return maxNumber;
    }
    
console.log(maximumNumber([10,20,30,40,59]))

// Maximum Occurence
function maxOccurence(numbers){
    let obj={}
    for(let i=0;i<numbers.length;i++){
        const num = numbers[i]
        if(obj[num]){
            obj[num]+=1;
        }else{
            obj[num]=1
        }
    }
    let maxOccurence=0;
    let maxOccurenceNumber=null;
    for(let j=0;j<numbers.length;j++){
        if(obj[j]>maxOccurence){
            maxOccurenceNumber=j;
            maxOccurence=obj[j]
        }
    }
   return {maxOccurenceNumber,maxOccurence};
}
console.log(maxOccurence([1,2,2,1,3,4,5,5,5,13,13,13,13,13]))
// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(15)