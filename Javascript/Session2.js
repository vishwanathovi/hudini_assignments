// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

//Input : number array - number
//return : sum of odd numbers,N (where N => 10<N<30)
//Output : print sum of odd numbers
function sum(number){
    let sumOfNum=0;
    for(let i=0;i<number.length;i++){
        if(number[i]%2==0 && number[i]>10 && number[i]<30){
            sumOfNum+=number[i];
        }
    }
    return sumOfNum;
}
console.log(sum([9,78,1,4,2]));
//_________________________________________________________________________________

// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

//problem definition : multiplication table of number N
//Input : number N => 1<N<20
//Return : none
//Output : print multiplication table of N (Nxi=i)
function multiply(N){
    if(N<1 || N>20){
        console.log("Invalid number");
    }
    else{
        let i=1;
        while(i<=10){
            console.log(N+"x"+i+"="+N*i);
            i++;
        }
    }
}
multiply(9);
//_________________________________________________________________________________

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

//problem definition : Find positive number in array nums and print it
//Input : number array - nums
//Return: positive numbers array
//Output : Print positive numbers
function positiveNumbers(nums){
    let positive_array=[];
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            positive_array[j]=nums[i];
            j++;
        }
    }
    return positive_array;
}
console.log(positiveNumbers([-9,0,15,4,-6]));
//_________________________________________________________________________________

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

//Problem definition : Finding the maximum occuring number in an array and its count.
//Input : number array - num_array
//Return : none
//Output : Maximum value, Count of occurence of digit
function maximum(num_array){
    let occurence=[];
    let maxCount=0;
    let j=0,i=0;
    let maxValue=0;
    num_array.sort();
    occurence[0]=1;
    while(i<(num_array.length)-1){
        if(num_array[i]==num_array[i+1]){
            occurence[j]=occurence[j]+1;
        }
        else{
            j++;
            occurence[j]=1;
        }
        if(occurence[j]>maxCount){
            maxValue=num_array[i];
            maxCount=occurence[j];
        }
        i++;
    }
    console.log("The maximum value is "+maxValue+"\nNumber of occurence="+maxCount);
}
maximum([1,2,6,3,1,3,3,3,2,5]);
//_________________________________________________________________________________

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

//Input : number limit 'n'
//Return : none
//Output : print the correct pattern
function print(n){
    for(let i=1;i<=n;i++){
        if(i%3==0){
            if(i%5==0){
                console.log("FizzBuzz");
            }
            else{
                console.log("Fizz");
            }
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }  
    }        
}
print(18);