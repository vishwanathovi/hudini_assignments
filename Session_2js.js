// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.
function calculate(numbers){
    sum=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        if(numbers[i]>10 && numbers[i]<30){
            sum = sum+numbers[i]
        }
        else{
            console.log(`Number ${numbers[i]} is not in the range`)
        }
    }
    else{
        console.log(`The number ${numbers[i]} is even`)
    }
}
return sum
}
console.log(calculate([5,15,13,12,16]))
// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`
function multiplicationtable(number){
    if(number>=1 && number<=20){
        for(let i=0;i<=10;i++){
            console.log(`${number}x${i}=${number*i}`)
        }
    }
    else{
        console.log("The Provided number is not in the range")
    }
}
console.log(multiplicationtable(-4))
// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positive(numbers){
    pos_num = []
    for(let i=0;i<10;i++){
        if(numbers[i]>0){
            pos_num.push(numbers[i])
        }
    }
    console.log(pos_num)
}

console.log(positive([20,-10,-50,60,-30]))

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.
function maxi_num(numbers){
    largest = 0
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i]
        }
    
    }
    console.log(largest)

}
console.log(maxi_num([20,300,50,70,10]))

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
function multiples(number){
    for(let i=1;i<=number;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }

        else if (i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }

    }
}

console.log(multiples(25))
