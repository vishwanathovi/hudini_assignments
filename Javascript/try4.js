function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    let a=numbers[0];
    for(i=0;i<numbers.length;i++){
        if (numbers[i]>a){
            a=numbers[i];
        }
    }
    return a;
}
console.log(findLargestNumber([10, 20, 30, 40, 50]));