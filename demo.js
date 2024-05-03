// function calculateAverage(numbers) {
//     sum=0
//     for(let i=0;i<numbers.length;i++)
//     {
//         sum = sum+numbers[i]
//     }
//     return sum/numbers.length

    
// }
// console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 

// function checkAge(age) {
//     let group
//     // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
// if(age<18)
// {
//     group = "minor"
// }
// else if(age>18 && age<28){
//     group = "Young Adult"
// }
// else{
//     group = "Adult"
// }
// return group
// }


// // Example usage:
// checkAge(25); 

// function reverseString(hello) {
//     let stri = ""
//     for(i=hello.length-1;i>=0; --i)
//     {
//         stri = stri+hello[i]
//     }
//     return stri
// // Write your code here to reverse and return the string.
// }
// console.log(reverseString("hi"))

// function findLargestNumber(numbers)
//     {
//         largest = numbers[0]
//         for(let i =0;i<numbers.length;i++)
//         {
//            if(numbers[i]>largest)
//            {
//             largest = numbers[i]
//            }
//         }
//         return largest
//     }
// console.log(findLargestNumber([10, 900, 3000, 40, 50]))

// const counter = {
//     count:0,
//     add: function add(){
//         this.count = this.count+1
//     },
//     subtract: function subtract(){
//         this.count = this.count-1
//     },
//     reset:function reset(){
//         this.count = 0

//     },
//     display:function display(){
//       console.log(this.count)  
//     },

// };

// // Example usage:
// counter.add();
// counter.add();
// counter.display();  // Output: 2
// counter.subtract();
// counter.display();  // Output: 1
// counter.reset();
// counter.display();  // Output: 0


function calculate(numbers){
    sum=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        if(numbers[i]>10 && numbers[i]<30){
            sum = sum+numbers[i]
        }
        else{
            console.log("Number is not in the range")
        }
    }
    else{
        console.log("The number is even")
    }
}
return sum
}
console.log(calculate([10,11,13,25,41,42]))